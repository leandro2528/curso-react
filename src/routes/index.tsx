import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import { Dashboard } from "../pages";
import { Amostras } from '../pages';
import { Observatorio } from "../pages";
import { Login } from '../pages';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="amostras" element={<Amostras />} />
                <Route path="observatorio" element={<Observatorio />} />
                <Route path="entrar" element={<Login />} />
                <Route path="*" element={<Navigate to="/dashboard"/>} />
            </Routes>
        </BrowserRouter>
    );
}