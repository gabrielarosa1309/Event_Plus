import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import das páginas
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import EventosPage from "./pages/EventosPage/EventosPage";
import TipoEventosPage from "./pages/TipoEventosPage/TipoEventosPage";
import InstituicaoPage from "./pages/InstituicaoPage/InstituicaoPage";
import TestePage from "./pages/TestePage/TestePage";
import Footer from "./components/Footer/Footer";
import UseEffectPage from "./pages/UseEffectPage/UseEffectPage";

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
            
                <Routes> 
                    <Route element={<LoginPage/>} path="/" exact/>
                    <Route element={<HomePage/>} path="/home"/>
                    <Route element={<EventosPage/>} path="/eventos"/>
                    <Route element={<TipoEventosPage/>} path="/tiposeventos"/>
                    <Route element={<InstituicaoPage/>} path="/instituicoes"/>
                    <Route element={<TestePage/>} path="/teste"/>
                    <Route element={<UseEffectPage/>} path="/useEffectPage"/>
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Rotas;