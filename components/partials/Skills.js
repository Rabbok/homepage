import styles from './partials.module.scss';

const SkillElement = ({name, src}) => {
    return (
        <div className={styles.skill}>
            <img className={styles.skill__img} alt={name} src={src}/>
            <p className={styles.skill__paragraph}>{name}</p>
        </div>
    )
}

export default SkillElement;