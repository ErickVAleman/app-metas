import { 
  withStyles, List, ListItem, 
  ListItemIcon, ListItemText 
} from '@material-ui/core'
import PropTypes from 'prop-types'
import Link from 'next/link'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper
  }
})
const MyMenu = ({ itemIcon, text, Linkto }) => (
  <List component='nav' >
  <Link prefetch href={Linkto} >
    <ListItem button >
      <ListItemIcon>
        {itemIcon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
  </List>
)

MyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  itemIcon: PropTypes.element,
  Linkto: PropTypes.string.isRequired
}

export default withStyles(styles)(MyMenu)