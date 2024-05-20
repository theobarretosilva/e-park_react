import { useState, useEffect } from 'react';
import { CardVaga } from '../../components/CardVaga/CardVaga'; // Certifique-se de usar a exportação padrão correta
import * as S from './VagasDisponiveis.styles';

const initialVagas = [
    { parkingSpot: '1', vehiclePlate: '', vehicleModel: '', vehicleColor: '', ownerName: '', apartmentNumber: '', apartmentBlock: '' },
    { parkingSpot: '2', vehiclePlate: '', vehicleModel: '', vehicleColor: '', ownerName: '', apartmentNumber: '', apartmentBlock: '' },
    { parkingSpot: '3', vehiclePlate: '', vehicleModel: '', vehicleColor: '', ownerName: '', apartmentNumber: '', apartmentBlock: '' }
];

export const VagasDisponiveis = () => {
    const [vagasDisponiveis, setVagasDisponiveis] = useState(initialVagas);
    const [vagasReservadas, setVagasReservadas] = useState([]);

    useEffect(() => {
        const storedReservadas = localStorage.getItem("Vagas reservadas");
        const vagasReservadas = storedReservadas ? JSON.parse(storedReservadas) : [];
        setVagasReservadas(vagasReservadas);
    }, []);

    useEffect(() => {
        localStorage.setItem("Vagas reservadas", JSON.stringify(vagasReservadas));
    }, [vagasReservadas]);

    return (
        <S.MainStyled>
            <S.TituloForm>Vagas Disponíveis</S.TituloForm>
            <S.MainVagas>
                {vagasDisponiveis.length > 0 ? (
                    vagasDisponiveis.map((vaga, index) => (
                        <div key={index}>
                            <CardVaga
                                nVaga={vaga.parkingSpot}
                                placaCarro={vaga.vehiclePlate}
                                modeloCarro={vaga.vehicleModel}
                                corCarro={vaga.vehicleColor}
                                donoCarro={vaga.ownerName}
                                nApto={vaga.apartmentNumber}
                                blocoApto={vaga.apartmentBlock}
                                visible={false}
                            />
                        </div>
                    ))
                ) : (
                    <S.TxtCard>Nenhuma vaga disponível</S.TxtCard>
                )}
            </S.MainVagas>
        </S.MainStyled>
    );
};
