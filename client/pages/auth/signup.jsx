import { useState } from 'react';
// import { ErrorForm, ErrorMessage } from '../../components/errorComponent';
import useRequest from '../../hooks/useRequest';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { email, password },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      {errors?.length ? (
        <div className='alert alert-danger'>
          <ul>
            {errors.map((err) => (
              <li key={err.meesage}>{err.message}</li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      <div className='form-group'>
        <label>Email</label>
        <input
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {
          <ErrorForm
            field='email'
            errors={errors}
          />
        } */}
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-control'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {
          <ErrorForm
            field='password'
            errors={errors}
          />
        } */}
      </div>
      <button className='btn btn-primary'>Sign Up</button>
      {/* {<ErrorMessage errors={errors} />} */}
    </form>
  );
};

export default SignUp;
