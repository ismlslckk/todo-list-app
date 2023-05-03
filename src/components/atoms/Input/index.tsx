import { useEffect, useRef } from 'react';

const Input = ({ ...props }) => {
  const inputElement: any = useRef();

  useEffect(() => {
    if (inputElement && inputElement.current) {
      inputElement.current.className += ` ${props.className}`;
    }
  }, []);

  return (
    <div>
      <input
        style={{ minWidth: '300px' }}
        ref={inputElement}
        {...props}
        className="form-control"
      />
    </div>
  );
};

export default Input;
