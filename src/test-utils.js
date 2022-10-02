import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';
import MainReducer from './redux/Reducers';

const render = (
    ui,
    {
        initialState,
        store = createStore(MainReducer, initialState),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>{children}</ApolloProvider>
            </Provider>
        );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
