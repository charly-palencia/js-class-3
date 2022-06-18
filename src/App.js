import './App.css';
import {useEffect, useState} from 'react';
import {registerUser} from "./services";
import Input from './Input';

const required = ["phoneNumber", "email"];

function App() {
  const [user, setUser] = useState({
    phoneNumber: '',
    email: ''
  })
  const [errors, setErrors] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(required.some(key => user[key] === '')){
      return setDisabled(true)
    }

    setDisabled(false)
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    registerUser(user)
    .then(valor => console.log("good", valor))
    .catch(setErrors)
  }

  const handleBlur = (event) => {
    const attribute = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [attribute]: value
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input name="phoneNumber" errors={errors} onBlur={handleBlur}/>
        <Input name="email" errors={errors} onBlur={handleBlur}/>
        <input type="submit" value="Submit" disabled={disabled}/>
      </form>
    </div>
  );
}

export default App;
