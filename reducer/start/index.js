import { createReducer } from 'redux-convenient-utils';

import { actionTypesApp } from '../../actions';
// import { REQUEST_POSTS ,RECEIVE_POSTS } from '../../actions/network';

const initState = {
  step : 1,
  answer : 0
};

export default createReducer(initState,{
  [actionTypesApp.POST_ANSWER](state,action){

    return Object.assign({},state,{
      "answer" : action.currentAnswer
    });
  }
});