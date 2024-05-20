import { useEffect, useState } from 'react';
import { CardVaga } from '../../components/CardVaga/CardVaga';
import * as S from './VagasReservadas.styles';

export function VagasReservadas() {
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        // Recupera as vagas reservadas do localStorage
        const storedData = localStorage.getItem("Vagas reservadas");
        const vagasReservadas = storedData ? JSON.parse(storedData) : [];
        setVagas(vagasReservadas);
    }, []);

    const handleDelete = (index) => {
        const newVagas = vagas.filter((_, i) => i !== index);
        setVagas(newVagas);
        localStorage.setItem("Vagas reservadas", JSON.stringify(newVagas));
    };

    return (
        <S.MainStyled>
            <S.TituloForm>Vagas Reservadas</S.TituloForm>
            <S.MainVagas>
                {vagas.length > 0 ? (
                    vagas.map((vaga, index) => (
                        <CardVaga
                            key={index}
                            nVaga={vaga.parkingSpot}
                            placaCarro={vaga.vehiclePlate}
                            modeloCarro={vaga.vehicleModel}
                            corCarro={vaga.vehicleColor}
                            donoCarro={vaga.ownerName}
                            nApto={vaga.apartmentNumber}
                            blocoApto={vaga.apartmentBlock}
                            onDelete={() => handleDelete(index)}
                            visible={true}
                        />
                    ))
                ) : (
                    <S.TxtCard>Nenhuma vaga reservada</S.TxtCard>
                )}
            </S.MainVagas>
        </S.MainStyled>
    );
}
