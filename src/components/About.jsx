import { Button } from 'reactstrap'

export default class About extends React.Component{
    render(){
        return(
            <div>
                <div data-aos="fade-right">
                    <div>
                        <h3>ABOUT ME</h3>
                        <p>Hello, my name is Misael Corvera. I am 28 years old Software Developer. I posses a
                            Bachelor of Science Dregree in Computer Science from the California State University, Los Angeles.</p>

                        <p> Since I was in high school, I became curious in the development of software and mobile applications and how
                            they have an impact in our daily life. Now, my curiosity grew towards the new trends in web design and A.R development in web and mobile applications.
                        </p>
                        <Button href="./Resume2.pdf" download="MisaelCorveraResume.pdf">Download My Resume</Button>
                    </div>
                </div>
                <div data-aos="fade-left"><img src="/images/me.jpg" alt="misael"></img></div>
            </div>
        )
    }
}