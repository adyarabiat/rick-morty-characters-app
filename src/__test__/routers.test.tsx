import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header/Header';
import Characters from '../pages/Characters';
import Character from '../pages/Character';

jest.mock('../components/Header/Header');
jest.mock('../pages/Characters');
jest.mock('../pages/Character');

const HeaderComp = Header as jest.Mock;
const CharactersComp = Characters as jest.Mock;
const CharacterComp = Character as jest.Mock;

describe('render App routes', () => {
    beforeEach(() => {
        HeaderComp.mockImplementation(() => <p>Page Header Mock</p>);
        CharactersComp.mockImplementation(() => <p>Page Characters Mock</p>);
        CharacterComp.mockImplementation(() => <p>Page Character Mock</p>);
    });
    test('Should render "Header" and "Characters" only on default route', async () => {
        render(<App />);

        const header = await waitFor(() =>
            screen.findByText('Page Header Mock')
        );
        const characters = await waitFor(() =>
            screen.findByText('Page Characters Mock')
        );
        const character = screen.queryByText('Page Character Mock');

        expect(header).toBeInTheDocument();
        expect(characters).toBeInTheDocument();
        expect(character).not.toBeInTheDocument();
    });

    test('landing on a bad page', async () => {
        const route = '/diffrent-route';

        render(
            // <MemoryRouter initialEntries={[route]}>
            <App />
            // </MemoryRouter>
        );

        expect(screen.getByText('Page Header Mock')).toBeInTheDocument();
        expect(screen.getByText('Page Characters Mock')).toBeInTheDocument();
    });
});
