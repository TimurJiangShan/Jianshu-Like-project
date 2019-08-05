import React, { Component } from 'react';
import Header from './common/header/index.js';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import { GlobalStyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/detail/loadable.js';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyle />
          <GlobalStyleFont />

          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
            </React.Fragment>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
