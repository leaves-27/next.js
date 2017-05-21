import { createConstants } from '../utils';

//action类型
export const actionTypesApp = createConstants(
  'POST_ANSWER',
  'CHANGE_STEP'
);

//action创建函数
export function submitAnswer(id){
  return {
    type : actionTypesApp.POST_ANSWER,
    answer : id
  }
}

export function changeStep(step){
  return {
    type : actionTypesApp.CHANGE_STEP,
    step : step
  }
}




