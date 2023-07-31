import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import twitter from '../Assets/Twitter.svg';

function Info(){
    return(
        <>

            <h1><b>Twitter analytics taken to a whole new level.</b></h1>
            <p>Chirp is a suite of Twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are the most active on Twitter.</p>
            <Stack direction="horizontal" gap={3}>
                <Button style={{backgroundColor: "#1DA1F2", borderColor: "#1DA1F2"}}><img style={{ padding: '3px'}} src={twitter} alt="Twitter logo in white"/>Sign in with Twitter</Button>
                <p style={{paddingTop: "10px"}}>Learn more →</p>

            </Stack>
            

            <p>Join 195 others who have analyzed their followers and scheduled 1342 tweets!</p>
        </>
    )

}

export default Info;
