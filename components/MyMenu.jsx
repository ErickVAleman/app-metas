import {withStyles ,List, ListItem ,ListItemIcon, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    width:'100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper
  }
})
const MyMenu = ({itemIcon, text}) => (
    <List component='nav' >
      <ListItem button >
        <ListItemIcon>
          {itemIcon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </List>
)

MyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  itemIcon: PropTypes.element
}

export default withStyles(styles)(MyMenu)