import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'widgets/Form';

describe('Form component', () => {
  it('should render Form', () => {
    render(<Form setData={jest.fn()} />);

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('should render disable submit button', async () => {
    render(<Form setData={jest.fn()} />);
    const submitBtn = screen.getByTestId('formSubmit');
    const textInput = screen.getByTestId('inputFirstName');

    expect(submitBtn).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();

    expect(submitBtn).toBeDisabled();
    await userEvent.type(textInput, 'Timur');
    expect(submitBtn).not.toBeDisabled();
  });

  it('should render form validation when submit', async () => {
    render(<Form setData={jest.fn()} />);
    const submitBtn = screen.getByTestId('formSubmit');
    const inputFirstName = screen.getByTestId('inputFirstName');

    await userEvent.type(inputFirstName, 'Timur');
    await userEvent.click(submitBtn);
    expect(screen.getByText(/Please enter your Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your Birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Please upload Photo/i)).toBeInTheDocument();
    expect(screen.getByText(/Please read and agree with rules/i)).toBeInTheDocument();
  });

  it('should render input text First Name', async () => {
    render(<Form setData={jest.fn()} />);
    const textInput = screen.getByTestId('inputFirstName');

    expect(textInput).toBeInTheDocument();

    await userEvent.type(textInput, 'di');
    expect(textInput).toHaveValue('di');
  });

  it('should render input text Last Name', async () => {
    render(<Form setData={jest.fn()} />);
    const textInput = screen.getByTestId('inputLastName');

    expect(textInput).toBeInTheDocument();

    await userEvent.type(textInput, 'xrom');
    expect(textInput).toHaveValue('xrom');
  });

  it('should render input text Birthday', async () => {
    render(<Form setData={jest.fn()} />);
    const dateInput = screen.getByTestId('inputBirthday');

    expect(dateInput).toBeInTheDocument();

    await userEvent.type(dateInput, '2022-10-03');
    expect(dateInput).toHaveValue('2022-10-03');
  });

  it('should render input select', async () => {
    render(<Form setData={jest.fn()} />);
    const selectInput = screen.getByRole('combobox');
    const selectOption = screen.getByRole('option', { name: 'Kazakhstan' }) as HTMLOptionElement;

    expect(selectInput).toBeInTheDocument();

    await userEvent.selectOptions(selectInput, selectOption);
    expect(selectOption.selected).toBe(true);
  });

  it('should render input file', async () => {
    render(<Form setData={jest.fn()} />);
    const file = new File(['img'], 'img.png', { type: 'image/png' });
    const fileInput = screen.getByTestId('inputFile') as HTMLInputElement;

    await userEvent.upload(fileInput, file);

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files && fileInput.files[0]).toStrictEqual(file);
    expect(fileInput.files && fileInput.files.item(0)).toStrictEqual(file);
  });

  it('should render input switch', async () => {
    render(<Form setData={jest.fn()} />);
    const switchInput = screen
      .getByTestId('inputSwitch')
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toHaveProperty('checked', false);

    await userEvent.click(switchInput);
    expect(switchInput).toHaveProperty('checked', true);
  });

  it('should render input checkbox', async () => {
    render(<Form setData={jest.fn()} />);
    const checkboxInput = screen.getByTestId('inputCheckbox');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveProperty('checked', false);

    await userEvent.click(checkboxInput);
    expect(checkboxInput).toHaveProperty('checked', true);
  });
});