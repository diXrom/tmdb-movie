import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'shared/store';

import { IPersonData } from 'widgets/Form/lib/types';
import PersonList from 'widgets/PersonList';

describe('PersonList component', () => {
  const PersonListWithProvider = (
    <Provider store={setupStore()}>
      <PersonList />
    </Provider>
  );

  it('should render PersonList', () => {
    render(PersonListWithProvider);

    expect(screen.getByTestId('personList')).toBeInTheDocument();
  });
});
