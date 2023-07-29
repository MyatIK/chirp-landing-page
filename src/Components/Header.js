import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import twitter from '../Assets/Twitter.svg';


function Header(props){
    return (
        <div style={{backgroundColor: "#FBF8F3"}}>
        
        <Container fluid style={{padding: '4%'}} >
            <Row>
                <Col lg="6">Logo</Col>
                <Col lg="6" className="d-flex justify-content-end">
                 <a href="#Home" style={{marginRight: '1%'}}>Home</a>
                 <a href="#Price" style={{marginRight: '1%'}}>Price</a>
                 <a href="#faq" style={{marginRigh: '1%'}}>FAQ</a>
                 <Button style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}><img style={{padding: "3px"}}src={twitter} alt="Twitter logo in white"/>Sign in with Twitter</Button>
                </Col>
            </Row>
        </Container>
            
            

        </div>
    )
}

export default Header;