import LandingPage from "@/pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Dick from "@/pages/dick/dick";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/pinto" element={<Dick />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}
