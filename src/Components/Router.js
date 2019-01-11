import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

//한번에 하나의 라우터만 렌더링 하기 위해서 Switch 사용
export default () => (
    <Router>
        <>
            <Header />
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);