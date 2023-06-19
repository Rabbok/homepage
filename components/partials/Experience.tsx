import styles from './partials.module.scss';

interface ExperienceElementProps {
  link?: string;
  title: string;
  text: string;
}

const ExperienceElement: React.FC<ExperienceElementProps> = ({
  link,
  title,
  text,
}) => {
  return (
    <div className={styles['experience-element']}>
      {link ? (
        <a className={styles['experience-element__label']} href={link}>
          {title}
        </a>
      ) : (
        <p className={styles['experience-element__label']}>{title}</p>
      )}
      <p className={styles['experience-element__paragraph']}>{text}</p>
    </div>
  );
};

export default ExperienceElement;