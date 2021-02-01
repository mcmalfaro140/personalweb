import {Button} from 'reactstrap'
export default class Help extends React.Component{
    constructor(props){
        super()
        this.state={
            service:[
                {
                    name: "Amazon Web Services",
                    des: "I can help you set up EC2, RDS, LAMBDA FUNCTIONS, ROUTE 53, CLOUDWATCH, among other services offer by AWS.",
                    img: "./images/cloud_icon.png",
                    alt: "cloud icon"
                },
                {
                    name: "Responsive Websites",
                    des: "I can help you design and develop responsive web applications to suit any personal or business needs.",
                    img: "./images/pc_icon.png",
                    alt: "pc icon"
                },
                {
                    name: "Mobile Applications",
                    des: "Got any mobile app idea? Talk to me, we may become the next big think.",
                    img: "./images/mobile_icon.png",
                    alt: "mobile icon"
                },
            ]
        }
    }
    render(){
        const services = this.state.service.map((e,i) => {
            let delay = i*400 ;
            return(
                <div key={i} className="service" data-aos="fade-up" data-aos-delay={delay}>
                    <img src={e.img} alt={e.alt}></img>
                    <h4>{e.name}</h4>
                    <p>{e.des}</p>
                </div>
            )
        })
        return(
            <div>
                <h3>Need Help?</h3>
                <div className="proj_container">
                    {services}
                </div>
                <Button href="./Resume2.pdf" download="MisaelCorveraResume.pdf">Download My Resume</Button>
            </div>
        )
    }
}