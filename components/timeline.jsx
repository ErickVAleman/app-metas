import { withStyles, Button, Tooltip, Grid, Paper, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons"
import PropTypes from "prop-types";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }
})

const TimeLineComp = ({ classes }) => (
  <Paper className={classes.paper} >
    <Typography variant='title' color='primary' >
      Nueva entrada
        </Typography>
    {/* <Tooltip title="Agregar" >
        <Button variant='fab' color='primary' aria-label='Add' className={classes.absolute} >
          <Add />
        </Button>
      </Tooltip> */}
  </Paper>
)

TimeLineComp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TimeLineComp)