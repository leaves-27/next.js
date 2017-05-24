import { createConstants } from '../utils';

//action类型
export const actionTypesApp = createConstants(
  'POST_ANSWER',
  'SELECT_ANSWER'
);

//action创建函数
export function submitAnswer(id){
  return {
    type : actionTypesApp.POST_ANSWER,
    answer : id
  }
}

export function selectAnswer(id){
  return {
    type : actionTypesApp.SELECT_ANSWER,
    id : id
  }
}




