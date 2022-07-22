import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./Components/Header/Header";


function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={WarehousePage} />
        <Route path='/warehouse'  component={WarehousePage}/>
        <Route path='/inventory' component={InventoryPage}/>
      </Switch>
      <Footer defaultPrevent={defaultPrevent} />
    </BrowserRouter>
  );
}

export default App;
