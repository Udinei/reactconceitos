import React, { Component } from 'react'

class TechList extends Component {
    // estado do componente, é imutavel, pode ser alterado somente
    // pelo metodo setState, e quando ele muda o metodo render() e executado novamente
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
    };

    // funcoes de classe devem ser escrita no formato de aero function,
    // caso contrario nao acessa o this, e nem outras propriedade e funcoes da classe
    handleInputChange = e => {
        console.log(e.target.value);
        // somente setState pode alterar o valor de uma propriedade do state
        // a cada vez que uma propriedade do state muda o metodo render executa novamente
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault(); // não envia o formulario de forma padrao
        // console.log(this.state.newTech);
        // para atualizar uma propriedade array no state, com um novo item
        // deve-se copiar toda propriedade (array) do state com (... spredoperator, novoItem) e inclui o novo item
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        }); // limpa o input newTech
    }

    handleDelete = (tech) => {
        console.log(tech);
        // altera o obj techs do state, usando filter, 
        // onde sera retornado um novo array contendo todos 
        // obj do array, diferente de tech
        this.setState({ techs: this.state.techs.filter(t => t !== tech)})
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                {/* <> mais de um elemento html deve estar em volto por essa tag */ }
                <ul>
                    { this.state.techs.map(tech => ( 
                        //* toda tipo de list deve conter uma key, que pode ser o proprio elemento da lista também */ }
                          <li key={ tech }>
                             { tech } 
                             {/** this.handleDelete(tech) <- executando a funcao, se for usado assim, sera excutado assim que a pagina carregar*/}
                             {/** () => this.handleDelete(tech) <- e assim, criando uma nova funcao, sera excutado somente quando for clicado no button */}
                             <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
                          </li>
                    ))}
                </ul>
            <input
                type="text"
                onChange={ this.handleInputChange }
                value={ this.state.newTech } // caso mude o valor na variavel newTech no state, sera mudado no input também
            />
            <button type="submit"> Enviar </button>
            </form >
            //</>
        );
    }
}

export default TechList;