import React, { Component } from 'react';
import { CommonService } from '../../../../services/CommonService';
import './Greetings.css';

export class Greetings extends Component {
    constructor() {
        super();
        this.state = {
            message: null
        };
        this.commonService = new CommonService();
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setGreetings(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <h2 className="Greetings">{this.state.message}</h2>
        );
    }
    setGreetings() {
        const hour = this.commonService.getCurrentHour();
        let greet = '';
        if (hour <= 11) 
            greet = 'Morning';
        else if (hour <= 16)
            greet = 'Afternoon';
        else 
            greet = 'Evening';

        this.setState({ message: `Good ${greet}, Beautiful!` });
    }
}