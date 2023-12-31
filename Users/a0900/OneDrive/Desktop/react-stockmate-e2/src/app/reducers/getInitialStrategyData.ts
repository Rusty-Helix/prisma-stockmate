import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { strategiesRoute } from "../../utils/Constants";
import { strategyJSONString } from "../../utils/StrategyJSONString";

export const getInitialStrategyData = createAsyncThunk(
  "strategy/initialData",
  async () => {
    try {
      const { data } = await axios.get(strategiesRoute);

      const strategyJSONArray = strategyJSONString.split('},')
      const strategyArray = []
      for (let i = 0; i < strategyJSONArray.length-1; i++) {

        strategyJSONArray[i] = strategyJSONArray[i] + "}"
        // console.log(JSON.parse(strategyJSONArray[i]))
        strategyArray.push(JSON.parse(strategyJSONArray[i]))
      }
      strategyArray.push(JSON.parse(strategyJSONArray[strategyJSONArray.length-1]))
      // console.log(strategyArray)
      // console.log(data)
      // console.log(data.results)
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getAllStrategies = createAsyncThunk(
  "strategy/initialData",
  async () => {
    try {
      const strategyJSONArray = strategyJSONString.split('},')
      const strategyArray = []
      for (let i = 0; i < strategyJSONArray.length-1; i++) {

        strategyJSONArray[i] = strategyJSONArray[i] + "}"
        // console.log(JSON.parse(strategyJSONArray[i]))
        strategyArray.push(JSON.parse(strategyJSONArray[i]))
      }
      strategyArray.push(JSON.parse(strategyJSONArray[strategyJSONArray.length-1]))
      console.log(strategyArray)

      return strategyArray;
    } catch (err) {
      console.error(err);
    }
  }
);