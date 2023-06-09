import './index.css';

function login_block() {
  return (
    <section className='login' id='login'>
      <div className='head'>
      <h1 className='company'>Getting started</h1>
      </div>
      <p className='msg'>Login or signup with us to start using our solution for free.</p>
      <div className='form'>
        <form>
          <input type="text" placeholder='Username' className='text' id='username' required/><br/>
          <input type="password" placeholder='••••••••••••••' className='password'/><br/>
          <div className='btn-container'>
            <a href="#" className='btn-login' id='do-login'>Login</a>
            <a href="#" className='btn-signup' id='do-signup'>Sign up</a>
            <a href="#" className='forgot'>Forgot?</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default login_block;
