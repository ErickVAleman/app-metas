import Bar from './Bar';
import Drawer from './Mydrawer';
import PropTypes from 'prop-types';
import { Dashboard, Feedback } from '@material-ui/icons'
import MyMenu from './MyMenu'
import { withStyles } from '@material-ui/core';

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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const MyLayout = ({classes ,children, appTitle, onClickButtonMenu, drawerState, drawerToggle }) => (
    <div>
        <Bar title={appTitle} onClickButtonMenu={onClickButtonMenu} />
        <Drawer mobileOpen={drawerState} handleDrawerToggle={drawerToggle} >
            <MyMenu text='Dashboard' itemIcon={<Dashboard />} />
            <MyMenu text='Feedback' itemIcon={<Feedback />} />
        </Drawer>
        <main className={classes.content} >
            <div className={classes.toolbar} />
           {children}
        </main>
        <style global jsx>{`
            body{
                margin: 0px;
            }
        `}</style>
    </div>
)


MyLayout.propTypes = {
    children: PropTypes.element,
    appTitle: PropTypes.string.isRequired,
    onClickButtonMenu: PropTypes.func.isRequired,
    drawerState: PropTypes.bool.isRequired,
    drawerToggle: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MyLayout)