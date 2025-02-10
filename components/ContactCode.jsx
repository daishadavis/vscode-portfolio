import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'daishadavis84@gmail.com',
    href: 'mailto:daishadavis84@gmail.com',
  },
  {
    social: 'github',
    link: 'daishadavis',
    href: 'https://github.com/daishadavis',
  },
  {
    social: 'linkedin',
    link: 'daishadavis',
    href: 'https://www.linkedin.com/in/daisha-davis-2144b5159/',
  },
  {
    social: 'twitter',
    link: 'DD_Davis34',
    href: 'https://www.twitter.com/DD_Davis34',
  },
  {
    social: 'instagram',
    link: 'davis_daisha',
    href: 'https://www.instagram.com/davis_daisha',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
