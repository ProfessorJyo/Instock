import "./Styles/App.scss";
import WarehouseList from "./Pages/WarehouseList/WarehouseList"
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={WarehouseList}/>
        <Route path='/warehouse' />
        <Route path='/warehouse/add' />
        <Route path='/warehouse/:id' />
        <Route path='/warehouse/:id/edit' />
        <Route path='/inventory' />
        <Route path='/inventory/add' />
        <Route path='/inventory/:id' />
        <Route path='/inventory/:id/edit' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
