import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id="contacts">
            <footer className="footer">
                <div className="footer__copyright">
                    &copy; {currentYear} Михаил Третьяков
                </div>

                <div className="footer__contacts">
                    <a href="tel:+79991234567" className="footer__link">
                        +7 (952) 261 74 92
                    </a>
                    <a href="mailto:Imtretyakov@mail.ru" className="footer__link">
                        Imtretyakov@mail.ru
                    </a>
                </div>

                <div className="footer__socials">
                    <a href="https://t.me/Tretyakkov" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                       className="footer__icon">
                        <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
                            <path
                                d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                                fill="white"/>
                            <defs>
                                <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#37BBFE"/>
                                    <stop offset="1" stop-color="#007DBB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://github.com/Tr3tyakov" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                       className="footer__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 2C6.48 2 2 6.48 2 12C2 16.41 5.07 20.13 9.17 21.46C9.67 21.55 9.87 21.27 9.87 21.03C9.87 20.81 9.86 20.15 9.86 19.31C7 19.82 6.34 18.11 6.34 18.11C5.82 16.99 5.03 16.72 5.03 16.72C4 16.09 5.11 16.11 5.11 16.11C6.25 16.18 6.81 17.24 6.81 17.24C7.8 19.01 9.46 18.5 10.09 18.24C10.18 17.45 10.49 16.94 10.84 16.69C8.18 16.44 5.39 15.46 5.39 11.25C5.39 10 5.88 8.99 6.69 8.2C6.57 7.95 6.12 6.7 6.79 5.04C6.79 5.04 7.76 4.77 9.86 6.31C10.78 6.09 11.76 6 12.75 6C13.74 6 14.72 6.09 15.64 6.31C17.74 4.77 18.7 5.04 18.7 5.04C19.37 6.7 18.92 7.95 18.8 8.2C19.61 8.99 20.1 10 20.1 11.25C20.1 15.47 17.31 16.44 14.65 16.69C15.07 17.11 15.44 17.91 15.44 19.07C15.44 20.7 15.43 21.9 15.43 21.99C15.43 22.24 15.63 22.53 16.14 22.43C20.23 21.11 23.3 17.41 23.3 12C23.3 6.48 18.52 2 12 2Z"
                                  fill="#000"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </section>

    );
};

export default Footer;