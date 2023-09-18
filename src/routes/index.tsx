import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Amostras, Dashboard, Observatorios } from "../pages";

export const Routesapp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/amostras" element={<Amostras />} />
                <Route path="/observatorios" element={<Observatorios />} />
            </Routes>
        </BrowserRouter>
    );
}