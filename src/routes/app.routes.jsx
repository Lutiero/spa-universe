import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { Explore } from "../pages/Explore";
import { Universe } from "../pages/Universe";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/universe" element={<Universe />} />
    </Routes>
  );
}
