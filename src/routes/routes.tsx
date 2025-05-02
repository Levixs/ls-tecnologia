import LandingPage from "@/pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}
