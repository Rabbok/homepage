import styles from './partials.module.scss';

interface SkillProps {
    name: string,
    src: string
}

const SkillElement: React.FC<SkillProps> = ({name, src}) => {
    return (
        <div className={styles.skill}>
            <img className={styles.skill__img} alt={name} src={src}/>
            <p className={styles.skill__paragraph}>{name}</p>
        </div>
    )
}

export default SkillElement;