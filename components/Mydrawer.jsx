import { withStyles, Hidden, Drawer } from '@material-ui/core';
import PropsTypes from 'prop-types';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const MyDrawer = ({ children, classes, theme, handleDrawerToggle, mobileOpen}) => (
  <div className={classes.root}>
    <Hidden smDown implementation="css">
      <Drawer
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} >
          {children}
        </div>
      </Drawer>
    </Hidden>
    <Hidden mdUp>
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {children}
      </Drawer>
    </Hidden>
  </div>
)

MyDrawer.propTypes = {
  children: PropsTypes.any.isRequired,
  classes: PropsTypes.object.isRequired,
  theme: PropsTypes.object.isRequired,
  mobileOpen: PropsTypes.bool,
  handleDrawerToggle: PropsTypes.func.isRequired

}

export default withStyles(styles, { withTheme: true })(MyDrawer)