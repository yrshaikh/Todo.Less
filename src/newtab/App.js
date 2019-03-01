import React, { Component } from 'react';
import './App.css';

import { Time } from './components/Time/Time';
import { Quotes } from './components/Quotes/Quotes';

export class App extends Component {
    render() {
        return (
            <div id="App" >
                <Time />
                <Quotes />
            </div>
        );
    }
}