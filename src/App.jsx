import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import HostProperties from "./pages/host/HostProperties";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="login" element={<Login />} />

          {/* Host Dashboard Routes */}
          <Route path="hosts" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="properties" element={<HostProperties />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
