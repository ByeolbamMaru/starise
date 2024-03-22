import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Starise/Home"
import { Notfound } from "./Starise/Notfound"
import { Header } from "./Starise/Header"
import { routes } from "./routes"
import { ABOUT } from "./Starise/Category/ABOUT"
import { NOTICE } from "./Starise/Category/NOTICE"
import { TALENT } from "./Starise/Category/TALENT"
import { CONTENT } from "./Starise/Category/CONTENT"
import { GUIDELINE } from "./Starise/Category/GUIDELINE"

export const Router = () => {
  return <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path={routes.ab} element={<ABOUT/>} />
      <Route path={routes.no} element={<NOTICE/>} />
      <Route path={routes.ta} element={<TALENT/>} />
      <Route path={routes.co} element={<CONTENT/>} />
      <Route path={routes.gu} element={<GUIDELINE/>} />
      <Route path="/*" element={<Notfound/>} />
    </Routes>
  </HashRouter>
}