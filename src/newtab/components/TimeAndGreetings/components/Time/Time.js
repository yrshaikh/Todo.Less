import React, { Component } from 'react';
import './Time.css';
import { CommonService } from '../../../../services/CommonService';

export class Time extends Component {
    constructor() {
        super();
        this.state = {
            time: null
        };
        this.commonService = new CommonService();
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setFormattedTime(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <h1 className="Time">{this.state.time}</h1>
        );
    }
    setFormattedTime() {
        this.setState({ time: this.commonService.getCurrentTime() });
    }
}
