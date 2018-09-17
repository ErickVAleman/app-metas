import Bar from './Bar'
import PropTypes from 'prop-types'
const MyLayout = ({ children, appTitle }) => (
    <div>
        <Bar title={ appTitle } />
        <div>
            { children }
        </div>
        <style global jsx>{`
            body{
                margin: 0px;
            }
        `}</style>
    </div>
)


MyLayout.propTypes = {
    children: PropTypes.any,
    appTitle: PropTypes.string.isRequired
}

export default MyLayout