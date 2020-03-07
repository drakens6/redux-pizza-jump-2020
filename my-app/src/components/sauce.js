import React from 'react';

class Sauce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sauce_level: '',
            crust_type: ''
        }


        this.handleChangeSauce = this.handleChangeSauce.bind(this);
        this.handleChangeCrust = this.handleChangeCrust.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSauce(event) {
        this.setState({ sauce_level: event.target.value });
    }
    handleChangeCrust(event) {
        this.setState({ crust_type: event.target.value });
    }

    handleSubmit(event) {
        this.props.cb2(this.state.sauce_level, this.state.crust_type)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sauce Level: 
            <input type="text" value={this.state.sauce_level} onChange={this.handleChangeSauce} />
                </label><br />
                <label>
                    Crust Type: 
            <input type="text" value={this.state.crust_type} onChange={this.handleChangeCrust} />
                </label><br />
                
               
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Sauce;