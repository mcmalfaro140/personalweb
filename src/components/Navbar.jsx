import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount(){
        let ham = document.getElementById("ham_icon")
        let navlinks = document.querySelector(".nav-links")
        ham.addEventListener('click', () => {
            navlinks.classList.toggle("open");
            ham.classList.toggle("open");
        })
    }

    toggle(){
        let ham = document.getElementById("ham_icon")
        let navlinks = document.querySelector(".nav-links")
        navlinks.classList.toggle("open");
        ham.classList.toggle("open");
    }

    render(){
        return(
            <nav className="nav_style" id='nav'>
                <div className="hamburger" id="ham_icon">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="nav-links" >
                    <li onClick={this.toggle}><a href="#About"><FontAwesomeIcon icon={faUserTie}/>About Me</a></li>
                    <li onClick={this.toggle}><a href="#Projects"><FontAwesomeIcon icon={faNode}/>My Projects</a></li>
                    <li onClick={this.toggle}><a href="https://github.com/mcmalfaro140" target="_blank"><FontAwesomeIcon icon={faGithubAlt}/>My Github</a></li>
                    <li onClick={this.toggle}><a href="#Resume"><FontAwesomeIcon icon={faFileAlt}/>Resume</a></li>
                    <li onClick={this.toggle}><a href="#Footer"><FontAwesomeIcon icon={faComments}/>Contact</a></li>
                </ul>
                <div className="name">
                    Misael<span>Corvera</span>
                </div>
            </nav>
        )
    }
}