import React from 'react';

class Toppings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pepperoni: '',
            sausage: '',
            bacon: ''
        }


        this.handleChangePepperoni = this.handleChangePepperoni.bind(this);
        this.handleChangeSausage= this.handleChangeSausage.bind(this);
        this.handleChangeBacon= this.handleChangeBacon.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePepperoni(event) {
        this.setState({ pepperoni: event.target.value });
    }
    handleChangeSausage(event) {
        this.setState({ sausage: event.target.value });
    }
    handleChangeBacon(event) {
        this.setState({ bacon: event.target.value });
    }


    handleSubmit(event) {
        this.props.cb3(this.state.pepperoni, this.state.sausage, this.bacon)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pepperoni: 
            <input type="text" value={this.state.pepperoni} onChange={this.handleChangePepperoni} />
                </label><br />
                <label>
                    Sausage: 
            <input type="text" value={this.state.sausage} onChange={this.handleChangeSausage} />
                </label><br />
                <label>
                    Sausage: 
            <input type="text" value={this.state.bacon} onChange={this.handleChangeBacon} />
                </label><br />
                
                
               
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Toppings;