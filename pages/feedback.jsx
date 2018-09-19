import React, { Component } from 'react';
import MyLayout from '../components/Layout'
import { Typography } from '@material-ui/core'
class Feedback extends Component {
  state = {
    open : false
  }
  handleDrawerOpen () {
    this.setState({open: true})
  }
  handleDrawerClose () {
    this.setState({open: false})
  }
  render(){
    return(
      <MyLayout stateOpen={this.state.open} handleDrawerOpen={() => this.handleDrawerOpen()} handleDrawerClose={() => this.handleDrawerClose()}  >
        <Typography variant='title' color='textPrimary' >
          Feedback
        </Typography>
        <ul>
          <li>Nombre de la tienda</li>
          <li>Timer para llegar a la meta</li>
          <li>grafico de estadisticas</li>
        </ul>
      </MyLayout>
    )
  }
}

export default Feedback