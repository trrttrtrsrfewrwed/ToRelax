import React from 'react';
import Main from '../MainFrame/Main'
import SignUp from '../SignUpFrame/SignUp'
import Activities from '../ActivitiesFrame/Activities'
import NotFound from '../NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App-module.css"

function App() {
    return (
        <div className = 'app'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/activities' component={Activities}/>
                    <Route component={NotFound} />
                </Switch>
            </Router> 
        </div>
    )
}

export default App