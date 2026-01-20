import {useState} from "react";
import "./form.css"

const Form = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.email.includes("@")) {
            newErrors.email = "Email должен содержать символ @";
        }
        if (!formData.name.trim()) {
            newErrors.name = "Введите имя";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Введите сообщение";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            alert("Форма успешно отправлена!");
            setFormData({name: "", email: "", message: ""});
            setErrors({});
        }
    };

    return (<section>
            <h3 className="title">Форма обратной связи</h3>

            <form onSubmit={handleSubmit} noValidate>

                <div>
                    <h5 className="form__title">
                        Имя:
                    </h5>
                    <input
                        className="fullwidth input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div>
                    <h5 className="form__title">
                        Email:
                    </h5>
                    <input
                        className="fullwidth input"

                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <h5 className="form__title">
                        Сообщение:
                    </h5>
                    <textarea
                        className="fullwidth"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>

                <button type="submit">Отправить</button>
            </form>
        </section>

    );
}

export default Form;