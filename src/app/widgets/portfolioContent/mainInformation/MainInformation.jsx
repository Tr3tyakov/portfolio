import Avatar from "../../../../assets/images/avatar.jpg";

const MainInformation = () => (
    <section id="main">
        <img className="avatar" src={Avatar} alt="Изображение"/>
        <div className="information">
            <h3 className="title">Главная</h3>
            <p>
                Меня зовут Михаил Третьяков. Специализируюсь на разработке комплексных решений, охватывающих как
                клиентскую, так и серверную части
            </p>
        </div>
    </section>
)


export default MainInformation