import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './Info.js'
import HeroDesktop from '../Assets/Hero Image (Desktop View).png';

function Analytics(){
    return(
        <div style={{backgroundColor: "#FBF8F3"}}>
        <Container style={{padding: "2%"}}>
            <Row>
                <Col lg='6'>
                    <Info/>
                </Col>
                <Col lg='6'>
                    <img src={HeroDesktop} className="img-fluid" alt="Hero for desktop"/>
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}

export default Analytics;