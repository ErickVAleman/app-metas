import React, { Component } from 'react'
import MyLayout from '../components/Layout'
import { Typography, Divider, Paper, Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Chart from '../charts/createChart'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper:{
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }
})

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

  render() {
    const { classes } = this.props
    return (
      <MyLayout stateOpen={this.state.open}
          handleDrawerOpen={() => this.handleDrawerOpen()}
          handleDrawerClose={() => this.handleDrawerClose()}
      >
        <div className={classes.root} >
          <Grid container spacing={24} >
            <Grid item xs={12}>
              <Paper className={classes.paper} >
                <Typography variant='title' color='textPrimary' >
                  Dashboard
                </Typography>
                <Divider />
                <br />
                <Typography variant='display1' color='textSecondary' >
                  Suc. Jaltipan
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} >
                <Typography className='tumeta' variant='title' color='textPrimary'>
                  Tu meta del dia es:
                </Typography>
                <div className='content-typewriter' >
                  <div class="typewriter">
                    <h1>$ 1,500,000.00</h1>
                  </div>
                </div>
                <br />
                <Typography className='tumeta' variant='title' color='textPrimary'>
                  Tu acumulado actual es:
                </Typography>
                <div className='content-typewriter' >
                  <div class="typewriter">
                    <h1>$ 500,000.00</h1>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant='title' color='textSecondary' >
                  Grafico de seguimiento de productos mas vendidos
                </Typography>
                <div style={{width:"100%", height:"90vh"}} > <Chart /> </div>
              </Paper>
            </Grid>
          </Grid>
          <style>@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,400,700');{`
              .content-typewriter {
                justify-content: center;
                display: flex;
                width: 100%;
                height: 100%;
              }
              .typewriter h1 {
                color: rgb(0, 156, 255);
                font-family: 'IBM Plex Sans', sans-serif;
                font-size: 7vw;
                overflow: hidden;
                border-right: .15em solid orange;
                white-space: nowrap;
                margin: 0 auto;
                letter-spacing: .15em;
                animation:
                  typing 3.5s steps(30, end),
                  blink-caret .8s step-end infinite;
                }
                .tumeta {
                  font-family: 'IBM Plex Sans', sans-serif;
                  font-size: 1.5em;
                  color: #737373;
                }

                @keyframes typing {
                  from{ width: 0 }
                  to { width: 100% }
                }

                @keyframes blink-caret {
                  from, to { border-color: transparent }
                  50% { border-color: orange }
                }

              `}</style>
        </div>
      </MyLayout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
