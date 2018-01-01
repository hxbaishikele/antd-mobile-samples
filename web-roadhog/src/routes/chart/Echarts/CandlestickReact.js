import React from 'react';
import echarts from 'echarts/lib/echarts'; //必须
import 'echarts/lib/chart/candlestick'; //引入雷达图
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/markLine';

export default class CandlestickReact extends React.Component{
  constructor(props){
    super(props);
    this.initPie = this.initPie.bind(this);
  }
  initPie(){
    const{option={}} = this.props; //外部传入的data数据
    let myChart = echarts.init(document.getElementById('main'));//初始化echarts
    myChart.setOption(option);
    //设置options
    window.onresize = function () {
      myChart.resize();
    };
  }
  componentDidMount(){
    this.initPie();
  }
  componentDidUpdate(){
    this.initPie();
  }

  render(){
    return (
      <div id="main" style={{ width: 800, height:800}}></div>
    );
  }

}
