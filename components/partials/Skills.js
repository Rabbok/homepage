const SkillElement = ({name, src}) => {
    return (
        <div className='skill'>
            <img className='skill__img' alt={name} src={src}/>
            <p className='skill__paragraph'>{name}</p>
        </div>
    )
}

export default SkillElement;