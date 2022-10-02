import { Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import { store } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';
import Spinner from './components/Spinner';

const Characters = lazy(() => import('./pages/Characters/Characters'));
const Character = lazy(() => import('./pages/Character/Character'));

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Spinner height={100} />}>
                        <Header />
                        <Switch>
                            <Route
                                path="/characters"
                                exact
                                component={Characters}
                            />
                            <Route
                                path="/character/:id"
                                exact
                                component={Character}
                            />

                            <Redirect path="/*" to="/characters" />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
