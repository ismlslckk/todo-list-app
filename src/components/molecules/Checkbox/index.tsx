import styles from './checkbox.module.scss';

const Checkbox = ({ ...props }) => (

  <div className={styles.round}>
    <input
      type="checkbox"
      {...props}
    />
    <label htmlFor={props.id} />
  </div>

);

export default Checkbox;
