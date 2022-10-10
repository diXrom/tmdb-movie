import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from 'shared/store';
import Form from 'widgets/Form';

describe('Form component', () => {
  const FormWitchProvider = (
    <Provider store={setupStore()}>
      <Form />
    </Provider>
  );

  it('should render Form', () => {
    render(FormWitchProvider);

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('should render disable submit button', async () => {
    render(FormWitchProvider);
    const submitBtn = screen.getByTestId('formSubmit');
    const textInput = screen.getByTestId('inputFirstName');

    expect(submitBtn).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();

    expect(submitBtn).toBeDisabled();
    await userEvent.type(textInput, 'Timur');
    expect(submitBtn).not.toBeDisabled();
  });

  it('should render form validation when submit', async () => {
    render(FormWitchProvider);
    const submitBtn = screen.getByTestId('formSubmit');
    const inputFirstName = screen.getByTestId('inputFirstName');

    await userEvent.type(inputFirstName, 'Timur');
    await userEvent.click(submitBtn);
    expect(screen.getByText(/Please enter your Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your Birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Please upload Photo/i)).toBeInTheDocument();
    expect(screen.getByText(/Please read\/agree with rules/i)).toBeInTheDocument();
  });

  it('should render input text First Name', async () => {
    render(FormWitchProvider);
    const textInput = screen.getByTestId('inputFirstName');

    expect(textInput).toBeInTheDocument();

    await userEvent.type(textInput, 'di');
    expect(textInput).toHaveValue('di');
  });

  it('should render input text Last Name', async () => {
    render(FormWitchProvider);
    const textInput = screen.getByTestId('inputLastName');

    expect(textInput).toBeInTheDocument();

    await userEvent.type(textInput, 'xrom');
    expect(textInput).toHaveValue('xrom');
  });

  it('should render input text Birthday', async () => {
    render(FormWitchProvider);
    const dateInput = screen.getByTestId('inputBirthday');

    expect(dateInput).toBeInTheDocument();

    await userEvent.type(dateInput, '01/01/2000');
    expect(dateInput).toHaveValue('01/01/2000');
  });

  it('should render input select', async () => {
    render(FormWitchProvider);
    const selectInput = screen.getByTestId('inputCountry');

    expect(selectInput).toBeInTheDocument();

    await userEvent.click(within(selectInput).getByRole('button'));
    const listbox = within(screen.getByRole('presentation')).getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    const optionValues = options.map((li) => li.getAttribute('data-value'));

    expect(optionValues).toEqual(['Kazakhstan', 'Russia', 'Belarus', 'Ukraine']);
  });

  it('should render input switch', async () => {
    render(FormWitchProvider);
    const switchInput = screen
      .getByTestId('inputSwitch')
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toHaveProperty('checked', false);

    await userEvent.click(switchInput);
    expect(switchInput).toHaveProperty('checked', true);
  });

  it('should render input checkbox', async () => {
    render(FormWitchProvider);
    const checkboxInput = screen
      .getByTestId('inputCheckbox')
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveProperty('checked', false);

    await userEvent.click(checkboxInput);
    expect(checkboxInput).toHaveProperty('checked', true);
  });

  it('should render input file', async () => {
    render(FormWitchProvider);
    const file = new File(['img'], 'img.png', { type: 'image/png' });
    const fileInput = screen.getByTestId('inputFile') as HTMLInputElement;

    await userEvent.upload(fileInput, file);

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files && fileInput.files[0]).toStrictEqual(file);
    expect(fileInput.files && fileInput.files.item(0)).toStrictEqual(file);
  });
});
