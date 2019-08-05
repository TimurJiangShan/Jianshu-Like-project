import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render(){
        //console.log(this.props.match.location.search);
        const { title, content } = this.props;
        return(
            <DetailWrapper>
            <Header>{title}</Header>
            <Content 
                dangerouslySetInnerHTML={{__html: content}}
            />
        </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));  // 让Detail组件 有能力获取到Router里面的所有内容