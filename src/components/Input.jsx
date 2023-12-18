const Input = ({ label, name, ...props }) => {
  return(
  <div className="flex flex-col gap-3">
    <label htmlFor={name}>{label}</label>
    <input id={name} className="border rounded-lg p-2" {...props} />
  </div>);
};

export default Input;
