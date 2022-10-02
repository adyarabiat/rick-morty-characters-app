import { render, screen } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters';

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
                },
            ],
        });

        const listItemsElements = await screen.findAllByRole('listitem');
        expect(listItemsElements).not.toHaveLength(0);
    });
});
