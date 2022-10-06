import { render, screen } from '../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Characters from '../pages/Characters';

window.scrollTo = jest.fn();
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Characters component', () => {
    test('renders charcters if request succeeds', async () => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );
        const fetchMock = (window.fetch = jest.fn());
        fetchMock.mockResolvedValueOnce({
            json: async () => [
                {
                    id: '1',
                    status: 'Alive',
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    name: 'Rick Sanchez',
                    species: 'Human',
                    gender: 'Male',
                },
            ],
        });

        const listItemsElements = await screen.findAllByRole('listitem');
        expect(listItemsElements).not.toHaveLength(0);
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
