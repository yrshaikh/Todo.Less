import React from "react";
import { CardHeader } from "./components/CardHeader/CardHeader";

interface State {
    offset: number;
}

class Card extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { offset: 0 };
    }
    public render(): JSX.Element {
        return (
            <div className="Card">
                {this.renderHeader()}
            </div>
        );
    }
    private renderHeader(): JSX.Element {
        return <div className="Card">
            <div className="Card__top">
                <i className="fas fa-arrow-alt-circle-left" onClick={(e) => this.changeDate(1)} />
                <CardHeader offset={this.state.offset} />
                <i className="fas fa-arrow-alt-circle-right" onClick={(e) => this.changeDate(-1)} />
            </div>
        </div>;
    }
    private changeDate(change: number): void {
        this.setState({ offset: this.state.offset + change });
    }
}

export { Card };
