import styles from './checkbox.module.scss';

const Checkbox = (props:any) => (

  <div className={styles.round}>
    <input
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e.target.checked)}
      type="checkbox"
      id={props.name}
    />
    <label htmlFor={props.name} />
  </div>

);

export default Checkbox;
