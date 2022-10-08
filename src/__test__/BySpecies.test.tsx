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

test('Render characters by species "Human"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Human'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Human/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Animal"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Animal'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Animal/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Robot"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Robot'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Robot/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Alien"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Alien'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Alien/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Humanoid"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Humanoid'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Humanoid/
    );

    await waitFor(() => [
        expect(screen.queryByText('Human')).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Mythological"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Mythological'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Mythological/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Cronenberg"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Cronenberg'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Cronenberg/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Disease"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Disease'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Disease/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Unknown/)).not.toBeInTheDocument(),
    ]);
});

test('Render characters by species "Unknown"', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: /Species/ }));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText('Unknown'));
    expect(screen.getByTestId('select-option-species')).toHaveTextContent(
        /Unknown/
    );

    await waitFor(() => [
        expect(screen.queryByText(/Human/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Animal/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Robot/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Alien/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Humanoid/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Mythological/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Cronenberg/)).not.toBeInTheDocument(),
        expect(screen.queryByText(/Disease/)).not.toBeInTheDocument(),
    ]);
});
