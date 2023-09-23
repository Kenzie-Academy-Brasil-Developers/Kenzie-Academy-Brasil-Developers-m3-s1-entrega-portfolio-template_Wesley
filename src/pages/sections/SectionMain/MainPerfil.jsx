import Photo from '../../../assets/banner-img.png'

import style from './style.module.css'

const Main = () => {
    return (
        <div className='container'>
            <section className={style.container__main}>
                <div>
                    <h1 className={style.title_name} >WESLEY</h1>
                    <h2 className={style.title2}>Bem vindo ao meu portfólio</h2>
                    <p>Uma frase interessante sobre mim</p>
                    <button type="button">Saiba mais</button>
                </div>
                <img src={Photo} alt="banner perfil" />
            </section >
        </div >
    )
}

export default Main