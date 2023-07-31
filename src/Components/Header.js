import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import twitter from '../Assets/Twitter.svg';
import Hamburger from '../Assets/Hamburger Menu.svg';
import Stack from 'react-bootstrap/Stack';


function Header(props){
    return (
        <div style={{backgroundColor: "#FBF8F3"}}>
        
        <Container style={{padding: '4%'}} >
            <Row>
                <Col className="link" lg={{span:3, offset:1}} md="2" sm='1' style={{color: "blue"}}><i>Chirp.</i></Col>
                <Col lg='7' md="10" sm='11'>
                    <Stack direction="horizontal" gap={5} className="d-flex justify-content-end">
                        <p className="link">Home</p>
                        <p className="link">Price</p>
                        <p className="link">FAQ</p>
                        <Button className="link" style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}><img style={{padding: "3px"}}src={twitter} alt="Twitter logo in white"/>Sign in with Twitter</Button>
                        

                    </Stack>
                
                </Col>
            </Row>
            <Row>
                <Col className="logo" style={{color: "blue", paddind: "10px"}}><i>Chirp.</i></Col>
                
                <Col><img className="burger img-fluid" src={Hamburger} alt="Hamburger menu"/></Col>
               
            </Row>
        </Container>
            
            

        </div>
    )
}

export default Header;