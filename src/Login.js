import React from 'react';

class Login extends React.Component {
  render() {
    
    return (
        <div class="form-login">
            <h1>Menu</h1>
            <form >
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
              <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
  }
}

export default Login;