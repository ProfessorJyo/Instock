import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import PageHeader from "./Components/Header/Header";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <BrowserRouter>
      <AddWarehouse />
      <Switch>
        <Route path='/warehouse' />
        <Route path='/warehouse/add' />
        <Route path='/warehouse/:id' />
        <Route path='/warehouse/:id/edit' />
        <Route path='/inventory' />
        <Route path='/inventory/add' />
        <Route path='/inventory/:id' />
        <Route path='/inventory/:id/edit' />
      </Switch>

      {/* <Footer defaultPrevent={defaultPrevent} /> */}
    </BrowserRouter>
  );
}

export default App;
