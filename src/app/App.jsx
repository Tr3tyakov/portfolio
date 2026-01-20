import PortfolioContent from "./widgets/portfolioContent/PortfolioContent.jsx";
import "./app.css"
import Header from "./widgets/portfolioContent/header/Header.jsx";
import Footer from "./widgets/portfolioContent/footer/Footer.jsx";

const App = () => {

    return (
        <>
            <Header/>
            <PortfolioContent/>
            <Footer/>
        </>
    )
}


export default App