import React,{Component} from 'react'
//import ReactDOM from 'react-dom'
//import {createStore} from 'redux'
//import {Provider,connect} from 'react-redux'
import './App.css';

const inputButtons=['+','-','*','/',
  '1','2','3','4',
  '5','6','7','8',
  '9','0','.','AC','='];

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'0'
    }
  }

  inputButtonPressed(input){
    let oldValue=this.state.inputValue;
    let recValue=this.valueInput(oldValue,input);
    let newValue={};
    newValue.inputValue=recValue;
    this.setState(newValue)
  }

  valueInput(oldvalue,value){
    switch (value) {
      case'=':
        let outcome=""+eval(oldvalue);
        let result=oldvalue+'='+outcome;
        return result;
      case'AC':
        oldvalue='0';
        return oldvalue;
      case'+':
      case'-':
      case'*':
      case'/':
        return oldvalue+value;
      default:
        if (oldvalue==='0'){
          oldvalue=''
        }
        return oldvalue+value;

    }}

  //renderInputButtons(){


  render(){
    // const curData=this.props;

    let buttonlist = [];
    inputButtons.forEach(data => {
      buttonlist.push(
          <button type="button"
                  onClick={this.inputButtonPressed.bind(this,data)}
          >{data}</button>
      );
    });

    return(

        <div className="calculator">
          <input type="text" className="calculator-screen"
                 value={this.state.inputValue}>{this.state.value}</input>
          <div className="calculator-keys" >
            {buttonlist}
          </div>
        </div>
    )
  }
}


export default Calculator;
//ReactDOM.render(<Calculator/>,
  //  document.getElementById('example'));