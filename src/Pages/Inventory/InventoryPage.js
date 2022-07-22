import { Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/Header/Header";

function InventoryPage()  {


    return (<>
        <PageHeader isActive='Inventory' />
        <div className="component-wrapper">
                <Switch>
                    <Route path='/inventory' exact component={Footer} />
                    <Route path='/inventory/add'  component='' />
                    <Route path='/inventory/:id'  component='' />
                    <Route path='/inventory/edit/:id'  component='' />
                </Switch>
        </div>
    </>)
}

export default InventoryPage;