import React, { Component } from 'react'
import MyLayout from '../components/Layout';
import { Typography } from '@material-ui/core'
import { loadLiquidFillGauge, liquidFillGaugeDefaultSettings } from '../charts/liquidFillGauge';


class Index extends Component {
  state = {
    open : false
  }
  handleDrawerOpen () {
    this.setState({open: true})
  }
  handleDrawerClose () {
    this.setState({open: false})
  }

  liquidFill(){
    var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    return gauge1
  }

  render() {
    return (
      <MyLayout stateOpen={this.state.open} handleDrawerOpen={() => this.handleDrawerOpen()} handleDrawerClose={() => this.handleDrawerClose()}  >
        <Typography variant='title' color='textPrimary' >
          Dashboard
        </Typography>
        <div>
          <svg id="fillgauge1" width="97%" height="250" onClick={this.liquidFill} ></svg>
        </div>
        <ul>
          <li>Nombre de la tienda</li>
          <li>Timer para llegar a la meta</li>
          <li>grafico de estadisticas</li>
        </ul>
      </MyLayout>
    )
  }
}

export default Index
