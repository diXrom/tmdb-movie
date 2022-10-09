import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MovieItem from 'widgets/MoviesList/ui/MovieItem';

const cardData = {
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
};

describe('Card component', () => {
  it('should render Card', () => {
    render(
      <MemoryRouter>
        <MovieItem movie={cardData} index={1} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('мovieItem')).toBeInTheDocument();
  });
});
