import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render(){
        return(
            <div>
                <div id="foot" className="footer">
                    <Row >
                        <Col xs="1"><img src="/favicon.ico" alt="A orange square layer logo "></img></Col>
                        <Col xs="2">
                            <Row><a href="#About">About Me</a></Row>
                            <Row><a href="#Projects">Projects</a></Row>
                            <Row><a href="#Resume">Resume</a></Row>
                        </Col>
                        <Col xs="2">
                            <Row><a href="https://www.linkedin.com/in/misaelcorvera" target="_blank"><span><FontAwesomeIcon icon={faLinkedin} /></span> Linkedin</a></Row>
                            <Row><a href="https://github.com/mcmalfaro140" target="_blank"><span><FontAwesomeIcon icon={faGithubAlt} /></span> Github</a></Row>
                            <Row ><a href="https://www.instagram.com/misaelcorvera/" target="_blank"><span><FontAwesomeIcon icon={faInstagram} /></span> Instagram</a></Row>
                            </Col>
                        <Col xs="2">
                            <Row>Glendale, CA.</Row>
                            <Row>+ 1 (818) 239 - 6835</Row>
                            <Row>mcmalfaro140m@gmail.com</Row>
                        </Col>
                    </Row>
                </div>
                <div className="mini_footer">® Created by Misael Corvera</div>
            </div>
        )
    }
}

export default Footer;