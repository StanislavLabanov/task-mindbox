import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Тесты для todo приложения', () => {
  test('Отправка формы', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Example label/i);
    const button = screen.getByRole('button', { name: /Add Item/i });

    userEvent.type(input, 'Test Item 1');
    userEvent.click(button);

    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(input.value).toBe('');
  });
  test('Удаление элемента', () => {
    render(<App />);

    const element = screen.getByText('Test Item 1');

    const buttonDel = screen.getByText('Del');
    userEvent.click(buttonDel);
    expect(screen.getByText('Delete')).toBeInTheDocument();

    const buttonDelete = screen.getByText('Delete');
    userEvent.click(buttonDelete);

    expect(element).not.toBeInTheDocument();
  });
});
