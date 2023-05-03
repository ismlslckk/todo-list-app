import { useEffect, useRef } from 'react';

const Input = (props: any) => {
  const inputElement: any = useRef();

  useEffect(() => {
    if (inputElement && inputElement.current) {
      inputElement.current.className += ` ${props.className}`;
    }
  }, []);

  return (
    <div>
      <input
        ref={inputElement}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default Input;
