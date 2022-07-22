import { Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/Header/Header";
import AddWarehouse from "../../Components/AddWarehouse/AddWarehouse";

function WarehousePage() {
  return (
    <>
      <PageHeader isActive='Warehouse' />
      <div className='component-wrapper'>
        <Switch>
          <Route path='/' exact component={Footer} />
          <Route path='/warehouse' exact component={Footer} />
          <Route path='/warehouse/add' component={AddWarehouse} />
          <Route path='/warehouse/:id' component='' />
          <Route path='/warehouse/edit/:id' component='' />
        </Switch>
      </div>
    </>
  );
}

export default WarehousePage;
