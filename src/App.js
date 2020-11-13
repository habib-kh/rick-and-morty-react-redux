import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile/:id' exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
