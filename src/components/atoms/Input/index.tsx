import { useEffect, useRef } from 'react';

const Input = (props:any) => {
  const inputElement = useRef();

  useEffect(() => {
    if (inputElement && inputElement.current) {
      inputElement.current.className += ` ${props.className}`;
    }
    // eslint-disable-next-line no-console
    console.log();
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
