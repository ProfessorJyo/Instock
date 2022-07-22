import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={WarehousePage} />
        <Route path='/warehouse'  component={WarehousePage}/>
        <Route path='/inventory' component={InventoryPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
