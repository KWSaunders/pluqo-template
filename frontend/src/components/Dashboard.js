import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: 'auto',
    marginTop: theme.spacing(10),
    display: 'flex',
  },
  linkList: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingRight: theme.spacing(2),
  },
  linkItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List className={classes.linkList}>
        <ListItem button className={classes.linkItem}>
          <ListItemText primary="Link 1" />
        </ListItem>
        <ListItem button className={classes.linkItem}>
          <ListItemText primary="Link 2" />
        </ListItem>
        <ListItem button className={classes.linkItem}>
          <ListItemText primary="Link 3" />
        </ListItem>
        <ListItem button className={classes.linkItem}>
          <ListItemText primary="Link 4" />
        </ListItem>
      </List>
      <div className={classes.content}>
        <h1>Welcome to my Dashboard</h1>
        <p>Here's where I'll display some information and data for you to see.</p>
      </div>
    </Paper>
  );
}
