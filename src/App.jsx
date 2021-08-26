import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './state/store/index.store'
import Users from './modules/users/users';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">

          <h1>texto roboto</h1>
          <Users></Users>
        </header>
      </div>
    </Provider>

  );
}

export default App;
