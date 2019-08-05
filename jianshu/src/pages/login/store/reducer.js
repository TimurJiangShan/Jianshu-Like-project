import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false
});



export default (state = defaultState, action) => {
    
    // immutable 对象的set方法，会结合之前的 immutable对象的值
    // 和设置的值， 返回一个全新的对象 TOGGLE_SCROLL_TOP
    switch(action.type) {
        case constants.CHANGE_LOGIN: 
            return state.set('login', action.value)
        case constants.CHANGE_LOGOUT: 
            return state.set('login', action.value)
        default:
            return state;
    }
}
/*

*/