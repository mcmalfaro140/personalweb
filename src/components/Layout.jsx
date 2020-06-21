// import Topbar from "../components/Topbar"
import Head from "next/head";
import AOS from 'aos'


class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    render(){
        return(
        <div>
            <Head>
                <title>Misael Corvera</title>
                {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
                <meta
                    name="description"
                    content="Hi, my name is Misael Corvera. I am full stack developer with great UI skills."
                />
                {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
            </Head>
            {/* <Topbar currentPointer={this.currentPointer}/> */}
            <div>
                {this.props.children}
            </div>
            {/* <Footer/> */}
        </div>
        )
    }
};

export default Layout;