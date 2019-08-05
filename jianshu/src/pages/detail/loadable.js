import Loadable from 'react-loadable';
import React from 'react';
const LoadableComponent = Loadable({
    // 这里的import是异步加载的新语法
  loader: () => import('./'),
  loading() {
    return <div>Now Loading</div>
  }
});

export default () => <LoadableComponent />

// 使得detail组件变成了一个异步组件， 实现了异步加载的需求