// import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";


const Login = () => {
    const dispatch = useDispatch();


//   useSelector();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredApiKey, setEnteredApiKey] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const apiKeyHandler = (event) => {
    setEnteredApiKey(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())


    const submittedData = {
      email: enteredEmail,
      apiKey: enteredApiKey,
    };
    console.log(submittedData);

  };

  return (
    <div className="container">
    <h1 className="mt-5">Welcome to News Application</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            
            onChange={emailChangeHandler}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apiKey" className="form-label">
            API Token
          </label>
          <input
            type="password"
            className="form-control"
            id="apiKey"
            minLength="32"
            
            onChange={apiKeyHandler} 
          />
        </div>
        <div>
        <span>Please get an api token from <a href="https://newsapi.org/register">here</a></span></div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
