import { Switch, Route } from "react-router-dom";
import InventoryItemDetails from '../../Components/InventoryItemDetails/InventoryItemDetails'
import PageHeader from "../../Components/Header/Header";
import './InventoryPage.scss';

function InventoryPage()  {


    return (<>
        <PageHeader isActive='Inventory' />
        <div className="component-wrapper">
                <Switch>
                    <Route path='/inventory' exact component='' />
                    <Route path='/inventory/add'  component='' />
                    <Route path='/inventory/edit/:id' component={InventoryItemDetails} />
                    <Route path='/inventory/:id'  component='' />
                </Switch>
        </div>
    </>)
}

export default InventoryPage;