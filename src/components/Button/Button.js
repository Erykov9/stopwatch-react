import styles from './Button.module.scss';

const Button = ({ btnText, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>{btnText}</button>
  )
}

export default Button;