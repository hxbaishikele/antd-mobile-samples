import React from 'react';
import { connect } from 'dva';
import SimpleChartComponent from '../chart/Echarts/SimpleChartComponent';
const FirstTab =({count,dispatch}) => {
  const {msg} = count;
  return (
    <div>
      <div>hahgag</div>
      <button onClick={() =>{dispatch({type:'count/query'});}}>我不知道</button>
      <div>{msg}</div>
      <SimpleChartComponent />
    </div>
  );
}

export default connect(({ count }) => ({ count }))(FirstTab)
