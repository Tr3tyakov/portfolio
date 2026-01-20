import "./portfolioContent.css"
import Form from "./form/Form.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import AboutMe from "./aboutMe/AboutMe.jsx";
import MainInformation from "./mainInformation/MainInformation.jsx";

const PortfolioContent = () => {
    return (
        <div className="container">
            <MainInformation/>

            <AboutMe/>

            <Portfolio/>

            <Form/>
        </div>

    )
}

export default PortfolioContent