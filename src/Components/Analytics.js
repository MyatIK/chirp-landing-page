import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './Info.js'
import HeroDesktop from '../Assets/Hero Image (Desktop View).png';

function Analytics(){
    return(
        <>
        <Container style={{backgroundColor: "#FBF8F3", padding: "30px"}}>
            <Row>
                <Col lg='6'>
                    <Info/>
                </Col>
                <Col lg='6'>
                    <img src={HeroDesktop} className="img-fluid" alt="Hero for desktop" style={{}}/>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Analytics;