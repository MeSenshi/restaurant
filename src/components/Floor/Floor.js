import React, { useContext, useEffect } from "react";
import Tables from "../Tables/Tables";
import GuestsQueue from "../Guests/GuestsQueue";
import Loader from "../Loader/Loader";
import { Context as FloorContext } from "../../context/floorContext";
import { occupiedTables } from "../../helpers/helpers";
import "./Floor.css";

const Floor = () => {
  const { state, getTables, getOrders } = useContext(FloorContext);

    useEffect(() => {
      setTimeout(() => {
        if (!state.tables) getTables();
        if (!state.orders) getOrders();
      }, 2000);
    }, []);

  if (!state.tables || !state.orders) return <Loader />;

  const { tables, orders } = state;

  const waitingGuests = orders.length - occupiedTables(tables, orders).length;

  return (
    <div className="floor">
      <h1 className="floor_header">Floor #1</h1>
      <Tables tables={occupiedTables(tables, orders)} />
      <GuestsQueue waitingGuests={waitingGuests} />
    </div>
  );
};

export default Floor;
