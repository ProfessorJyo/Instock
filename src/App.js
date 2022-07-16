import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  const defaultPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <BrowserRouter>
      {/* <Header defaultPrevent={defaultPrevent} /> */}
      <Switch>
        <Route path="/warehouses" />
        <Route path="/warehouse:id" />
        <Route path="/inventories" />
        <Route path="/inventory:id" />

        {/* // <Redirect exact path="/" component={MainPage} />  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
