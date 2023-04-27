import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../ui";

import { DcPage, HeroesRoutes, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Navbar/>

      <Routes>

        <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>
        <Route path="dc" element={<DcPage></DcPage>}></Route>

        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to='/marvel/' />} />

      </Routes>
    </>
  );
};
