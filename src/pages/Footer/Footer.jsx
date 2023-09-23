import whatsApp from '../../assets/whatsapp-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import gitHub from '../../assets/github-icon.png'
import { user } from '../../data/user'

import style from './style.module.css'
function Footer() {
    return (
        <footer className="container">
            <div className={style.container__footer}>
                <div className={style.contact}>
                    <h2>Contato</h2>
                    <div>
                        <img src={whatsApp} alt="Whatsapp" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={gitHub} alt="github" />
                    </div>

                </div>
                <p>Todos os direitos reservados - {`${user}`}</p>
            </div>
        </footer>
    )
}

export default Footer