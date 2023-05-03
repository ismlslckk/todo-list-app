const Input = ({ ...props }) => {
  const className = `form-control ${props.className}`;

  return (
    <div>
      <input
        style={{ minWidth: '300px' }}
        {...props}
        className={className}
      />
    </div>
  );
};

export default Input;
