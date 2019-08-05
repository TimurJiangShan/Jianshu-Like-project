import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends PureComponent {
    render(){
        const { list, getMoreList, page } = this.props;
        return(
            <Fragment>
            {
                list.map((item, index) => {
                    return (// 通过问号传递的参数 要去location里面的search去取
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem key={item.get('id')}>
                                <img className='pic' src={item.get('imgUrl')} alt='img' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMore onClick={() => getMoreList(page)}>Load More</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);