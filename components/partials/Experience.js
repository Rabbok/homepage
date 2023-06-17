const ExperienceElement = (props) => {
    return (
        <div className="experience-element">
            {props.link ? <a className="experience-element__label" href={props.link}>{props.title}</a> : <p className="experience-element__label">{props.title}</p>}
            <p className="experience-element__paragraph">{props.text}</p>
        </div>
    )
}

export default ExperienceElement;