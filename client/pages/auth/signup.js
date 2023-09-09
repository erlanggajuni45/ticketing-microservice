const SignUp = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email</label>
        <input
          className='form-control'
          type='email'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-control'
          type='password'
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default SignUp;
