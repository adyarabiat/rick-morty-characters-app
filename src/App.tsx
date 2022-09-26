import './App.css';
import { Switch, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Character from './pages/Character';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Characters} />
                <Route path="/:id" exact component={Character} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
