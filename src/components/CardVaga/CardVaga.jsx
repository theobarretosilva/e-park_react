import PropTypes from 'prop-types';
import * as S from './CardVaga.styles';

export const CardVaga = ({ nVaga, placaCarro, modeloCarro, corCarro, donoCarro, nApto, blocoApto, onDelete, visible }) => {
    return (
        <S.BoxCard>
            <S.PNVaga>{nVaga}</S.PNVaga>
            <S.TxtCard>{placaCarro}</S.TxtCard>
            <S.TxtCard>{modeloCarro}</S.TxtCard>
            <S.TxtCard>{corCarro}</S.TxtCard>
            <S.Linha style={{visibility: visible ? 'visible' : 'hidden'}}>‎</S.Linha>
            <S.TxtCard>{donoCarro}</S.TxtCard>
            <S.TxtCard>{nApto}</S.TxtCard>
            <S.TxtCard>{blocoApto}</S.TxtCard>
            <button style={{visibility: visible ? 'visible' : 'hidden'}} onClick={onDelete}>Deletar</button>
        </S.BoxCard>
    );
};

CardVaga.propTypes = {
    nVaga: PropTypes.string.isRequired,
    placaCarro: PropTypes.string.isRequired,
    modeloCarro: PropTypes.string.isRequired,
    corCarro: PropTypes.string.isRequired,
    donoCarro: PropTypes.string.isRequired,
    nApto: PropTypes.string.isRequired,
    blocoApto: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};
