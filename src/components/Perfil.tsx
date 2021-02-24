import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/luis-jr-zembruski.png" alt="Luís Júnior Zembruski"/>
      <div>
        <strong>Luís Júnior Zembruski</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}