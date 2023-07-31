import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import twitter from '../Assets/Twitter (Black).svg';

function Footer(){
    return(
        <div style={{backgroundColor: '#D6F5F5', padding: "1%"}}>
            <Container flex >
                <Row>
                    <Col  style={{color: 'blue'}}><i>Chirp</i></Col>
                    <Col >
                        <Stack direction="horizontal" gap={5} className="d-flex justify-content-end">
                            <img src={twitter} alt='Twitter logo in black'/>
                            <p style={{paddingTop: "7px"}}>Privacy Policy</p>
                            <p style={{paddingTop: "7px"}}>Terms of Use</p>

                        </Stack>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer;