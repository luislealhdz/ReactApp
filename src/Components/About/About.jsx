import "./About.css";

const About = () => {
    return (
        <section className="d-flex gap-3">
            <article>
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/95981661?v=4"
                        alt="Foto de perfil"
                    />
                </div>
            </article>
            <aside>
                <h1>Luis Leal</h1>
                <p>
                    <b>A passionate frontend developer from México</b>
                </p>
                <ul>
                    <li>
                        🚀 I’m currently working on a e-commerce with Angular
                        and Firebase
                    </li>
                    <li>🧪 I’m currently learning React</li>
                </ul>
                <p className="font-bold">Connect with me</p>
                <p>Linkedin: www.linkedin.com/in/luis-leal-hdz</p>
                <p>Github: https://github.com/luislealhdz</p>
                <p>Gmail: luisngleal@gmail.com</p>

                <section>
                    <p className="font-bold">Languages and Tools</p>
                    <ul className="list-grid">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>SCRUM</li>
                        <li>Figma</li>
                        <li>Git</li>
                    </ul>
                </section>
            </aside>
        </section>
    );
};

export default About;
