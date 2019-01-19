import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "../Routes/Detail";

//한번에 하나의 라우터만 렌더링 하기 위해서 Switch 사용
//원래 BrowserRouter를 router로 사용했으나, netlify에서 refresh시 페이지 경로를 잃어버리는 현상때문에 HashRouter로 변경하였음
export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" exact component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);