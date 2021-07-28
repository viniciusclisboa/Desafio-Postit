import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ContainedButtons from "../botoes/botoes.js"
import './menu.css';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 export default class PostIt extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cor: '?',
      tamanho: '?',
      formato: '?',
      quantidade: '?',
      valor: 0
    };
  }

  render(){
     return (
    <div>
    <div id="botoes">
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button className="botao" id="pequeno" onClick={() => this.setState(state => ({
      tamanho: 'PEQUENO'}))}>5 cm</Button>
        <Button className="botao" id="medio" onClick={() => this.setState(state => ({
      tamanho: 'MÉDIO'}))}>8 cm</Button>
        <Button className="botao" id="grande" onClick={() => this.setState(state => ({
      tamanho: 'GRANDE'}))}>12 cm</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button className="botao" id="amarelo" onClick={() => this.setState(state => ({
      cor: 'AMARELA'}))}>Amarelo</Button>
        <Button className="botao" id="verde" onClick={() => this.setState(state => ({
      cor: 'VERDE'}))}>Verde</Button>
        <Button className="botao" id="rosa" onClick={() => this.setState(state => ({
      cor: 'ROSA'}))}>Rosa</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button className="botao" id="quadrado" onClick={() => this.setState(state => ({
      formato: 'QUADRADO'}))}>Quadrado</Button>
        <Button className="botao" id="circulo" onClick={() => this.setState(state => ({
      formato: 'CÍRCULO'}))}>Círculo</Button>
        <Button className="botao" id="triangulo" onClick={() => this.setState(state => ({
      formato: 'TRIÂNGULO'}))}>Triângulo</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button className="botao" id="cinquenta" onClick={() => this.setState(state => ({
      quatidade: '50', valor: 2}))}>50</Button>
        <Button className="botao" id="cem" onClick={() => this.setState(state => ({
      quantidade: '100', valor: 4}))}>100</Button>
        <Button className="botao" id="quinhentos" onClick={() => this.setState(state => ({
      quantidade: '500', valor: 10}))}>500</Button>
      </ButtonGroup>
      </div>
      <p><strong>
      {
        `Tamanho: ${this.state.tamanho}\n
        Cor: ${this.state.cor}\n
        Formato: ${this.state.formato}\n 
        Quantidade: ${this.state.quantidade}\n`
      }
      </strong>
      </p>
      <ContainedButtons valor={this.state.valor} tamanho={this.state.tamanho}/>
    </div>
  )
  }
}
