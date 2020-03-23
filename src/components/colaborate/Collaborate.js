import * as React from "react";
import './collaborate.css';

class Collaborate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        ¿Puedo Salir de Casa?
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </header>
            </div>
        );
    }
}
export default Collaborate
