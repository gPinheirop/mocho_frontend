import logo from "../../../assets/logo.png";
import "./styles.css";

function LoginScreen() {
  return (
    <div className="page-container">
      <div className="login-container">
        <img className="logo" src={logo} alt="Mocho" />
        {/* <Input className="login-input" type="email" placeholder="Email" />
        <Input className="login-input" type="password" placeholder="Senha" />
        <Button className="login-buttton">Login</Button> */}
      </div>
    </div>
  );
}

export default LoginScreen;
