import styled from "styled-components";

export const MainStyled = styled.main`
    background-color: #D3D3D3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
`

export const ImgLogo = styled.img`
    width: 10vw;
    height: 17vh;
    object-fit: cover;
    margin-bottom: 0;
`

export const DivForm = styled.div`
    background-color: white;
    width: 29vw;
    height: 80vh;
    border: 3px solid black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
`

export const TituloForm = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 27px;
    margin-top: 2vh;
`

export const FormSyled = styled.form`
    width: 27.5vw;
    height: 58vh;
`

export const DivInputs = styled.div`
    margin-top: 1vh;
`

export const TituloInput = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0;
`

export const InputReserva = styled.input`
    width: 97%;
    height: 34px;
    background-color: #F5F5F5;
    border: 1px solid black;
    border-radius: 7px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    padding-left: 2%;
`

export const BtnReservar = styled.button`
    font-family: 'Inter', sans-serif;
    font-size: 19px;
    font-weight: 600;
    color: white;
    width: 100%;
    height: 32px;
    background-color: #A17222;
    margin-top: 3vh;
    border: 1px solid black;
    border-radius: 7px;
    cursor: pointer;
`