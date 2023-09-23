import style from './style.module.css'
import { technologies } from '../../../data/technologies'
import SkillsCards from './SkillsCards'

const Skills = () => {
    return (
        <div className='container'>
            <section className={style.container__skills}>
                <h2>Tecnologias</h2>
                <ul>
                    {
                        technologies.map((technologie) => {
                            return (
                                <li key={technologie.name}>
                                    <div>
                                        <SkillsCards image={technologie.img} name={technologie.name} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Skills