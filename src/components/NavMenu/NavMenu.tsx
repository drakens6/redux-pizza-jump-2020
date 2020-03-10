import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

export default class NavMenu extends React.PureComponent {
    state = {
        isOpen: false
    };

    render() {
        return (
            <header style={{zIndex: 20}}>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/menu" className="text-light">Pizza Maker</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/menu">Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/orders">Orders</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/account">Account</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
