import { Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/Header/Header";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";
import './WarehousePage.scss'

function WarehousePage()  {


    return (<>
        <PageHeader isActive='Warehouse' />
        <div className="component-wrapper">
                <Switch>
                    <Route path='/' exact component={WarehouseList} />
                    <Route path='/warehouse' exact component={WarehouseList} />
                    <Route path='/warehouse/add'  component='' />
                    <Route path='/warehouse/:id'  component='' />
                    <Route path='/warehouse/edit/:id'  component='' />
                </Switch>
        </div>
    </>)
}

export default WarehousePage;