import React, { PureComponent, Fragment } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
    render(){
        //console.log(this.props.match.location.search);
        const { loginStatus } = this.props;
        if(!loginStatus) {
            return(
                <Fragment>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='Account' ref={(input) => {this.account = input}} />
                            <Input placeholder='Password' type='password' ref={(input) => {this.password = input}} />
                            <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
                        </LoginBox>
                    </LoginWrapper> 
                </Fragment>           
            )
        } else {
            return <Redirect to='/' />
        }
        
    }
    
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);