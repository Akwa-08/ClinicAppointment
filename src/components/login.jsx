import '../assets/css/login.css';
import logoImage from '../assets/img/background.png'; 
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function login() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="container">
      <img src={logoImage} alt="Logo Image" className="logo" /> 
      <div className="login-container">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>Don't have an account? Sign In</p>      
          {/* <Link to="/signup">Sign Up</Link> */}
        </form>
      </div>
    </div>
  );
}

export default login;
