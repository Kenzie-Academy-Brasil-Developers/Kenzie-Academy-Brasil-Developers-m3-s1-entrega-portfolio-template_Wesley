import Portifolio from "../../assets/portfolio.png"
import style from './Header.module.css'

const Header = () => {
    return (
        <header className="container" >
            <div className={style.container__header}>
                <img src={Portifolio} alt="Logo menu" />
                <nav>
                    <ul >
                        <li><a href="#about__me">Sobre</a></li>
                        <li><a href="#slack">Slack</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                    </ul>
                </nav>
                <button type="button">Contato</button>
            </div>
        </header>
    )
}

export default Header