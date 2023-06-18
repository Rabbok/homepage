import styles from './partials.module.scss';

const ExperienceElement = (props) => {
  return (
    <div className={styles['experience-element']}>
      {props.link ? (
        <a className={styles['experience-element__label']} href={props.link}>
          {props.title}
        </a>
      ) : (
        <p className={styles['experience-element__label']}>{props.title}</p>
      )}
      <p className={styles['experience-element__paragraph']}>{props.text}</p>
    </div>
  );
};

export default ExperienceElement;
