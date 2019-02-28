import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul className="Header_childContainer">
                    <li className="Header__child">
                        Bravo New Tabs!
                    </li>
                    <li onClick={this.props.onRefreshClick} className="Header__child Header__child--flyRight">
                        change background
                    </li>
                </ul>
            </div>
        );
    }
    refresh() {

    }
}
