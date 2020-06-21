import Layout from '../components/Layout';
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Help from '../components/Help'

export default class index extends React.Component{
    render(){
        return(
            <Layout>
                <section id="landing" className="back_img"><Landing/></section>
                <section id="About" className="about"><About/></section>
                <section id="Projects" className="projects"><Projects/></section>
                <section id="Help" className="help"><Help/></section>
                <section id="Resume" className="resume"><Resume/></section>
            </Layout>
        )
    }
}
