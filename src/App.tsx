import "./App.css";
import { ConfigProvider } from "antd";
import Router from "./router/Router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3D82D0",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
