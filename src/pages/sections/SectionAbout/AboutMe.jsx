import style from './style.module.css'
const AboutMe = () => {
    return (
        <div className="container">
            <section className={style.container__about}>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
            </section>
        </div>
    )
}

export default AboutMe