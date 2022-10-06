import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { Route, Navigate, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { client } from './ApolloClient';
import { store } from './redux';
import Header from './components/Header/Header';
import Spinner from './components/Spinner';
import './App.css';

const Characters = lazy(() => import('./pages/Characters'));
const Character = lazy(() => import('./pages/Character'));

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Spinner height={100} />}>
                        <Header />
                        <Routes>
                            <Route
                                path="/characters"
                                element={<Characters />}
                            />
                            <Route
                                path="/character/:id"
                                element={<Character />}
                            />
                            <Route
                                path="/*"
                                element={<Navigate replace to="/characters" />}
                            />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
