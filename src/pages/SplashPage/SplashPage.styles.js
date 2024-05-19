import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: #D3D3D3;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
`

export const TxtBemVindo = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
`

export const ImgLogo = styled.img`
    object-fit: cover;
    width: 18vw;
    height: 30vh;
    margin-bottom: 0;
`

export const SubtituloInicio = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 1.7rem;
    text-align: center;
    width: 28vw;
    margin-top: 0;
    margin-bottom: 5vh;
`

export const BtnNav = styled.button`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: white;
    width: 20vw;
    height: 5.2vh;
    background-color: #A17222;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 2vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ImgAside = styled.img`
    width: 50vw;
    height: 100%;
    object-fit: cover;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
`