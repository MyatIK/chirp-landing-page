import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import like from '../Assets/Like.svg';
import twitter from '../Assets/Twitter (Blue).svg';
import Stack from 'react-bootstrap/Stack';

function Customers(props){
    return(
        <>
        <Container style={{padding: "15px"}}>
            <Row>

                <Col lg='2' sm='2'>
                    <img src={props.profilePic} alt="headshot"/>
                </Col>
                <Col >
                    <p><b>{props.name}</b></p>
                    <p >{props.pname}</p>
                </Col>
                <Col lg="3">
                    <img src={twitter} alt="Twitter logo"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{props.text}</p>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Stack direction="horizontal" gap={2}>
                        <img src={like} alt="heart for like"></img>
                        <p style={{paddingTop: "12px"}}>{props.number}</p>

                    </Stack>
                    
                </Col>
                <Col style={{paddingTop: "12px"}}>March 2, 2021</Col>
            </Row>
        </Container>
        </>
    )
}


export default Customers;
