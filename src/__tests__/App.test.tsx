import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from 'app';
import AboutPage from 'pages/AboutPage';
import MainPage from 'pages/MainPage';
import PageNotFound from 'pages/PageNotFound';
import DrawerLayout from 'widgets/DrawerLayout';
import { ROUTE_PATH } from 'shared/common/constants';
import { store } from 'shared/store';

describe('App component', () => {
  it('should render App', () => {
    render(<App />);

    expect(screen.getByText(/Components/i)).toBeInTheDocument();
  });

  it('should render About Us page after user click link', async () => {
    render(<App />);
    await userEvent.click(screen.getAllByRole('link')[2]);

    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument();
  });

  it('should render PageNotFound page when wrong path', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <Routes>
            <Route path={ROUTE_PATH.INDEX} element={<DrawerLayout />}>
              <Route index element={<MainPage />} />
              <Route path={ROUTE_PATH.ABOUT_US} element={<AboutPage />} />
              <Route path={ROUTE_PATH.NOT_FOUND} element={<PageNotFound />} />
              <Route path="*" element={<Navigate to={ROUTE_PATH.NOT_FOUND} replace />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
