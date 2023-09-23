import iconHub from '../../../assets/git-icon.png'

const ProjectsCards = ({ name, descricao, info }) => {
    return (
        <>

            <div>
                <h3>{name}</h3>
                <img src={iconHub} alt="" />
            </div>
            <p>{descricao}</p>
            <a href="">{info}</a>

        </>
    )
}

export default ProjectsCards