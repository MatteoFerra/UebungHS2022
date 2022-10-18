import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {count: this.props.countdown, msg: ""};
        this.interval = null;
        this.aggiorna = this.aggiorna.bind(this);
        this.avvio_timer = this.avvio_timer.bind(this);
    }

    aggiorna() {
        this.setState({ count: this.state.count - 1 });
        if (this.state.count <= 1) {
            this.setState({scritta: "FERTIG"});
            this.setState({count: ""});
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    avvio_timer() {
        this.setState({count: this.props.countdown, msg: ""});
        if (this.interval != null) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(this.aggiorna, 1000);
    }
    render() {
        return (
        <>
        <center>
            <h1>Uebung 4 </h1>
            <h3>Timer 50 sec</h3>
            <p>{this.state.count}</p>
            <p>{this.state.msg}</p>
            <button onClick={this.avvio_timer}>Start</button> 
            
        </center>
            
        </>)
    }
}

export default Timer;
