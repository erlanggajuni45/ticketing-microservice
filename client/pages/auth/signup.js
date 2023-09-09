import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    try {
      const response = await axios.post('/api/users/signup', { email, password });
      console.log(response);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email</label>
        <input
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.find((err) => err.field === 'email') ? (
          <p className='text-danger'>{errors.find((err) => err.field === 'email').message}</p>
        ) : (
          ''
        )}
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-control'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.find((err) => err.field === 'password') ? (
          <p className='text-danger'>{errors.find((err) => err.field === 'password').message}</p>
        ) : (
          ''
        )}
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default SignUp;
