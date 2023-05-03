import styles from './checkbox.module.scss';

const Checkbox = (props:any) => {
  const inputUniqueKey = `${props.name}-${props.id}`;
  const checked = props.value;

  return (

    <div className={styles.round}>
      <input
        name={inputUniqueKey}
        checked={checked}
        value={checked}
        onChange={(e) => props.onChange(e.target.checked)}
        type="checkbox"
        id={inputUniqueKey}
      />
      <label htmlFor={inputUniqueKey} />
    </div>

  );
};

export default Checkbox;
