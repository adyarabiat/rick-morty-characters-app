import { graphql } from 'msw';

export const handlers = [
    graphql.query('getCharactersByFilter', (req, res, ctx) => {
        const { status, name, species, gender } = req.variables;

        if (status === 'Alive') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '1',
                                name: 'Rick Sanchez',
                                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '2',
                                name: 'Morty Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '3',
                                name: 'Summer Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '4',
                                name: 'Beth Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '5',
                                name: 'Jerry Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (status === 'Dead') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '8',
                                name: 'Adjudicator Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '9',
                                name: 'Agency Director',
                                image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '10',
                                name: 'Alan Rails',
                                image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '11',
                                name: 'Albert Einstein',
                                image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (status === 'unknown') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '7',
                                name: 'Abradolf Lincler',
                                image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
                                status: 'unknown',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '13',
                                name: 'Alien Googah',
                                image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                            {
                                id: '14',
                                name: 'Alien Morty',
                                image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '15',
                                name: 'Alien Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }

        if (gender === 'female') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '3',
                                name: 'Summer Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (gender === 'male') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '8',
                                name: 'Adjudicator Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (gender === 'genderless') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '141',
                                name: 'Ghost in a Jar',
                                image: 'https://rickandmortyapi.com/api/character/avatar/141.jpeg',
                                status: 'Dead',
                                species: 'Alien',
                                gender: 'Genderless',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (gender === 'unknown') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '13',
                                name: 'Alien Googah',
                                image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }

        if (name === 'Albert Einstein') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '11',
                                name: 'Albert Einstein',
                                image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 1,
                            pages: 1,
                            next: 0,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (name === 'Alber') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '11',
                                name: 'Albert Einstein',
                                image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                                status: 'Dead',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 1,
                            pages: 1,
                            next: 0,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }

        if (species === 'Human') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '1',
                                name: 'Rick Sanchez',
                                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '2',
                                name: 'Morty Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '3',
                                name: 'Summer Smith',
                                image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                                status: 'Alive',
                                species: 'Human',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Animal') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '46',
                                name: 'Bill',
                                image: 'https://rickandmortyapi.com/api/character/avatar/46.jpeg',
                                status: 'unknown',
                                species: 'Animal',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '81',
                                name: 'Crocubot',
                                image: 'https://rickandmortyapi.com/api/character/avatar/81.jpeg',
                                status: 'Dead',
                                species: 'Animal',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '153',
                                name: 'Hamster In Butt',
                                image: 'https://rickandmortyapi.com/api/character/avatar/153.jpeg',
                                status: 'Alive',
                                species: 'Animal',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Robot') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '71',
                                name: 'Conroy',
                                image: 'https://rickandmortyapi.com/api/character/avatar/71.jpeg',
                                status: 'Dead',
                                species: 'Robot',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                            {
                                id: '102',
                                name: 'Donna Gueterman',
                                image: 'https://rickandmortyapi.com/api/character/avatar/102.jpeg',
                                status: 'Dead',
                                species: 'Robot',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '151',
                                name: 'Gwendolyn',
                                image: 'https://rickandmortyapi.com/api/character/avatar/151.jpeg',
                                status: 'unknown',
                                species: 'Robot',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Alien') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '6',
                                name: 'Abadango Cluster Princess',
                                image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                                status: 'Alive',
                                species: 'Alien',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '13',
                                name: 'Alien Googah',
                                image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                            {
                                id: '14',
                                name: 'Alien Morty',
                                image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
                                status: 'unknown',
                                species: 'Alien',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Humanoid') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '21',
                                name: 'Aqua Morty',
                                image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
                                status: 'unknown',
                                species: 'Humanoid',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '22',
                                name: 'Aqua Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
                                status: 'unknown',
                                species: 'Humanoid',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '65',
                                name: 'Chris',
                                image: 'https://rickandmortyapi.com/api/character/avatar/65.jpeg',
                                status: 'Alive',
                                species: 'Humanoid',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Mythological Creature') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '40',
                                name: "Beth's Mytholog",
                                image: 'https://rickandmortyapi.com/api/character/avatar/40.jpeg',
                                status: 'Dead',
                                species: 'Mythological Creature',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '41',
                                name: 'Big Boobed Waitress',
                                image: 'https://rickandmortyapi.com/api/character/avatar/41.jpeg',
                                status: 'Alive',
                                species: 'Mythological Creature',
                                gender: 'Female',
                                __typename: 'Character',
                            },
                            {
                                id: '63',
                                name: 'Centaur',
                                image: 'https://rickandmortyapi.com/api/character/avatar/63.jpeg',
                                status: 'Alive',
                                species: 'Mythological Creature',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Cronenberg') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '82',
                                name: 'Cronenberg Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/82.jpeg',
                                status: 'unknown',
                                species: 'Cronenberg',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '83',
                                name: 'Cronenberg Morty',
                                image: 'https://rickandmortyapi.com/api/character/avatar/83.jpeg',
                                status: 'unknown',
                                species: 'Cronenberg',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '155',
                                name: 'Harold',
                                image: 'https://rickandmortyapi.com/api/character/avatar/155.jpeg',
                                status: 'Alive',
                                species: 'Cronenberg',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'Disease') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '96',
                                name: 'Tuberculosis',
                                image: 'https://rickandmortyapi.com/api/character/avatar/96.jpeg',
                                status: 'Dead',
                                species: 'Disease',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                            {
                                id: '97',
                                name: 'Gonorrhea',
                                image: 'https://rickandmortyapi.com/api/character/avatar/97.jpeg',
                                status: 'Dead',
                                species: 'Disease',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                            {
                                id: '98',
                                name: 'Hepatitis A',
                                image: 'https://rickandmortyapi.com/api/character/avatar/98.jpeg',
                                status: 'Dead',
                                species: 'Disease',
                                gender: 'unknown',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }
        if (species === 'unknown') {
            return res(
                ctx.data({
                    characters: {
                        results: [
                            {
                                id: '25',
                                name: 'Armothy',
                                image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
                                status: 'Dead',
                                species: 'unknown',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                            {
                                id: '157',
                                name: 'Hole in the Wall Where the Men Can See it All',
                                image: 'https://rickandmortyapi.com/api/character/avatar/157.jpeg',
                                status: 'Alive',
                                species: 'unknown',
                                gender: 'Genderless',
                                __typename: 'Character',
                            },
                            {
                                id: '265',
                                name: 'Pickle Rick',
                                image: 'https://rickandmortyapi.com/api/character/avatar/265.jpeg',
                                status: 'Alive',
                                species: 'unknown',
                                gender: 'Male',
                                __typename: 'Character',
                            },
                        ],
                        info: {
                            count: 826,
                            pages: 42,
                            next: 2,
                            prev: null,
                            __typename: 'Info',
                        },
                        __typename: 'Characters',
                    },
                })
            );
        }

        return res(
            ctx.data({
                characters: {
                    results: [
                        {
                            id: '1',
                            name: 'Rick Sanchez',
                            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '2',
                            name: 'Morty Smith',
                            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '3',
                            name: 'Summer Smith',
                            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Female',
                            __typename: 'Character',
                        },
                        {
                            id: '4',
                            name: 'Beth Smith',
                            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Female',
                            __typename: 'Character',
                        },
                        {
                            id: '5',
                            name: 'Jerry Smith',
                            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '6',
                            name: 'Abadango Cluster Princess',
                            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                            status: 'Alive',
                            species: 'Alien',
                            gender: 'Female',
                            __typename: 'Character',
                        },
                        {
                            id: '7',
                            name: 'Abradolf Lincler',
                            image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
                            status: 'unknown',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '8',
                            name: 'Adjudicator Rick',
                            image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
                            status: 'Dead',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '9',
                            name: 'Agency Director',
                            image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
                            status: 'Dead',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '10',
                            name: 'Alan Rails',
                            image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
                            status: 'Dead',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '11',
                            name: 'Albert Einstein',
                            image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                            status: 'Dead',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '12',
                            name: 'Alexander',
                            image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
                            status: 'Dead',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '13',
                            name: 'Alien Googah',
                            image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
                            status: 'unknown',
                            species: 'Alien',
                            gender: 'unknown',
                            __typename: 'Character',
                        },
                        {
                            id: '14',
                            name: 'Alien Morty',
                            image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
                            status: 'unknown',
                            species: 'Alien',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '15',
                            name: 'Alien Rick',
                            image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
                            status: 'unknown',
                            species: 'Alien',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '16',
                            name: 'Amish Cyborg',
                            image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
                            status: 'Dead',
                            species: 'Alien',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '17',
                            name: 'Annie',
                            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Female',
                            __typename: 'Character',
                        },
                        {
                            id: '18',
                            name: 'Antenna Morty',
                            image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
                            status: 'Alive',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '19',
                            name: 'Antenna Rick',
                            image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
                            status: 'unknown',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                        {
                            id: '20',
                            name: 'Ants in my Eyes Johnson',
                            image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
                            status: 'unknown',
                            species: 'Human',
                            gender: 'Male',
                            __typename: 'Character',
                        },
                    ],
                    info: {
                        count: 826,
                        pages: 42,
                        next: 2,
                        prev: null,
                        __typename: 'Info',
                    },
                    __typename: 'Characters',
                },
            })
        );
    }),
    graphql.query('getCharacterbyId', (req, res, ctx) => {
        return res(
            ctx.data({
                character: {
                    id: '1',
                    name: 'Rick Sanchez',
                    status: 'Alive',
                    species: 'Human',
                    type: '',
                    gender: 'Male',
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    created: '2017-11-04T18:48:46.250Z',
                    origin: { name: 'Earth (C-137)', __typename: 'Location' },
                    location: {
                        name: 'Citadel of Ricks',
                        __typename: 'Location',
                    },
                    __typename: 'Character',
                },
            })
        );
    }),
    graphql.query('getEpisodesCounts', (req, res, ctx) => {
        return res(
            ctx.data({
                episodes: {
                    info: { count: 51, __typename: 'Info' },
                    __typename: 'Episodes',
                },
            })
        );
    }),
    graphql.query('getLocationsCounts', (req, res, ctx) => {
        return res(
            ctx.data({
                locations: {
                    info: { count: 126, __typename: 'Info' },
                    __typename: 'Locations',
                },
            })
        );
    }),
];
