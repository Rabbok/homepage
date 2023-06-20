import React from 'react';
import styles from './main.module.scss';
import ScrollableSkills from '../partials/ScrollableSkills';
import ExperienceElement from '../partials/Experience';
import IntroductionButton from '../partials/IntroductionBtton';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Projects {
  jammming: Project;
  homepage: Project;
  genshinCalculator: Project;
}


const Main: React.FC = () => {
  const projects: Projects = {
    jammming: {
      title: 'Jammming',
      description:
        'Jammming is an application designed to conveniently save tracks from the Spotify platform into playlists. With Jammming, users can create and manage personalized music collections on Spotify, making the process of saving tracks more organized and user-friendly.',
      link: 'https://github.com/Rabbok/jammming',
    },
    homepage: {
      title: 'Personal Homepage',
      description:
        'The personal homepage project is a website designed to serve as a digital representation of my personal information. It provides visitors with an overview of who I am, my background, skills, achievements.',
      link: '',
    },
    genshinCalculator: {
      title: 'Genshin calculator',
      description:
        'Genshin Calculate is a project developed to calculate the total damage output in the popular game Genshin Impact. It is designed to assist players in optimizing their character builds and maximizing their damage potential during combat encounters.',
      link: 'https://github.com/Rabbok/GenshinCalculate',
    },
  };

  return (
    <main>
      <section className={styles.introduction}>
        <img className={styles.introduction__img} src='/img/photo_5460775472477622906_y.jpg' alt='myphoto' />
        <p className={styles.introduction__paragraph}>Hi, I am Maksym</p>
        <p className={styles.introduction__paragraph}>I am a junior front-end developer and now want to introduce myself</p>
        <IntroductionButton/>
      </section>

      <section className={styles.skills}>
        <p className={styles.education__paragraph}>My skills</p>
        <ScrollableSkills />
      </section>

      <section className={styles.education}>
        <p className={styles.education__paragraph}>Education</p>
        <div className={styles['education-container']}>
          <ExperienceElement
            title='University'
            text='Completed first-year courses in Computer Science, Mykolaiv National Agrarian University, 2022-2023'
          />
          <ExperienceElement
            title='Online courses'
            text='Completed Codecademy courses in HTML, CSS, JavaScript, TypeScript, React, and Sass'
          />
          <ExperienceElement title='Self-education' text='Improved skills by creating a number of personal projects' />
        </div>
      </section>

      <section className={styles.projects}>
        <p className={styles['education-container']}>Projects</p>
        <div className={styles['projects-container']}>
          <ExperienceElement
            title={projects.jammming.title}
            text={projects.jammming.description}
            link={projects.jammming.link}
          />
          <ExperienceElement
            title={projects.homepage.title}
            text={projects.homepage.description}
            link={projects.homepage.link}
          />
          <ExperienceElement
            title={projects.genshinCalculator.title}
            text={projects.genshinCalculator.description}
            link={projects.genshinCalculator.link}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;