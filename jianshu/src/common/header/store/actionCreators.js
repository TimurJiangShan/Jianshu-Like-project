import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


// 异步获取数据的逻辑 放在actionCreator里面来
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data), // 传递action之前， 也把data转化成immutable对象
    totalPage: Math.ceil(data.length / 10)
})

// 返回函数，就用 redux-thunk
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=> {
            console.log('error');
        });
        //console.log(123);
    }
}

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
}) 

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})
/* 


*/