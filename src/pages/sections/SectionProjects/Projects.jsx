import style from './style.module.css'
import { projects } from '../../../data/projects'
import ProjectsCards from './ProjectsCards'

const Projects = () => {
    return (
        <div className='container'>
            <section className={style.container__skills}>
                <h2>Tecnologias</h2>
                <div className={style.map__projects}>
                    {
                        projects.map((project) => {
                            return (
                                <div key={project.name}>
                                    <ProjectsCards name={project.name} descricao={project.description}
                                        info="Saiba mais"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Projects