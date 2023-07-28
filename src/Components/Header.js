import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Header(props){
    return (
        <>
        
        <Container fluid style={{marginTop: '20px'}}>
            <Row>
                <Col lg="6">Logo</Col>
                <Col lg="6" className="d-flex justify-content-end">
                 <a href="#Home" style={{marginRight: '1%'}}>Home</a>
                 <a href="#Price" style={{marginRight: '1%'}}>Price</a>
                 <a href="#faq" style={{marginRigh: '1%'}}>FAQ</a>
                 <Button variant="info">Info</Button>{' '}
                </Col>
            </Row>
        </Container>
            
            

        </>
    )
}

export default Header;