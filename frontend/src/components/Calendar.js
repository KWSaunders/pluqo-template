import React, { useState } from "react";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "10px",
    padding: "5px",
    background: "#e5e5e5",
    borderRadius: "5px",
  },
  calendar: {
    border: "none",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
    "& .react-calendar__navigation__label, .react-calendar__navigation__arrow": {
      color: "#4f4f4f",
      fontWeight: "bold",
      outline: "none",
    },
    "& .react-calendar__navigation__label": {
      fontSize: "24px",
      lineHeight: "28px",
    },
    "& .react-calendar__navigation__arrow": {
      fontSize: "20px",
      lineHeight: "24px",
      cursor: "pointer",
    },
    "& .react-calendar__month-view__days__day--weekend": {
      color: "#f00",
    },
    "& .react-calendar__tile--active, .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus": {
      background: "#4f4f4f",
      color: "#fff",
      borderRadius: "5px",
      outline: "none",
    },
    "& .react-calendar__tile--now": {
      background: "#4f4f4f",
      color: "#fff",
      borderRadius: "5px",
      outline: "none",
    },
    "& .react-calendar__tile": {
        width: "100%",
        minHeight: "80px",
      },
  },
});

const data = [
  {
    id: 1,
    title: "Case 1",
    date: new Date("2023-03-15"),
  },
  {
    id: 2,
    title: "Case 2",
    date: new Date("2023-03-17"),
  },
  {
    id: 3,
    title: "Case 3",
    date: new Date("2023-03-17"),
  },
];

const CalendarWithCases = () => {
  const [date, setDate] = useState(new Date());
  const classes = useStyles();

  const filteredData = data.filter(
    (item) => item.date.toDateString() === date.toDateString()
  );

  const tileContent = ({ date, view }) => {
    const filteredData = data.filter(
      (item) => item.date.toDateString() === date.toDateString()
    );

    if (view === "month" && filteredData.length > 0) {
      return (
        <div>
          {filteredData.map((item) => (
            <div key={item.id} className={classes.root}>
              <Typography variant="body2">{item.title}</Typography>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={classes.calendar}>
      <Calendar value={date} onChange={setDate} tileContent={tileContent} />
    </div>
  );
};

export default CalendarWithCases;
