import { Outlet } from "react-router-dom";
import { useStore } from "./store";
import "./App.css";

function App() {
  const { accessToken } = useStore();

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
