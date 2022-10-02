import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import Header from './components/Header/Header';
import Characters from './pages/Characters/Characters';
import Character from './pages/Character/Character';

jest.mock('./components/Header/Header');
jest.mock('./pages/Characters/Characters');
jest.mock('./pages/Character/Character');

const HeaderComp = Header as jest.Mock;
const CharactersComp = Characters as jest.Mock;
const CharacterComp = Character as jest.Mock;

describe('render App routes', () => {
    beforeEach(() => {
        HeaderComp.mockImplementation(() => <p>Page Header Mock</p>);
        CharactersComp.mockImplementation(() => <p>Page Characters Mock</p>);
        CharacterComp.mockImplementation(() => <p>Page Character Mock</p>);
    });
    test('Should render "Header" and "Characters" only on default route', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText('Page Header Mock')).toBeInTheDocument();
        expect(screen.getByText('Page Characters Mock')).toBeInTheDocument();
        expect(
            screen.queryByText('Page Character Mock')
        ).not.toBeInTheDocument();
    });

    test('landing on a bad page', () => {
        const badRoute = '/some/bad/route';

        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText('Page Header Mock')).toBeInTheDocument();
        expect(screen.getByText('Page Characters Mock')).toBeInTheDocument();
    });
});
