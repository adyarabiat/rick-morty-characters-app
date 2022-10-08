import { setupServer } from 'msw/node';
import { fireEvent, screen, within, waitFor } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { render } from '../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Characters from '../pages/Characters';
import { handlers } from '../mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

window.scrollTo = jest.fn();

test('fetches & receives a characters whose gender is "Female"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Gender/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Female/));

    expect(screen.getByTestId('select-option-gender')).toHaveTextContent(
        /Female/
    );
    await waitFor(() => [
        expect(screen.queryByText(/Male/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Genderless/i)).not.toBeInTheDocument(),
        expect(screen.queryByText(/unknown/i)).not.toBeInTheDocument(),
    ]);
});

test('fetches & receives a characters whose gender is "Male"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Gender/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Male/));

    expect(screen.getByTestId('select-option-gender')).toHaveTextContent(
        /Male/
    );
    await waitFor(() => [
        expect(screen.queryByText(/Female/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Genderless/i)).not.toBeInTheDocument(),
        expect(screen.queryByText(/unknown/i)).not.toBeInTheDocument(),
    ]);
});

test('fetches & receives a characters whose gender is "Genderless"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Gender/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Genderless/));

    expect(screen.getByTestId('select-option-gender')).toHaveTextContent(
        /Genderless/
    );
    await waitFor(() => [
        expect(screen.queryByText(/Female/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Male/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/unknown/i)).not.toBeInTheDocument(),
    ]);
});

test('fetches & receives a characters whose gender is "Unknown"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Gender/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Unknown/));

    expect(screen.getByTestId('select-option-gender')).toHaveTextContent(
        /Unknown/
    );
    await waitFor(() => [
        expect(screen.queryByText(/Female/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Male/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Genderless/i)).not.toBeInTheDocument(),
    ]);
});
