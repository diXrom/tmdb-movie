import { render, screen } from '@testing-library/react';

import { IPersonData } from 'widgets/Form/lib/types';
import PersonList from 'widgets/PersonList';

const personData: IPersonData[] = [
  {
    name: 'Timur',
    surName: 'Tolegen',
    birthday: '30-05-1995',
    country: 'Kazahstan',
    img: undefined,
  },
  {
    name: 'di',
    surName: 'Xrom',
    birthday: '15-05-2015',
    country: 'Kazahstan',
    img: undefined,
  },
];

describe('PersonList component', () => {
  it('should render PersonList', () => {
    render(<PersonList persons={personData} />);

    expect(screen.getByTestId('personList')).toBeInTheDocument();
  });

  it('should render two Persons', () => {
    render(<PersonList persons={personData} />);

    expect(screen.getByText(/Timur/i)).toBeInTheDocument();
    expect(screen.getByText(/di/i)).toBeInTheDocument();
  });
});
