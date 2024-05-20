import { useNavigate } from 'react-router';
import * as S from './ReservarVaga.styles'
import { useState } from 'react';

export function ReservarVaga() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        vehiclePlate: '',
        ownerName: '',
        apartmentNumber: '',
        apartmentBlock: '',
        vehicleModel: '',
        vehicleColor: '',
        parkingSpot: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        let storedData = localStorage.getItem("Vagas reservadas");
        let vagasReservadas;
        try {
            vagasReservadas = storedData ? JSON.parse(storedData) : [];
            if (!Array.isArray(vagasReservadas)) {
                throw new Error("O dado não é um Array");
            }
        } catch (error) {
            vagasReservadas = [];
        }

        const vagaExiste = vagasReservadas.some(vaga => vaga.parkingSpot === formData.parkingSpot);

        if (vagaExiste) {
            alert("Esta vaga já está reservada. Por favor, selecione outra vaga.");
        } else {
            vagasReservadas.push(formData);

            localStorage.setItem("Vagas reservadas", JSON.stringify(vagasReservadas));

            alert("Vaga reservada com sucesso");
            setFormData({
                vehiclePlate: '',
                ownerName: '',
                apartmentNumber: '',
                apartmentBlock: '',
                vehicleModel: '',
                vehicleColor: '',
                parkingSpot: ''
            });

            navigate('listagemVagas/vagasReservadas')
        }
    }

    return (
        <S.MainStyled>
            <S.ImgLogo src='../../src/assets/svg/logo.svg' />
            <S.DivForm>
                <S.TituloForm>Reservar vaga</S.TituloForm>
                <S.FormSyled onSubmit={handleSubmit}>
                    <div>
                        <S.TituloInput>Placa do veículo</S.TituloInput>
                        <S.InputReserva
                            type="text"
                            name="vehiclePlate"
                            value={formData.vehiclePlate}
                            onChange={handleChange}
                            required
                            minLength="7"
                            maxLength="8"
                            pattern='[A-z]{3}-\d[A-j0-9]\d{2}'
                        />
                    </div>
                    <S.DivInputs>
                        <S.TituloInput>Nome do proprietário</S.TituloInput>
                        <S.InputReserva
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                            minLength="3"
                        />
                    </S.DivInputs>
                    <S.DivInputs>
                        <S.TituloInput>N° do apartamento</S.TituloInput>
                        <S.InputReserva
                            type="number"
                            name="apartmentNumber"
                            value={formData.apartmentNumber}
                            onChange={handleChange}
                            required
                            min="1"
                        />
                    </S.DivInputs>
                    <S.DivInputs>
                        <S.TituloInput>Bloco do apartamento</S.TituloInput>
                        <S.InputReserva
                            type="text"
                            name="apartmentBlock"
                            value={formData.apartmentBlock}
                            onChange={handleChange}
                            required
                        />
                    </S.DivInputs>
                    <S.DivInputs>
                        <S.TituloInput>Modelo do veículo</S.TituloInput>
                        <S.InputReserva
                            type="text"
                            name="vehicleModel"
                            value={formData.vehicleModel}
                            onChange={handleChange}
                            required
                        />
                    </S.DivInputs>
                    <S.DivInputs>
                        <S.TituloInput>Cor do veículo</S.TituloInput>
                        <S.InputReserva
                            type="text"
                            name="vehicleColor"
                            value={formData.vehicleColor}
                            onChange={handleChange}
                            required
                        />
                    </S.DivInputs>
                    <S.DivInputs>
                        <S.TituloInput>N° da vaga de estacionamento</S.TituloInput>
                        <S.InputReserva
                            type="number"
                            name="parkingSpot"
                            value={formData.parkingSpot}
                            onChange={handleChange}
                            required
                            min="1"
                        />
                    </S.DivInputs>
                    <S.BtnReservar type="submit">Reservar vaga</S.BtnReservar>
                </S.FormSyled>
            </S.DivForm>
        </S.MainStyled>
    )
}
