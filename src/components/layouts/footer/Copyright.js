import React from 'react'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
        {'wayacode '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
