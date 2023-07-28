import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Features(){
    return(
        <>
        <Container>
            <Row>
                <Col lg="4">
                <h2>Features that help you Tweet smarter.</h2>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col lg='4' className="d-flex justify-content-middle">
                    <Card>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Analytics</Card.Title>
                            <Card.Text>We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.</Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                    
                <Col lg='4'>
                    <Card>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Smart Analyzer</Card.Title>
                            <Card.Text>Chirp automatically recoginizes your followers' most active times and automatically sends your notifications if you're missing out on an opportunity.</Card.Text>
                        </Card.Body>
                    </Card>    

                </Col>

            </Row>
            <Row>
                <Col lg='4'>
                    <Card>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Scheduled Your Tweets</Card.Title>
                            <Card.Text>Quality tweets drive tons of engagemen. With chirp, you can write tweets in an advance and schedule them when your audience is most liketly to read.</Card.Text>

                        </Card.Body>
                    </Card>

                </Col>

                <Col lg='4'>
                    <Card>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Dark Mode</Card.Title>
                            <Card.Text>Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.</Card.Text>

                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Features;