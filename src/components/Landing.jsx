import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Landing extends React.Component{
    render(){
        return(
            <div className="landing_style" >
                <div data-aos="fade-up"><h1>Hi! I'm <span>Misael</span></h1></div>
                <div data-aos="fade-up">Welcome to my website. <br/>I am an outgoing software developer.</div>
                <div className="bounce_animation" data-aos="fade-up"><FontAwesomeIcon icon={faChevronDown}  /></div>
            </div>
        )
    }
}