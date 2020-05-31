import React from 'react';
import PropTypes from 'prop-types';


// componente implementado em forma de funcao em vez de classe
// porque nao armazena estado, fica mais simples
// { tech, onDelete } recebendo as propriedade, com desestruc e pegando a propriedade tech, em vez de props.tech
// se o componente fosse de classe acessaria da forma: this.props.tech
function TechItem({ tech, onDelete }) {
    return (
        //* toda tipo de list deve conter uma key, que pode ser o proprio elemento da lista também */ }
        <li>
            { tech }
            {/** this.handleDelete(tech) <- executando a funcao, se for usado assim, sera excutado assim que a pagina carregar*/ }
            {/** () => this.handleDelete(tech) <- e assim, criando uma nova funcao, sera excutado somente quando for clicado no button */ }
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

// passando valores default para os parametros das funçoes, pode ser
// usado da mesma forma nas classes
TechItem.defaultProps = {
    tech: 'Oculto',
};

// validando entrada das propriedades do componentes
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
   // PropTypes.checkPropTypes()
};

export default TechItem;