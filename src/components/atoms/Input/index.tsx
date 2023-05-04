import classNames from 'classnames';
import styles from './input.module.scss';

const Input = ({ ...props }) => {
  const className = classNames('form-control', styles.baseInput, {
    [`${props.className}`]: props.className,
  });

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
