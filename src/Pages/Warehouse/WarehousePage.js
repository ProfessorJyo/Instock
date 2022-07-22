import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/Header/Header";

function WarehousePage()  {


    return (<>
        <PageHeader isActive='Warehouse' />
        <div className="component-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Footer} />
                    <Route path='/warehouse/add'  component='' />
                    <Route path='/warehouse/:id'  component='' />
                    <Route path='/warehouse/edit/:id'  component='' />
                </Switch>
            </BrowserRouter>
        </div>
    </>)
}

export default WarehousePage;