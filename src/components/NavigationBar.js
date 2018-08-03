import React, { Component } from 'react';
import { Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Icon } from 'react-icons-kit';

import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';


class NavigationBar extends Component {
    renderOCIcons = () => {
        return (this.props.docked ? 
            <Icon icon={ic_keyboard_arrow_left} style={menuItemStyle} onClick={() => this.props.closeSideBar()}/>
            : 
            <Icon icon={ic_keyboard_arrow_right} style={menuItemStyle} onClick={() => this.props.openSideBar()}/>
        )
    }

    render() {
        return (
        <div>
            <Navbar>
                <Nav>
                    <NavItem eventKey={1}>
                        {this.renderOCIcons()}
                    </NavItem>
                </Nav>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        );
    }
}

const menuItemStyle = {
    color: '#f2b632',
}

const mapStateToProps = ({ sidebarOCReducer }) => {
    const { sidebarOpen, docked } = sidebarOCReducer
    return { sidebarOpen, docked }
  }


export default connect(mapStateToProps, actions)(NavigationBar);