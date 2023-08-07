import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import { useEffect } from "react";
import UseMergeableSearchParams from "./hooks/useMegeableSearchParams";
import Cookies from "js-cookie";

function App() {
  return (
    <main
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)",
      }}
    >
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
