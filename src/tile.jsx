import React, { Component} from './react';

export default class tile extends Component {
  titleClick(props){
    props.updateBoard(props.loc, props.turn)
  }
  render (){
   return (
    <div className={"tile " + this.props.loc} onClick={() => this.titleClick(this.props)}>
    <p>{this.props.value}</p> 
    </div>
  )
}
}
