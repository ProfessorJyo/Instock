import { Switch, Route } from "react-router-dom";
import EditWarehouse from "../../Components/EditWarehouse/EditWarehouse.jsx";
import PageHeader from "../../Components/Header/Header";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";
import './WarehousePage.scss'

function WarehousePage()  {


    return (
    <>
        <PageHeader isActive='Warehouse' />
        <div className="component-wrapper">
                <Switch>
                    <Route path='/' exact component={WarehouseList} />
                    <Route path='/warehouse' exact component={WarehouseList} />
                    <Route path='/warehouse/add'  component='' />
                    <Route path='/warehouse/edit/:id' component={EditWarehouse} />
                    <Route path='/warehouse/:id'  component='' />
                </Switch>
        </div>
    </>)
}

export default WarehousePage;