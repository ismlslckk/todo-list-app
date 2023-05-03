import styles from './input.module.scss';

const Input = ({ ...props }) => {
  const className = `form-control ${props.className} ${styles.baseInput}`;

  return (
    <div>
      <input
        {...props}
        className={className}
      />
    </div>
  );
};

export default Input;
