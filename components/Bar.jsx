import { AppBar, Toolbar, Typography, withStyles, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import PropTypes from 'prop-types'

const styles = {
    root: {
        flexGrow: 1,
    }
};

const Header = ({ classes, title, onClickButtonMenu }) => (
    <div className={classes.root}>
        <AppBar position='static'>
            <Toolbar >
                <IconButton color='inherit' aria-label='Menu' onClick={onClickButtonMenu} >
                    <Menu />
                </IconButton>
                <Typography variant='title' color='inherit' aria-label='Menu' >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onClickButtonMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)