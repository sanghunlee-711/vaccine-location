import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index'

const RootRouter: React.FC = () =>(
    <BrowserRouter>
        <Switch>
            <Route path = "/" exact component ={Home} />
        </Switch>
    </BrowserRouter>
)
export default RootRouter;