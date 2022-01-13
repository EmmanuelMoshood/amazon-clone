import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
