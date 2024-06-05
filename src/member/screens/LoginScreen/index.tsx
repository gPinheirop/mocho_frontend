import { Button, Flex, TextField } from "@radix-ui/themes";
import logo from "../../../assets/logo.png";
import "./styles.css";
import { useState } from "react";
import { useStore } from "../../../store";
import { redirect } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);

  const { accessToken, login } = useStore();

  const onLogin = async () => {
    const isSucess = await login(email, password);
    isSucess ? redirect("/home") : console.log("salve");
  };

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
        <TextField.Root
          size="2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField.Root
          size="2"
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="soft"
          className="login-buttton"
          onClick={() => onLogin()}
        >
          Login
        </Button>
      </Flex>
    </div>
  );
}

export default LoginScreen;
