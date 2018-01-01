import React from 'react';
import { connect } from 'dva';
import SimpleChartComponent from '../chart/Echarts/SimpleChartComponent';
import KlineChart from '../chart/Echarts/KlineChart';
import CandlestickReact from '../chart/Echarts/CandlestickReact';
const FirstTab =({count,dispatch}) => {
  const {msg} = count;
  return (
    <div>
      <div>hahgag</div>
      <button onClick={() =>{dispatch({type:'count/query'});}}>我不知道</button>
      <div>{msg}</div>
      <SimpleChartComponent />
      {/*<KlineChart></KlineChart>*/}
      {/*<CandlestickReact></CandlestickReact>*/}
    </div>
  );
}

export default connect(({ count }) => ({ count }))(FirstTab)
