import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";


const Home = lazy(() => import("./components/Landing page/Home"));
const Inventory = lazy(() => import("./components/Inventory/Inventory"));


function App() {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DashBoard" element={<Inventory />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

