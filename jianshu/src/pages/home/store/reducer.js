import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        'articleList' : state.get('articleList').concat(action.list),
        'articlePage' : action.nextPage
    })
}

export default (state = defaultState, action) => {
    
    // immutable 对象的set方法，会结合之前的 immutable对象的值
    // 和设置的值， 返回一个全新的对象 TOGGLE_SCROLL_TOP
    switch(action.type) {
        case constants.CHANGE_HOME_DATA :
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST :
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP :
            return state.merge({
                'showScroll': action.show
            });
        default:
            return state;
    }
}
/*

*/