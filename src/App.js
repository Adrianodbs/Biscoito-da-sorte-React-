import { Component } from 'react'
import './assets/style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.quebrabiscoito = this.quebrabiscoito.bind(this)

    this.frases = [
      'frase 1',
      'frase 2',
      'frase 3',
      'frase 4',
      'frase 5',
      'frase 6',
      'frase 7',
      'frase 8',
      'frase 9'
    ]
  }

  quebrabiscoito() {
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebrabiscoito} />
        <h3 className="texto-frase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App
