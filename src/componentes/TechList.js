import React, { Component } from 'react'
import TechItem from './TechItem';

class TechList extends Component {
    // passando valores default para variaveis ou propriedades
    //  da classe ex:
    static defaultProps = {
       // tech: 'Oculto'
    }
  

    // estado do componente, é imutavel, pode ser alterado somente
    // pelo metodo setState, e quando ele muda o metodo render() e executado novamente
    state = {
        newTech: '',
        techs: [
           
        ]
    };

    // executado assim que o componente aparece na tela
    componentDidMount(){
        // recupera lista de tecnologias
        const techs = localStorage.getItem('techs'); 

        //se foi encontrada a chave techs, altera o estado de techs para o conteudo em localStorage
        if(techs){
            this.setState({ techs: JSON.parse(techs) });
        }
    }

          
    // Executado sempre que houver alterações nas props ou estado
    // seus valores podem ser recuperados antes das alterações 
    componentDidUpdate(_, prevState){ // vamos trabalhar somente com prevState
        // this.props ou this.state    
        // se o estado do array techs for diferente do estado anterior anterior a alteração
       if(prevState.techs !== this.state.techs){
            // grava no localstorage o array techs, com valor de techs do state
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }

    }

    // executado quando o componente deixa de existir  
    componentWillUnmount(){
        
    }
    // funcoes de classe devem ser escrita no formato de aero function,
    // caso contrario nao acessa o this, e nem outras propriedade e funcoes da classe
    handleInputChange = e => {
        console.log(e.target.value);
        // somente setState pode alterar o valor de uma propriedade do state
        // a cada vez que uma propriedade do state muda o metodo render executa novamente
        this.setState({ newTech: e.target.value });
    }

    // adiciona tecnologias
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
        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                {/* <> mais de um elemento html deve estar em volto por essa tag */ }
                <ul>
                    {/* passando propriedade e funcoes para o componente TechItem, a funcao é chamada de dentro do componente TechItem */ }
                    { this.state.techs.map(tech => (
                        <TechItem
                            key={ tech }
                            tech={ tech }
                            onDelete={ () => this.handleDelete(tech) }
                        />
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