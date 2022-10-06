import { render, screen } from '../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Characters from '../pages/Characters';
import ByCharacters from '../components/ByCharacters';
import ByEpisodes from '../components/ByEpisodes';
import ByLocations from '../components/ByLocations';

window.scrollTo = jest.fn();
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

jest.mock('../components/ByCharacters');
jest.mock('../components/ByEpisodes');
jest.mock('../components/ByLocations');

const ByCharactersComp = ByCharacters as jest.Mock;
const ByEpisodesComp = ByEpisodes as jest.Mock;
const ByLocationsComp = ByLocations as jest.Mock;

describe('Characters component', () => {
    beforeEach(() => {
        ByCharactersComp.mockImplementation(() => <p>Characters tab</p>);
        ByEpisodesComp.mockImplementation(() => (
            <p data-textid="episodes-comp">Episodes tab</p>
        ));
        ByLocationsComp.mockImplementation(() => <p>Locations tab</p>);
    });

    test('Renders ByCharacters when click on Characters tab', async () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );

        const charactersComp = screen.queryByText(/Characters tab/);
        const episodeComp = screen.queryByText(/Episodes tab/);
        const locationsComp = screen.queryByText(/Locations tab/);

        expect(charactersComp).toBeInTheDocument();
        expect(episodeComp).not.toBeInTheDocument();
        expect(locationsComp).not.toBeInTheDocument();
    });

    // test('Renders ByEpisodes when click on Episodes tab', async () => {
    //     render(
    //         <MemoryRouter>
    //             <App />
    //         </MemoryRouter>
    //     );

    // const episodesTab = await screen.findByTestId('episodes-tab');
    // const charactersTab = await waitFor(() =>
    //     screen.getByText('Characters')
    // );
    // const episodesTab = screen.getByText('Episodes');
    // const locationsTab = await waitFor(() => screen.getByText('Location'));

    // const charactersComp = screen.queryByText('Characters tab');
    // const episodeComp = await waitFor(() =>
    //     screen.findByText('Episodes tab')
    // );
    // const locationsComp = screen.queryByText('Locations tab');

    // fireEvent.click(episodesTab);
    // expect(episodeComp).toBeInTheDocument();
    // expect(charactersComp).not.toBeInTheDocument();
    // expect(locationsComp).not.toBeInTheDocument();
    // });

    // test('Renders ByEpisodes when click on Episodes in the nav bar', async () => {
    //     render(
    //         <MemoryRouter>
    //             <Characters />
    //         </MemoryRouter>
    //     );
    // });

    // const episodesBtn = screen.queryByText('Episodes');
    // const ByEpisodes = fireEvent.click(episodesBtn);
    // expect(queryByLabelText(/on/i)).toBeTruthy();
    // test('should switch to character route', async () => {
    //     const history = createMemoryHistory({ initialEntries: ['/character'] });
    //     render(
    //         <Router history={history}>
    //             <CharacterComp />
    //         </Router>
    //     );

    //     const character = await waitFor(() =>
    //         screen.findByText('Current Status')
    //     );
    //     expect(history.location.pathname).toBe('/characters');
    //     fireEvent.click(character);
    //     expect(history.location.pathname).toBe('/character');
    // });
});
