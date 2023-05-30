import React, { Component } from 'react';
import RoomJoinPage from './roomjoinpage';
import CreateRoomPage from './createroompage';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link, 
    Redirect
    } from "react-router-dom";



export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <Routes>
                    <Route>
                      <p>This is the Home Page Baby..............</p>
                    </Route>
                </Routes>
            </Router>
        );
    }
}