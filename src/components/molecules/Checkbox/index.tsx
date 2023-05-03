import { useState } from 'react';
import { v4 } from 'uuid';
import styles from './checkbox.module.scss';

const Checkbox = ({ ...props }) => {
  const [id] = useState(v4());

  return (

    <div className={styles.round}>
      <input
        type="checkbox"
        {...props}
        id={id}
      />
      <label htmlFor={id} />
    </div>

  );
};

export default Checkbox;
