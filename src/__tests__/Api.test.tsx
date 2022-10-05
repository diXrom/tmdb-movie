import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';

import App from 'app';
import MainPage from 'pages/MainPage';
import { MOCK_API_RESPONSE } from 'shared/common/constants';
import { renderWithProviders } from 'shared/store/lib/util';
import { API_IMG } from 'shared/api/model/constants';

describe('MainPage component', () => {
  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  it('should render spinner before response', async () => {
    fetchMock.mockResponse(JSON.stringify(MOCK_API_RESPONSE));
    renderWithProviders(<MainPage />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render movies when response is received', async () => {
    fetchMock.mockResponse(JSON.stringify(MOCK_API_RESPONSE));
    const posterPath = `${API_IMG}${MOCK_API_RESPONSE.results[0].poster_path}`;
    renderWithProviders(<MainPage />);

    await waitFor(() => {
      const movieItems = screen.getAllByTestId('мoviePoster') as HTMLImageElement[];
      expect(movieItems[0].src).toBe(posterPath);
      expect(movieItems.length).toBe(20);
    });
  });

  it('should render modal when the click event happened', async () => {
    fetchMock.mockResponse(JSON.stringify(MOCK_API_RESPONSE));
    const title = MOCK_API_RESPONSE.results[0].title;
    renderWithProviders(<MainPage />);

    expect(screen.queryByTestId('modal')).toBeNull();
    expect(screen.queryByTestId('modalCard')).toBeNull();

    await waitFor(() => {
      const movieItems = screen.getAllByTestId('мoviePoster') as HTMLImageElement[];
      userEvent.click(movieItems[0]);

      expect(screen.getByTestId('modal')).toBeInTheDocument();
      expect(screen.getByTestId('modalCard')).toBeInTheDocument();
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should render alert "Nothing found"', async () => {
    fetchMock.mockResponse(
      JSON.stringify({ page: 1, results: [], total_pages: 0, total_results: 0 })
    );

    render(<App />);
    const inputSearch = screen.getByTestId('inputSearch');
    const btnSearch = screen.getByTestId('btnSearch');
    await userEvent.type(inputSearch, 'qwerqt');
    await userEvent.click(btnSearch);

    await waitFor(() => expect(screen.getByTestId('мovieNotFound')).toBeInTheDocument());
  });
});
