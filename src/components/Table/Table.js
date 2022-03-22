import React, { useState, useContext, useEffect } from "react";
import { Context as FormContext } from "../../context/floorContext";
import {
  Star,
  Circle,
  SquareDonut,
  Diamond,
  Polygon,
} from "react-awesome-shapes";
import Tooltip from "@mui/material/Tooltip";
import "./Table.css";

const Table = ({ table }) => {
  const { endTable } = useContext(FormContext);
  const [color, setColor] = useState(
    "linear-gradient(135deg, #93c5fd, #3b82f6)"
  );

  const [startTime, setStartTime] = useState();

  useEffect(() => {
    if (!startTime) setStartTime(Date.now());

    if (startTime){
      setTimeout(() => {
        setColor("linear-gradient(135deg, #fca5a5, #ef4444)");
      }, 60000);

      setTimeout(() => {
        endTable({
          Mobile: table.Mobile,
          Diners: table.Diners,
          Table: table.Table,
          start_time: startTime,
          end_time: Date.now(),
        });
      }, 90000);
    }

    return () => clearTimeout()
  }, [startTime]);


  const renderTable = () => {
    switch (table.shape) {
      case "donut":
        return <Star size="150px" zIndex={2} color={color} />;
      case "circle":
        return (
          <Circle
            color={color}
            size={["150px", "150px", "180px", "180px"]}
            zIndex={2}
          />
        );
      case "squareDonut":
        return <SquareDonut size="150px" zIndex={2} color={color} />;
      case "diamond":
        return <Diamond color={color} size="100px" zIndex={2} />;
      case "polygon":
        return (
          <Polygon
            height="180px"
            width="175px"
            zIndex={2}
            color={color}
            sides={8}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="table_container">
      <Tooltip
        classes={{ tooltip: "tooltip" }}
        title={
          <p>
            mobile: {table.Mobile}
            <br />
            diner: {table.Diners}
            <br />
            start_time: {startTime}
          </p>
        }
        placement="top"
      >
        <div className="table">
          {renderTable()}
        </div>
      </Tooltip>
    </div>
  );
};

export default Table;
