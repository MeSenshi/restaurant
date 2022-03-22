import createDataContext from "./createDataContext";
import restaurantApi from "../api/restaurantApi";

const floorReducer = (state, action) => {
  switch (action.type) {
    case "get_tables":
      return { ...state, tables: action.payload };
    case "get_orders":
      return { ...state, orders: action.payload };
    case "end_table":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const getTables = (dispatch) => async () => {
  try {
    const res = await restaurantApi.get("/tables");
    dispatch({ type: "get_tables", payload: res.data });
  } catch (e) {
    console.log(e.message);
  }
};

const getOrders = (dispatch) => async () => {
  try {
    const res = await restaurantApi.get("/orders");
    dispatch({ type: "get_orders", payload: res.data });
  } catch (e) {
    console.log(e.message);
  }
};

const endTable = (dispatch) => async (data) => {
  try {
    const res = await restaurantApi.post("/completed_orders", data);
    dispatch({ type: "end_table", payload: res.data });
  } catch (e) {
    console.log(e.message);
  }
};

export const { Provider, Context } = createDataContext(
  floorReducer,
  { getTables, getOrders, endTable },
  { tables: null, orders: null, completed_orders: null }
);


