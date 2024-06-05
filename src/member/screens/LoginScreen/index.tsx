import { Button, Flex, TextField, Text } from "@radix-ui/themes";
import logo from "../../../assets/logo.png";
import "./styles.css";
import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import { useNavigate, redirect } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { accessToken, login, deleteToken } = useStore();
  const navigate = useNavigate();

  const onLogin = async () => {
    const isSucess = await login(email, password);
    if (isSucess) {
      setError(false)
      navigate("home");
    }
    setError(true)
    return null;
  };

  useEffect(() => {
    accessToken && deleteToken();
  }, []);

  return (
    <Flex
      direction={"column"}
      gap={"3"}
      className="login-container"
      p={"6"}
      m={"9"}
    >
      <img className="logo" src={logo} alt="Mocho" />
      {
        error &&
        <Text className="alert">Email ou senha está incorreto</Text>
      }
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
  );
}

export default LoginScreen;
