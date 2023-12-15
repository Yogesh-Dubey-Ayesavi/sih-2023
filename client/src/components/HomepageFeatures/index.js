import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Environmental Focus',
    imageSrc: require('@site/static/img/environmental_icon.png').default,
    description: (
      <>
        Explore a variety of articles on environmental sustainability and conservation. Learn about eco-friendly practices and their impact on our planet.
      </>
    ),
  },
  {
    title: 'Social Responsibility',
    imageSrc: require('@site/static/img/social_responsibility_icon.png').default,
    description: (
      <>
        Delve into articles addressing social responsibility and ethical considerations. Understand the importance of community engagement and inclusivity.
      </>
    ),
  },
  {
    title: 'Governance Insights',
    imageSrc: require('@site/static/img/governance_icon.png').default,
    description: (
      <>
        Gain insights into governance principles and practices. Explore articles on corporate governance, ethics, and effective leadership.
      </>
    ),
  },
];

function Feature({ imageSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

