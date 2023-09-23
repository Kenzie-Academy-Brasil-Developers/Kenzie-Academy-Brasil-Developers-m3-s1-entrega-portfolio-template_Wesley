
const SkillsCards = ({ name, image }) => {
    return (
        <>
            <img src={image} alt={name} />
            <p>{name}</p>
        </>
    )
}

export default SkillsCards