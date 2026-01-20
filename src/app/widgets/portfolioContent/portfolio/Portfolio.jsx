import Project from "../projects/project/Project.jsx";
import Puzzle from "../../../../assets/images/puzzle.png";
import Rosatom from "../../../../assets/images/rosatom.png";
import Bird from "../../../../assets/images/bird.jpeg";

const Portfolio = () => (
    <section id="portfolio">
        <h3 className="title">Портфолио</h3>
        <div className="project__container">
            <Project image={Puzzle}/>
            <Project image={Rosatom}/>
            <Project image={Bird}/>
        </div>
    </section>

)

export default Portfolio