import React from "react";

interface Props {
    currentDateTime: Date;
}

interface State {
    selectedDateTime: Date;
}

class Card extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { selectedDateTime: props.currentDateTime };
    }
    public render(): JSX.Element {
        if (!this.state.selectedDateTime) { return <div/>; }
        return <div>I am a card</div>;
    }
}

export { Card };
