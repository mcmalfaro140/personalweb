import {Button} from 'reactstrap'
export default class Projects extends React.Component{
    constructor(props){
        super()
        this.state={
            projects:[
                {
                    name: "AWS Resources Dashboard",
                    des: "Dashboard developed for Commonwealth Casualty Company as part of my senior design project. It allows the company to monitor their resources by providing realtime graph and CloudWatch Logs search capability to simplify the debugging process.",
                    tec: "AWS SDK, JavaSript, Spring Boot, ChartJS, JWT, MySql, ReactJS.",
                    url: "https://csns.calstatela.edu/department/cs/project/view?id=7250581",
                    img: "./images/dashboard.png"
                },
                {
                    name: "V&M Website Solutions",
                    des: "Co-funder, dedigner and developer of a freelancing agency.",
                    tec: "JavaSript, ReactJS, NextJS, AWS SNS, AWS EC2, AWS Route 53, Bootstrap 4, Nginx.",
                    url: "https://vmsteam.com",
                    img: "./images/vms.png"
                },
                {
                    name: "Abram Imports Inc.",
                    des: "Design and development of an ecommerce website integrated with shopify API.",
                    tec: "JavaSript, ReactJS, AWS SNS, Bootstrap 4, Shopify API, Adobe XD, SASS.",
                    url: "https://abramimports.com",
                    img: "./images/abramimports.png"
                },
                {
                    name: "Content Management System",
                    des: "Design and development of an ecommerce website integrated with shopify API.",
                    tec: "JavaSript, ReactJS, Bootstrap 4, Adobe XD, SASS, Cloud Firestore, Firebase Authentication.",
                    url: "https://dashboard.vmsteam.com",
                    img: "./images/vmsdashboard.png"
                },
                {
                    name: "Premier Property Security Inc",
                    des: "Website developed for a security company based in Los Angeles. I was part of the design and frontend team.",
                    tec: "JavaSript, ReactJS, NextJS, AWS SNS, AWS Route 53, Bootstrap 4.",
                    url: "https://premierpropertysecurityinc.com",
                    img: "./images/pps.png"
                },
                {
                    name: "My Wash Android Application",
                    des: "Android Application developed as part of a final class project. The App allows users to create profiles and book car wash thru the application.",
                    tec: "Android Studio, Kotlin, Firebase",
                    url: "https://github.com/mcmalfaro140/MyWashApp",
                    img: "./images/carwash.png"
                },
            ]
        }
    }
    render(){
        const proj = this.state.projects.map((e, i) => {
            let delay = i*300 ;
            return(
                <div className="proj" key={i} data-aos="fade-up" data-aos-delay={delay}>
                    <img src={e.img} alt={`project_image_${i}`}></img>
                    <div>
                        <h4>{e.name}</h4>
                        <p><span>Description: </span>{e.des}</p>
                        <p><span>Technologies: </span>{e.tec}</p>
                        <div><a href={e.url} target="_blank"><Button>See Project Page</Button></a></div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h3>Feature Projects</h3>
                <div className="proj_container">
                    {proj}
                </div>
            </div>
        )
    }
}