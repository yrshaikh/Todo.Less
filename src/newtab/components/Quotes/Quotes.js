import React, { Component } from 'react';
import './Quotes.css';
import { QuoteService } from './../../services/QuoteService';

export class Quotes extends Component {
    constructor() {
        super();
        this.state = {
            message: null
        };
        this.quoteService = new QuoteService();
    }
    componentDidMount() {
        this.setState({ message: this.quoteService.get() });
    }
    render() {
        return (
            <h4 className="Quotes">{this.state.message}</h4>
        );
    }
}
