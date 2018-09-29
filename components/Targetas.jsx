import { Card, CardHeader, CardContent, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";

const Targeta = ({ children }) => (
  <div>
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={altAvatar}
            src={srcAvatar}
            className={classes.avatar}
          />
        }
        title={titleCard}
        subheader={subCard}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </div>
)

Targeta.propTypes = {
  children: PropTypes.element,    
  titleCard: PropTypes.string.isRequired,
  subCard: PropTypes.string.isRequired,
  srcAvatar: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired
}

export default Targeta
