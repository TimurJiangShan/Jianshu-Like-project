import React, { PureComponent } from 'react';
import { WritterWrapper, WritterItem } from '../style';
import { connect } from 'react-redux';

class Writter extends PureComponent {
    render(){
        return (
            //<WritterWrapper>
            //{
            //    this.props.list.map((item) => {
            //        return  <WritterItem imageUrl={item.get('imageUrl')} key={item.get('id')} />
            //    })
            //}
            //</WritterWrapper>
            <div></div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','writterList'])
});



export default connect(mapStateToProps, null)(Writter);