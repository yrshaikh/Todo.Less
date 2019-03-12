import React, { Component } from "react";
import { DateService } from "./../../../../services/DateService";

interface ICardHeaderProps {
    offset: number;
}

class CardHeader extends Component<ICardHeaderProps> {
    constructor(props: ICardHeaderProps) {
        super(props);
    }
    public render(): JSX.Element {
        const formattedDateTime = DateService.getDateFromOffset(this.props.offset);
        return (
            <h1>{formattedDateTime}</h1>
        );
    }
}

export { CardHeader };
