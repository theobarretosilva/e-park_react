import { Route, Routes } from "react-router";
import { SplashPage } from '../pages/SplashPage/SplashPage'
import { ReservarVaga } from '../pages/ReservarVaga/ReservarVaga'
import { VagasDisponiveis } from '../pages/VagasDisponiveis/VagasDisponiveis'
import { VagasReservadas } from '../pages/VagasReservadas/VagasReservadas'
import { ListagemVagas } from "../layout/ListagemVagas/ListagemVagas";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/navegar" element={<ListagemVagas />}>
                <Route path="vagasDisponiveis" element={<VagasDisponiveis />} />
                <Route path="vagasReservadas" element={<VagasReservadas />} />
                <Route path="reservarVaga" element={<ReservarVaga />} />
            </Route>
        </Routes>
    )
}