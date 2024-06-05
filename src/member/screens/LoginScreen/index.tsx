import { Button, Flex, TextField } from "@radix-ui/themes";
import logo from "../../../assets/logo.png";
import "./styles.css";

function LoginScreen() {
  return (
    <div className="page-container">
      <Flex
        direction={"column"}
        gap={"3"}
        className="login-container"
        p={"6"}
        m={"9"}
      >
        <img className="logo" src={logo} alt="Mocho" />
        <TextField.Root size="2" placeholder="Email" />
        <TextField.Root size="2" placeholder="Senha" type="password" />
        <Button variant="soft" className="login-buttton">
          Login
        </Button>
      </Flex>
    </div>

    // <div className="page-container">
    //   <div className="login-container">
    //     <input className="login-input" type="email" placeholder="Email" />
    //     <input className="login-input" type="password" placeholder="Senha" />
    //     <button className="login-buttton">Login</button>
    //   </div>
    // </div>
  );
}

export default LoginScreen;
