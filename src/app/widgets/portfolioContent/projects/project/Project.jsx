import Puzzle from "../../../../../assets/images/puzzle.png";
import "./project.css"

const Project = ({name, image}) => (
    <div className="project">
        <h3 className="project__title">{name}</h3>
        <img className="project__image" src={image} alt="Изображение"/>
    </div>
)


export default Project