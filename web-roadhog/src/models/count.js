import request from '../utils/request';

export default {
  namespace: 'count',
  state:{
    record:0,
    current:0,
    msg:"haha",
  },

  reducers:{
    add(state){
      const newCurrent = state.current +1;
      return {...state,
        record:newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state){
      return {...state,current:state.current -1};
    },
    querySuccess(state,{payload}){
      return {...state,msg:JSON.stringify(payload)};
    }
  },

  effects:{
    *query({payload},{call,put}){
      const data = yield call(delay);
      yield put({type:'querySuccess',payload:data});
    },
  },



}

//helpers
function delay(){
  return request('http://localhost:8080/hello');
}
