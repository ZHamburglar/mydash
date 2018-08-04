import React, { Component } from 'react';
import styled from 'styled-components';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
import {ic_settings} from 'react-icons-kit/md/ic_settings'

const SideNav = withRR4();

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: 240,
            ...props.style
        }}
    >
        {props.children}
    </div>;

const Title = styled.div`
    padding: 12px;
`;

const SeparatorTitleContainer = styled.div`
    font-size: 14px;
    color: #AAA;
    margin: 10px 12px;
    padding: 4px 12px 2px;
`;

const SeparatorTitle = props => {
    return (
        <SeparatorTitleContainer>
            {props.children}
            <hr style={{ border: 0, borderTop: '1px solid #E5E5E5' }} />
        </SeparatorTitleContainer>
    );
};

const NavMain = {
    dashboard: { title: 'Dashboard', icon: ic_aspect_ratio },
    products: { title: 'Products', icon: ic_business_center },
    orders: { title: 'Orders', icon: ic_format_list_bulleted }
};




class SideBar extends Component {
  render() {
    return (
      <div>
 <div style={{ display: 'flex' }}>
                <BaseContainer
                    style={{
                        fontSize: 12,
                        background: '#2d353c',
                        color: '#a8acb1',
                        paddingTop: 0
                    }}
                >
                    <div style={{ display: 'flex', padding: 16, background: '#1a2229' }}>
                        <div style={{ width: 40, height: 40 }}>
                            <img
                                src="https://e27.co/img/profiles/15483/profile_pic.png"
                                style={{ borderRadius: '30px', width: 40, height: 40 }}
                            />
                        </div>
                        <div style={{ paddingLeft: 6, paddingTop: 6 }}>
                            <div style={{ fontSize: 12, color: '#E5E5E5' }}>
                                {' '}Kollin Brandenburg{' '}
                            </div>
                            <div style={{ fontSize: 11 }}> Front-End Developer </div>
                        </div>
                    </div>
                    <SideNav
        hoverBgColor="#232a2f"
        hoverColor="red"
        highlightBgColor="#00acac"
        defaultSelected="products"
        highlightColor="#FFF"
    >
        <div />
        {Object.keys(NavMain).map(key => {
            //dynamically created the navs
            return (
                <Nav key={key} id={key}>
                    <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                    <NavText> {NavMain[key].title} </NavText>
                </Nav>
            );
        })}
        <SeparatorTitle>
            <div> Customers and Sales</div>
        </SeparatorTitle>

        <Nav id="customers">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavText> Customers </NavText>
            <Nav id="dashboard2">
                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Search </NavText>
            </Nav>
            <Nav
                id="sales2"
                onNavClick={() => {
                    console.log('Promote clicked!', arguments);
                }}
            >
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText> Promote </NavText>
            </Nav>
            <Nav id="products2">
                <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                <NavText> Social Media </NavText>
            </Nav>
        </Nav>
        <Nav
            id="sales"
            onNavClick={() => {
                console.log('Sales clicked!', arguments);
            }}
        >
            <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
        </Nav>
        <Nav id="">
            <NavIcon><Icon20 icon={ic_shopping_cart} /></NavIcon>
            <NavText> Deliveries </NavText>
        </Nav>

        <Nav id="settings" onNavClick={(e) => this.props.changePageSettings(e)}>
            <NavIcon><Icon20 icon={ic_settings} /></NavIcon>
            <NavText> Settings </NavText>
        </Nav>
    </SideNav>
                </BaseContainer>
            </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageHome: () => push('/'),
    changePageSettings: () => push('/settings')
  }, dispatch)

  

export default connect(null, mapDispatchToProps)(SideBar);