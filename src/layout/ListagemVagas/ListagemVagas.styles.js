import styled from "styled-components";

export const MainStyled = styled.main`
    background-color: #D3D3D3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const HeaderStyled = styled.header`
    width: 100vw;
    height: 15vh;
    background-color: white;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ImgLogoHeader = styled.img`
    height: 100%;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`