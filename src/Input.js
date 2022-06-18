import "./input.css"
import camelcase from 'camelcase';

function Input({errors, name, onBlur}){
  const showError = (field) => {
    const element = errors.find(item => camelcase(item.property) === field);
    if(!element) {
      return;
    }
    return Object.values(element.constraints)[0]
  }

  return <div className="input-wrapper">
    <input type="text" name={name} onBlur={onBlur}/>
    <span>
      {showError(name)}
    </span>
  </div>
}

export default Input;
