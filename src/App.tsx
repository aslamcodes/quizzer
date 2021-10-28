import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Topbar } from "./components/common";
import { Home, Quiz } from "./components/pages";

function App() {
  return (
    <div className="">
      <Topbar />
      <div className="mt-20">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz/:category/:amount">
              <Quiz />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
