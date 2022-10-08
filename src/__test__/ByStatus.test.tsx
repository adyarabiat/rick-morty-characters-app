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

test('fetches & receives a characters whose current status "Alive"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Status/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Alive/i));
    expect(screen.getByTestId('select-option-status')).toHaveTextContent(
        /Alive/i
    );

    await waitFor(() => [
        expect(screen.queryByText(/Dead/i)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/i)).not.toBeInTheDocument(),
    ]);
});

test('fetches & receives a characters whose current status "Dead"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Status/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Dead/i));
    expect(screen.getByTestId('select-option-status')).toHaveTextContent(
        /Dead/i
    );

    await waitFor(() => [
        expect(screen.queryByText(/Alive/i)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/i)).not.toBeInTheDocument(),
    ]);
});

test('fetches & receives a characters whose current status "Unknown"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.mouseDown(screen.getByRole('button', { name: /Status/i }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Unknown/i));
    expect(screen.getByTestId('select-option-status')).toHaveTextContent(
        /Unknown/i
    );

    await waitFor(() => [
        expect(screen.queryByText(/Alive/i)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Dead/i)).not.toBeInTheDocument(),
    ]);
});
