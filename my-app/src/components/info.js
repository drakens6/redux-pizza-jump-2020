import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: ''
        }



        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirst(event) {
        this.setState({ firstName: event.target.value });
    }
    handleChangeLast(event) {
        this.setState({ lastName: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangeAddress(event) {
        this.setState({ address: event.target.value });
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(event) {
        this.props.cb(this.state.firstName, this.state.lastName, this.state.email, this.state.address, this.state.phone);
        
        event.preventDefault();
        
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleChangeFirst} />
                </label><br />
                <label>
                    Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleChangeLast} />
                </label><br />
                <label>
                    Email:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                </label><br />
                <label>
                    Address:
            <input type="text" value={this.state.address} onChange={this.handleChangeAddress} />
                </label><br />
                <label>
                    Phone:
            <input type="text" value={this.state.phone} onChange={this.handleChangePhone} />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Info;