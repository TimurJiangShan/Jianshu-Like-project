import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://miro.medium.com/max/1400/1*sAxHjaWvNc6C_mhmC6tGLw.jpeg" alt="540"></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>BackTop</BackTop> : null}
                
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}
// 让容器组件做逻辑处理
const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);