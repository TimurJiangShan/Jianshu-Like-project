import React, { PureComponent }from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style.js';
// 调用map方法 循环展示数据

class Header extends PureComponent {

    getListArea(){
        const {totalPage, mouseIn, focused, list, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        // 获取AJAX数据后再进行循环展示
        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Hot
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}}  className='iconfont spin'>&#xe851;</i>
                        Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFoucs, handleInputBlur, list, login, logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    {
                        login ? <NavItem className='right' onClick={logout}>Exit</NavItem> :
                        <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                    onFocus={() => handleInputFoucs(list)}
                                    onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                        <i className='iconfont'>&#xe61d;</i>
                        Writting
                        </Button>
                    </Link>
                    <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        focused: state.get('header').get('focused'),
        // 等价于 focused: state.getIn(['header', 'focused'])
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handleInputFoucs(list){
            // 避免无意义的发送AJAX请求， 路由就是根据URL不同，显示不同的内容。
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            // 旋转动画效果的实现
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if( originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

/*

*/