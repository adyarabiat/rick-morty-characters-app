import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/welcome" exact component={Characters} />
                <Route path="/character/:id" exact component={Character} />
                <Redirect path="/*" to="/welcome" />
            </Switch>
        </div>
    );
}

export default App;
