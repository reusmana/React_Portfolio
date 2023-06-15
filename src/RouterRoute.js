import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Card";
import Home from './Page'

export default function AppCreate() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail1" element={<Home />} />
          <Route path="detail2" element={<Home />} />
          <Route path="detail3" element={<Home />} />
        </Route>
      </Routes>
  );
}
