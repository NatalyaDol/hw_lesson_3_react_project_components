import React from 'react';

class Login extends React.Component {
  render() {
    
    return (
        <div className="form-login">
            <h1>Кажется я начинаю понимать React &#x263a;</h1>
            <form >
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
              <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
  }
}

export default Login;