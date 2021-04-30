import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './Components/Loading'

const Home = lazy(() => import('./Views/Home/index.js'))
const InProcess = lazy(() => import('./Views/Inprocess/index.js'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={InProcess} />
          <Route exact path="/:city/:name" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}
export default Routes