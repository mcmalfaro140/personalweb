import {Button} from 'reactstrap'
export default class Resume extends React.Component{
    render(){
        return(
            <div>
                <h3>My Resume</h3>
                <img src="./images/Resume.png"></img>
                <Button href="./Resume2.pdf" download="MisaelCorveraResume.pdf">Download My Resume</Button>
            </div>
        )
    }
}