import Layout from '../components/Layout';
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Help from '../components/Help'

export default class index extends React.Component{
    constructor(props) {
        super(props);
        this.observer = this.observer.bind(this);
    }
    observer(){
        //Const
        const topbar = document.getElementById("nav");
        const sectionLanding = document.getElementById("landing");

        //opt
        const sectionLandingOpt = {
            rootMargin: "-300px 0px 0px 0px",
        };

        //Observer Const
        const sectionLandingObs = new IntersectionObserver(function (
            entries,
            sectionLandingObs
        ) {
            entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                topbar.classList.add("nav-color")
            } else {
                topbar.classList.remove("nav-color")
            }
            });
        },
        sectionLandingOpt);
        //observer invocation
        sectionLandingObs.observe(sectionLanding);
    }

    componentDidMount(){
        this.observer();
    }
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
