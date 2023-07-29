
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkmark from '../Assets/Checkmark.svg';
import Button from 'react-bootstrap/Button';
import twitter from '../Assets/Twitter.svg';

function Price(){
    return(
        <div style={{margin: "4%"}}>
            <h2 className="text-center">One simple price plan.</h2>
            <p className="text-center">Start growing your Twitter account by analyzing your follower's patterns.</p>
            <div style={{height: "15px"}}></div>

            <Container >
                <Row>
                    <Col lg={{span:4, offset:4}}>
                        <Card style={{backgroundColor: '#FBF8F3'}}>
                            <Card.Body>
                                <p>Monthly</p>
                                <p>$9/mo</p>
                                
                                <Container>
                                    <Row>
                                        <Col lg='1'><img src={Checkmark} alt="checkmark"/></Col>
                                        <Col><p>Unlimited* scheduled tweets and threads.</p></Col>
                                    </Row>
                                    <Row>
                                        <Col lg='1'><img src={Checkmark} alt="checkmark"/></Col>
                                        <Col><p>Schedule up to 3 weeks in advance.</p></Col>
                                    </Row>
                                    <Row>
                                        <Col lg='1'><img src={Checkmark} alt="checkmark"/></Col>
                                        <Col><p>Real-time audience analytics tracking up to 5k followers.</p></Col>
                                    </Row>
                                </Container>

                                <Button style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}><img src={twitter} alt='twitter logo'/>Start Trial with Twitter</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

            </Container>

        
        </div>
    )
}

export default Price;