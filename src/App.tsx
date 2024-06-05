import { Outlet } from "react-router-dom";
import { useStore } from "./store";
import './App.css'

function App() {
  const { accessToken } = useStore();

  return (
    <>
      <div className="page-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
