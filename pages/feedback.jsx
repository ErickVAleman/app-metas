import React, { Component } from 'react';
import MyLayout from '../components/Layout';
import FloatBottom from '../components/floatButton';
import { Typography, Grid, Paper, withStyles, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }
})

class Feedback extends Component {
  state = {
    open: false
  }
  handleDrawerOpen() {
    this.setState({ open: true })
  }
  handleDrawerClose() {
    this.setState({ open: false })
  }
  render() {
    const { classes } = this.props
    return (
      <MyLayout stateOpen={this.state.open} 
        handleDrawerOpen={() => this.handleDrawerOpen()}
        handleDrawerClose={() => this.handleDrawerClose()}
      >
        <Grid container spacing={16} >
          <Grid item xs={12} >
            <Paper className={classes.paper} >
              <Typography variant='title' color='primary' >
                Feedback
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <FloatBottom />
      </MyLayout>
    )
  }
}


Feedback.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Feedback)
