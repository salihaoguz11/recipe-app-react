import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "../components/nav/Nav";
import { GlobalStyle } from "../components/globalStyles/GlobalStyle";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
