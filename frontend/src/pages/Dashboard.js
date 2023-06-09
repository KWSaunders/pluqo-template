import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Graph from "../components/Graph";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import CasesTable from "../components/CasesTable";
import CalendarWithCases from "../components/Calendar";

const useStyles = makeStyles((theme) => ({
  paper: {

    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    margin: "auto",
    height  : "100vh",
    display: "flex",
  },
  linkList: {
    borderRight: `2px solid ${theme.palette.divider}`,
    paddingRight: theme.spacing(2),
  },
  linkItem: {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleListItemClick = (label) => {
    // console.log(label);
    setActiveComponent(label);
  };

  const components = {
    Home: <Header />,
    Graph: (
      <>
        <Header />
        <Graph />
      </>
    ),

    Calendar: <><Header /></>,

    Calendar:  <><Header /> <CalendarWithCases /> </>,
    Cases: <> <Header /> <CasesTable /></>,
 
  };

  return (
    <Paper className={classes.paper}>
      <List className={classes.linkList}>
        {Object.keys(components).map((label) => (
          <ListItem
            button
            className={classes.linkItem}
            key={label}
            onClick={() => handleListItemClick(label)}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <div className={classes.content}>{components[activeComponent]}</div>
    </Paper>
  );
};

export default Dashboard;
