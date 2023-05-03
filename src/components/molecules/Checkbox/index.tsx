import styles from './checkbox.module.scss';

const Checkbox = () => (

  <div className={styles.round}>
    <input type="checkbox" id="checkbox1" />
    <label htmlFor="checkbox1" />
  </div>

);

export default Checkbox;
