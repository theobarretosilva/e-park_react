import * as S from './ListagemVagas.styles'
import { Outlet, useNavigate } from "react-router";

export function ListagemVagas() {
    const navigate = useNavigate();
    return(
        <S.MainStyled>
            <S.HeaderStyled>
                <S.ImgLogoHeader src='../../src/assets/svg/logo.svg' />
                <S.BtnNav onClick={() => navigate('/reservarVaga')}>Reservar vaga</S.BtnNav>
                <S.BtnNav onClick={() => navigate('/listagemVagas/vagasDisponiveis')}>Visualizar vagas disponíveis</S.BtnNav>
                <S.BtnNav onClick={() => navigate('/listagemVagas/vagasReservadas')}>Visualizar vagas reservadas</S.BtnNav>
            </S.HeaderStyled>
            <Outlet />
        </S.MainStyled>
    )
}