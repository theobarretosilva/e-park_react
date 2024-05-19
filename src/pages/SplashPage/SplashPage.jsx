import { useNavigate } from 'react-router'
import * as S from './SplashPage.styles'

export function SplashPage() {
    const navigate = useNavigate();

    return(
        <>
            <S.MainStyled>
                <S.TxtBemVindo>Seja bem-vindo ao</S.TxtBemVindo>
                <S.ImgLogo src='../../src/assets/svg/logo.svg' />
                <S.SubtituloInicio>O aplicativo onde você pode reservar, visualizar e deletar suas vagas de estacionamento!</S.SubtituloInicio>
                <S.BtnNav onClick={() => navigate('/reservarVaga')}>
                    Reservar vaga
                </S.BtnNav>
                <S.BtnNav onClick={() => navigate('/listagemVagas/vagasDisponiveis')}>
                    Visualizar vagas disponíveis
                </S.BtnNav>
                <S.BtnNav onClick={() => navigate('/listagemVagas/vagasReservadas')}>
                    Visualizar vagas reservadas
                </S.BtnNav>
            </S.MainStyled>
            <S.ImgAside src='../../src/assets/img/mulher_no_celular.jpg' />
        </>
    )
}