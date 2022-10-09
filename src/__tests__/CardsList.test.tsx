import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StoreContext from 'widgets/Context';

import MoviesList from 'widgets/MoviesList';

const cardsData = {
  ids: [27205, 157336],
  entities: {
    27205: {
      adult: false,
      backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      genre_ids: [28, 878, 12],
      id: 27205,
      original_language: 'en',
      original_title: 'Inception',
      overview:
        'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
      popularity: 94.405,
      poster_path: '/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg',
      release_date: '2010-07-15',
      title: 'Inception',
      video: false,
      vote_average: 8.4,
      vote_count: 32327,
    },
    157336: {
      adult: false,
      backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
      genre_ids: [12, 18, 878],
      id: 157336,
      original_language: 'en',
      original_title: 'Interstellar',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      popularity: 241.234,
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      release_date: '2014-11-05',
      title: 'Interstellar',
      video: false,
      vote_average: 8.4,
      vote_count: 29417,
    },
  },
  total_pages: 1,
};

describe('CardsList component', () => {
  it('should render two Cards', () => {
    render(
      <StoreContext>
        <MemoryRouter>
          <MoviesList movies={cardsData} loading={false} />
        </MemoryRouter>
      </StoreContext>
    );

    expect(screen.getAllByTestId('мovieItem').length).toBe(2);
  });

  it('should render zero Cards when data is empty', () => {
    render(
      <StoreContext>
        <MemoryRouter>
          <MoviesList movies={{ ids: [], entities: {}, total_pages: 0 }} loading={false} />
        </MemoryRouter>
      </StoreContext>
    );

    expect(screen.getByText(/Nothing found/i)).toBeInTheDocument();
  });
});
