import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import like from '../Assets/Like.svg';
import twitter from '../Assets/Twitter (Blue).svg';

function Customers(props){
    return(
        <>
        <Container style={{padding: "15px"}}>
            <Row>
                <Col>
                    <img src={props.profilePic} alt="headshot"/>
                </Col>
                <Col>
                    <p>{props.name}</p>
                    <p>{props.pname}</p>
                </Col>
                <Col>
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
                    <img src={like} alt="heart for like"></img>
                    <p>{props.number}</p>
                </Col>
                <Col>March 2, 2021</Col>
            </Row>
        </Container>
        </>
    )
}


export default Customers;