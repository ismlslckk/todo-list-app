const Input = (props:any) => (

  <div>
    <input
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="form-control"
    />
  </div>
);

export default Input;
