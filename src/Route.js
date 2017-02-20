import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import IndexList from './component/IndexList/IndexList';        /* 首页组件 */
import Topic from './component/Topic/Topic';                    /* 主题详情 */
import TopicCreate from './component/TopicCreate/TopicCreate';  /* 发布主题 */
import MyMessages from './component/MyMessage/';                /* 我的消息 */
import UserView from './component/UserView/UserView';           /* 我的个人中心 */
import SignIn from './component/SignIn';                        /* 登录 */
import SignOut from './component/SignOut';                      /* 退出 */

/**
 * 路由根目录组件，显示当前符合条件的组件
 * @change 上面的改成下面函数式组件的形式
 * 所有页面的通用部分写在这里
 */
const Roots = ({children})=> (
    <div>{ children }</div>
);


/**
 *  这里没有用函数式组件的写法，所以在index调用的时候写成
 *  import route from './Config/Route';
 *  调用方式： {route}
 *
 *  如果这里写成函数式组件的写法，那么index中的调用就要写成
 *  import Route from './Config/Route';
 *  调用方式： <Route />
 */
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexList} />
            <Route path="topic/create" component={TopicCreate} />
            <Route path="topic/:id" component={Topic} />
            <Route path="my/messages" component={MyMessages} />
            <Route path="user/:loginname" component={UserView} />
            <Route path="signin" component={SignIn} />
            <Route path="signout" component={SignOut} />
        </Route>
    </Router>
);

export default RouteConfig;