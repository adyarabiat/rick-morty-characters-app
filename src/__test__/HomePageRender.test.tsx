import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { render } from '../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Characters from '../pages/Characters';
import { handlers } from '../mocks/handlers';
import Character from '../pages/Character';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

window.scrollTo = jest.fn();

const fisrtCharacterData = {
    id: '1',
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    __typename: 'Character',
};

test('fetches & receives a characters after we land our default route => /characters', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    expect(await screen.findByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(await screen.findByText(/Morty Smith/i)).toBeInTheDocument();
    expect(await screen.findByText(/Summer Smith/i)).toBeInTheDocument();
    expect(await screen.findByText(/Beth Smith/i)).toBeInTheDocument();
});

test("Render characters card with character's status", async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const characterStatus = await screen.findByTestId(
        `character-feature-status${fisrtCharacterData.id}`
    );
    expect(characterStatus).toHaveTextContent(fisrtCharacterData.status);
});

test("Render characters card with character's name", async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const characterName = await screen.findByTestId(
        `character-feature-name${fisrtCharacterData.id}`
    );
    expect(characterName).toHaveTextContent(fisrtCharacterData.name);
});

test("Render characters card with character's image", async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const characterImage = await screen.findByAltText(
        `profile-image${fisrtCharacterData.id}`
    );
    expect(characterImage.getAttribute('src')).toBe(fisrtCharacterData.image);
});

test("Render characters card with character's species", async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const characterSpecies = await screen.findByTestId(
        `character-feature-species${fisrtCharacterData.id}`
    );
    expect(characterSpecies).toHaveTextContent(fisrtCharacterData.species);
});

test("Render characters card with character's gender", async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    const characterGender = await screen.findByTestId(
        `character-feature-gender${fisrtCharacterData.id}`
    );
    expect(characterGender).toHaveTextContent(fisrtCharacterData.gender);
});

test('Pagination, fetch new characters after click on the next page', async () => {
    render(
        <MemoryRouter>
            <Characters />
        </MemoryRouter>
    );

    fireEvent.click(await screen.findByText('2'));

    expect(screen.queryByText(/Rick Sanchez/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Morty Smith/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Summer Smith/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Beth Smith/i)).not.toBeInTheDocument();
});

test('Render character card when click on it', async () => {
    render(
        <MemoryRouter>
            <Characters />
            <Character />
        </MemoryRouter>
    );

    const character = await screen.findByTestId(
        `characters-card-${fisrtCharacterData.id}`
    );
    fireEvent.click(character);

    const selectedCharacter = await screen.findByTestId(
        `character-card-${fisrtCharacterData.id}`
    );
    expect(selectedCharacter).toBeInTheDocument();
});
