import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigator=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [v, setv] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if(username=="admin" && password=="123")
        navigator('/admin')
    else{
      if(username==password){
        setv('')
        navigator( `/roll/${username}`)
      }
      else
        setv("Invalid Credentials")
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <p style={{marginLeft:"400px",color:"red"}}>{v}</p>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
