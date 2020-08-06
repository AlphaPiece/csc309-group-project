/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing components
import Home from './react-components/Home';
import Register from './react-components/Register';
import Login from './react-components/Login';
import UserProfile from './react-components/UserProfile';
import UserProfile2 from './react-components/UserProfile2';
import AdminDash from './react-components/AdminDash';
import CreateReview from './react-components/createReview';
import {user, Review, comment} from "./actions/queue"
import ProductPage from './react-components/ProductPage';
import Contact from './react-components/Contact'


class App extends React.Component {


  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<Home state={this.state}/>)}/>
            <Route exact path='/register' render={() => 
                            (<Register state={this.state}/>)}/>
            <Route exact path='/login' render={() => 
                            (<Login state={this.state}/>)}/>   
            <Route exact path='/userprofile' render={() => 
                            (<UserProfile state={this.state}/>)}/>
            <Route exact path='/userprofile2' render={() => 
                            (<UserProfile2 state={this.state}/>)}/>
            <Route exact path='/admindash' render={() => 
                            (<AdminDash state={this.state}/>)}/>
            <Route exact path='/createReview' render={() => 
                            (<CreateReview state={this.state}/>)}/> 
            <Route exact path='/productpage' render={() => 
                            (<ProductPage state={this.state}/>)}/>  
             <Route exact path='/Contact' render={() => 
                            (<Contact state={this.state}/>)}/>                           
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}



export default App;
