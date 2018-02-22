import React, { Component } from 'react';
import { 
  Container, Row, Col,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  Button, Form, FormGroup, Label, Input, FormText,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="main-container-navbar" >
        <div className="w3-sidebar w3-bar-block w3-border-right" id="mySidebar" style={{ display:`${this.state.dropdownOpen ? "block" : "none"}` }} >
          <button onClick={this.toggle} className="w3-bar-item w3-large"><i className="fa fa-bars"></i></button>
          <div className="w3-bar-item">BROWSE JOB</div>
          <div className="w3-bar-item">CAREER ADVISE</div>
          <div className="w3-bar-item">EMPLOYERS</div>
          <hr/>
          <div className="w3-bar-item"><i className="fa fa-user"></i>PROFILE</div>
          <div className="w3-bar-item"><i className="fa fa-child"></i>SKILLS</div>
          <div className="w3-bar-item"><i className="fa fa-paperclip"></i>RESUME</div>
          <div className="w3-bar-item"><i className="fa fa-certificate"></i>CERTIFICATE</div>
          <div className="w3-bar-item"><i className="fa fa-heart"></i>SAVED JOBS</div>
          <div className="w3-bar-item"><i className="fa fa-inbox"></i>DISMISS JOBS</div>
          <div className="w3-bar-item"><i className="fa fa-paper-plane-o"></i>APPLIED JOBS</div>
          <div className="w3-bar-item"><i className="fa fa-envelope-o"></i>JOB ALERT</div>
          <div className="w3-bar-item"><i className="fa fa-cog"></i>SETTINGS</div>
          <hr/>
          <div className="w3-bar-item"><i className="fa fa-power-off"></i><span className="text-red" >SIGN OUT</span></div>
        </div>
        <Navbar light >
          <div className="container-navbar" >
            <Row>
              <Col xs="6" md="3" >
                <NavbarBrand href="/" className="mr-auto">
                  <img className="logo-urbanhire" src="https://p13.zdassets.com/hc/settings_assets/1995504/115000045511/LcpKcziFzQTQbUeERQmkxQ-logo-urbah-hire-blue-2400x370.png " />
                </NavbarBrand>
              </Col>
              <Col md="6" className="form-search" >
              <Form className="navbar-form" >
                <Col md="6">
                  <Input placeholder="Position or Company" />
                </Col>
                <Col md="4">
                  <Input type="select" >
                    <option selected disabled>Location</option>
                    <option>Bandung</option>
                    <option>Jakarta</option>
                  </Input>
                </Col>
                <Col md="2">
                  <Button color="info"><i className="fa fa-search"></i></Button>
                </Col>
              </Form>
              </Col>
              <Col xs="6" md="3" className="navbar-right" >
                <Row>
                  <Button><i className="fa fa-bell"></i></Button>
                  <span className="btn-search"><Button ><i className="fa fa-search"></i></Button></span>
                  <Button onClick={this.toggle} ><i className="fa fa-bars"></i></Button>
                </Row>
              </Col>
            </Row>
          </div>
        </Navbar>
        
      </div>
    );
  }
}

export default CustomNavbar;