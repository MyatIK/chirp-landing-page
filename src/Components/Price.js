
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkmark from '../Assets/Checkmark.svg';
import Button from 'react-bootstrap/Button';
import twitter from '../Assets/Twitter.svg';
import Stack from 'react-bootstrap/Stack';


function Price(){
    return(
        <div style={{margin: "4%"}}>
            <h2 className="text-center">One simple price plan.</h2>
            <p className="text-center">Start growing your Twitter account by analyzing your follower's patterns.</p>
            <div style={{height: "15px"}}></div>

            <Container fluid style={{marginTop: "4%",marginBottom:"4", padding:"4%"}}>
                <Row>
                    <Col lg={{span:6, offset:3}} sm='12' >
                        <Card style={{backgroundColor: '#FBF8F3'}} >
                            <Card.Body>
                            
                                <p>Monthly</p>
                                <p><b style={{fontSize: "3rem"}}>$9</b>/mo</p>

                                <Stack direction="horizontal" gap={2}>
                                    <img style={{paddingBottom: "35px"}} src={Checkmark} alt="checkmark"/>
                                    <p>Unlimited* scheduled tweets and threads.</p>
                                </Stack>

                                <Stack direction="horizontal" gap={2}>
                                    <img style={{paddingBottom: "35px"}} src={Checkmark} alt="checkmark"/>
                                    <p>Schedule up to 3 weeks in advance.</p>
                                </Stack>
                                
                                <Stack direction="horizontal" gap={2}>
                                    <img style={{paddingBottom: "35px"}} src={Checkmark} alt="checkmark"/>
                                    <p>Real-time audience analytics tracking up to 5k followers.</p>
                                </Stack>
                                
                                <Button  style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}><img src={twitter} alt='twitter logo'/>Start Trial with Twitter</Button>
                                   

                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

            </Container>

        
        </div>
    )
}

export default Price;