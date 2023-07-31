import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Customers from './Customers.js';
import SaraPic from '../Assets/userAvatar01.svg';
import Jack from '../Assets/userAvatar04.svg';
import Jessica from '../Assets/userAvatar02.svg';
import Card from 'react-bootstrap/Card';


function Testimonials(){
    return(
        <div style={{backgroundColor:'#D6F5F5'}}>
        
        <Container fluid style={{marginTop: "4%",marginBottom:"4", padding:"4%"}}>
            <Row>
                <Col lg={{span: 4, offset: 1}} sm='12' style={{padding: "10px"}}>
                    <h2>What our customers say</h2>
                </Col>
                
            </Row>

            <Row>
                <Col sm='12' lg={{span: 4, offset: 1}} style={{margin: "auto" ,padding: '2%'}}>
                
                    <Card>
                        <Customers name={'Sara May'} text={"I just tried out @chirp and it's amazing, love all the analytics I can see."} pname={"@sara-may"} number={2} profilePic={SaraPic}/>
                     </Card>
                        
                </Col>
                
                <Col sm='12' lg={{span: 4, offset: 1}} style={{margin: "auto", padding: '2%'}}>
                     <Card>
                        <Customers name={'Jack Scott'} text={"I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this cahnged my Twitter game."} pname={"@jackscott_"} number={32} profilePic={Jack}/>

                    </Card>
                            
                </Col>
                            
                <Col sm='12' lg={{span: 4, offset: 1}} style={{margin: "auto", padding: '2%'}}>
                    <Card>
                        <Customers name={'Jessica May'} text={"Absolutely love everything about Chirp, from the design to how everything works smoothly."} pname={"@jmay98"} number={221} profilePic={Jessica}/>
                    </Card>
                
                </Col>
                        
                    
                
                
            </Row>

            
            <div style={{padding: "10px", width: "20rem"}}></div>

            
            
                
               
            
        </Container>
        </div>
    )
}

export default Testimonials;