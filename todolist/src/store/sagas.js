import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList(){
    try {
        const res = yield axios.get('./list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch(e) {
        console.log('JSON request failed');
    }
    
    
    /*axios.get('./list.json').then((res)=>{
        const data = res.data;
        const action = initListAction(data);
        //store.dispatch(action);
        console.log('AS');
    });*/

}


function* mySaga() {

    yield takeEvery(GET_INIT_LIST, getInitList);

}
  
export default mySaga;