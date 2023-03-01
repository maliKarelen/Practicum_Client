import logo from './logo.svg';
import './App.css';
import Form from './myform';
import ExportToExcel from './exelExport'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Guidelines from './Guidlines';
import Home from './Home';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { store } from './store/store';
import {ExportData} from './exportData'

function App() {




  return (
    <BrowserRouter>
    <div className="myApp">
      <div>
      <p>רק בסיעתא דשמיא</p>
        <nav>
        <Link   to="/guide" className="link">guide</Link>
        
        <Link to="/form"  className="link">form</Link>
        </nav>
        
      </div>
      <Switch>
        <Route path='/form'>
          <Form />
        </Route>
        <Route path='/guide'>
          <Guidelines />
        </Route>

        <Route path='/' >
          <Home />
        </Route>

      </Switch>
      </div>
    </BrowserRouter>
  

  );
}
export default App;

