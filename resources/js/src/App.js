import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom'; 
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Map from './components/Map';
import Customerdash from './components/Customerdash';


const App = () => {
    return (

          <Router className="App_container">

               <Switch>
                    <Route exact path="/">
                         <Login />
                    </Route>
                    <Route exact path="/register">
                         <Register />
                    </Route>
                    <Route exact path="/home">
                         <Home />
                    </Route>
                    <Route exact path="/add">
                         <Add />
                    </Route>
                    <Route exact path="/Edit/:id">
                         <Edit />
                    </Route>
                    <Route exact path="/map">
                         <Map />
                    </Route>
                    <Route exact path="/customerdash">
                         <Customerdash />
                    </Route>
               </Switch>
          </Router>

    );
};


ReactDOM.render(<App />,document.getElementById('app'));