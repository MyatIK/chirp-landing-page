import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from './Info.js'
import HeroDesktop from '../Assets/Hero Image (Desktop View).png';
import HeroTablet from '../Assets/Hero Image (Tablet View).png';

function Analytics(){
    return(
        <div style={{backgroundColor: "#FBF8F3"}}>
        <Container fluid style={{padding: "4%"}}>
            <Row>
                <Col lg={{span: 6,offset:1}} sm={{span: 12}}>
                    <Info/>
                </Col>
                <Col lg='4' sm={{span: 12}}>
                    <img src={HeroDesktop}  className="img-fluid heroDesktop" alt="Hero for desktop"/>
                    <img src={HeroTablet} className="img-fluid heroTablet" alt="Hero for tablet"/>
                    
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}

export default Analytics;