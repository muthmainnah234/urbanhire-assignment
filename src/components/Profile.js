import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';

class Profile extends Component {
  static defaultProps = {
    header: {
      'name': 'Jhon Doe',
      'title': 'A Web Programmer',
      'subtitle': 'Web Developer at Companee',
      'background': 'https://coxclarkcom.files.wordpress.com/2017/07/working-at-home.jpg',
    },
    data: {
      'Urbanhire ID': 'G7NV8BOLQ6',
      'Username': 'jhondoe',
      'Name': 'Jhon Doe',
      'Email': 'jhon_doe@gmail.com',
      'Gender': 'Male',
      'Birthday': '12 January 1992',
      'Headline': 'Web Developer',
      'Phone': '+ 222 111 333',
      'Address': 'Jakarta',
    }
  };

  render() {
    const header = this.props.header;
    const data = this.props.data;
    return (
      <Container >
        <Row>
          <Col xs="12" sm="12" md="8" className="col-left" >
            <Row>
              <Col className="col-header" >
                <div style={{ backgroundImage: `url('${header.background}')` }} className="container-header" >
                  <img className="image-header" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                  <div>{header.name}</div>
                  <div>{header.title}</div>
                  <div>{header.subtitle}</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="title-profile" >PROFILE</Col>
                </Row>
                <Row>
                  <Col sm="6" md="3" className="col-key" >
                    {
                      Object.keys(data).map((key) => {
                        return(<div>{key}</div>);
                      })
                    }
                  </Col>
                  <Col sm="6" md="9" className="col-value" >
                    {
                      Object.keys(data).map((key) => {
                        return(<div>{data[key]}</div>);
                      })
                    }
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="4" className="col-right" >
            <Row >
              <Col>
                <img src="https://digital-public-contact.s3.amazonaws.com/production-thamesvalley/static/img/placeholder.png" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="https://digital-public-contact.s3.amazonaws.com/production-thamesvalley/static/img/placeholder.png" />              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;