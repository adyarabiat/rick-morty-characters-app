import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
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

test('fetches characters by their names', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const searchField = screen.getByPlaceholderText(
        'Search for character'
    ) as HTMLInputElement;

    fireEvent.change(searchField, { target: { value: 'Albert Einstein' } });
    expect(searchField.value).toBe('Albert Einstein');
    expect(await screen.findByText(/Albert Einstein/)).toBeInTheDocument();
});

test('fetches characters by part of their names', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const searchField = screen.getByPlaceholderText(
        'Search for character'
    ) as HTMLInputElement;

    fireEvent.change(searchField, { target: { value: 'Alber' } });
    expect(searchField.value).toBe('Alber');
    expect(await screen.findByText(/Albert Einstein/)).toBeInTheDocument();
});
