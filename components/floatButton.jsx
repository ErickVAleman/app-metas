import { withStyles, Button, Tooltip } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }
})

const floatButton = ({ classes }) => (
  <div>
    <Tooltip title='Agregar' >
      <Button color='secondary' className={classes.absolute} variant='fab' onClick={()=>console.log('click')} >
        <Add />
      </Button>
    </Tooltip>
  </div>
)

floatButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles (styles)(floatButton)
