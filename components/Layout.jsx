import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, Grid } from '@material-ui/core';
import { Menu, Dashboard, Feedback, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons'
import MyMennu from './MyMenu'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1.5,
    minHeight: '96vh',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  },
  'content-left': {
    marginLeft: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 9,
    },
  },
});

const MyLayout = ({ children, classes, theme, handleDrawerOpen, handleDrawerClose, stateOpen }) => (
  <div className={classes.root}>
    <AppBar position='fixed'
      className={classNames(classes.appBar,  stateOpen && classes.appBarShift)}
    >
      <Toolbar disableGutters={!stateOpen} >
        <IconButton color='inherit' aria-label='Open' onClick={handleDrawerOpen}
           className={classNames(classes.menuButton, stateOpen && classes.hide)}
        >
          <Menu />
        </IconButton>
        <Typography variant='title' color='inherit' noWrap >
          Meta del Dia 📈
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant='permanent' open={stateOpen}
      classes={{
        paper: classNames(classes.drawerPaper, !stateOpen && classes.drawerPaperClose),
      }}
      containerStyle={{height: 'calc(100% - 64px)'}}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose} >
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <MyMennu Linkto='/' text='Dashboard' itemIcon={<Dashboard style={{color:'rgb(14, 119, 197)'}} />} />
      <MyMennu Linkto='/feedback' text='Feedback' itemIcon={<Feedback style={{color:'rgb(14, 119, 197)'}} />} />
    </Drawer>
    <main className={classNames(classes.content, {
              [classes[`content-left`]]: !stateOpen,
              [classes.contentShift]: stateOpen,
              [classes[`contentShift-left`]]: stateOpen,
            })} >
      <div className={classes.toolbar} />
        {children}
    </main>
    <style global jsx>{`
      html, body {
        margin: 0px;
        height: 100%;
      }
    `}</style>
  </div>
)

MyLayout.propType = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  stateOpen: PropTypes.bool,

}

export default withStyles(styles, { withTheme: true })(MyLayout)
