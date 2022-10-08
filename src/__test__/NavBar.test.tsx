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

test('when select Characters from the nav bar to render "byCharacters" component', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const CharacterTab = screen.getByTestId('nav-characters');
    fireEvent.click(CharacterTab);

    expect(screen.getByTestId('by-characters')).toBeInTheDocument();
    expect(screen.queryByTestId('by-episodes')).not.toBeInTheDocument();
    expect(screen.queryByTestId('by-location')).not.toBeInTheDocument();
});

test('when select Episodes from the nav bar to render "byEpisodes" component', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const EpisodesTab = screen.getByTestId('nav-episodes');
    fireEvent.click(EpisodesTab);

    expect(screen.getByTestId('by-episodes')).toBeInTheDocument();
    expect(screen.queryByTestId('by-characters')).not.toBeInTheDocument();
    expect(screen.queryByTestId('by-location')).not.toBeInTheDocument();
});

test('when select Location from the nav bar to render "byLocation" component', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const LocationTab = screen.getByTestId('nav-location');
    fireEvent.click(LocationTab);

    expect(screen.getByTestId('by-location')).toBeInTheDocument();
    expect(screen.queryByTestId('by-characters')).not.toBeInTheDocument();
    expect(screen.queryByTestId('by-episodes')).not.toBeInTheDocument();
});
