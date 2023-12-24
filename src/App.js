import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />

        {/* checkout page */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
