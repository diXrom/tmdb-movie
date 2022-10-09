import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import SearchPanel from 'widgets/Header/ui/SearchPanel';
import { setupStore } from 'shared/store';
import StoreContext from 'widgets/Context';

interface Store {
  [key: string]: string;
}

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  key(): string | null {
    return null;
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

const Search = (
  <Provider store={setupStore()}>
    <StoreContext>
      <SearchPanel />
    </StoreContext>
  </Provider>
);

describe('SearchPanel component', () => {
  it('should render SearchPanel', () => {
    render(Search);

    expect(screen.getByPlaceholderText(/Search…/i)).toBeInTheDocument();
  });

  it('should render input value empty when localStorage is empty', () => {
    render(Search);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if localStorage contain it', async () => {
    localStorage = new LocalStorageMock();

    const { rerender } = render(Search);
    await userEvent.type(screen.getByDisplayValue(''), 'diXrom');
    rerender(Search);

    expect(screen.getByDisplayValue('diXrom')).toBeInTheDocument();
  });
});
