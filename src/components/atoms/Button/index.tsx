import classNames from 'classnames';

const Button = ({ ...props }) => {
  const className = classNames({
    [`${props.className}`]: props.className,
  });

  return (
  // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      className={className}
    >
      {props.children}
    </button>
  );
};

export default Button;
