import React from 'react';
import ReactDOM from 'react-dom';
import './style.js'; // 引入的这个样式 不仅在本文件有效， 在其他文件里面依然有效 
import App from './App';
import './statics/iconfont/iconfont.js';

ReactDOM.render(<App />, document.getElementById('root'));
