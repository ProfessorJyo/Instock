import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./Components/Header/Header";


function App() {
  const defaultPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <BrowserRouter>
      <PageHeader defaultPrevent={defaultPrevent} />
      <Switch>
        {/* <Route exact path="/" component={MainPage} /> */}
      </Switch>
      <Footer defaultPrevent={defaultPrevent} />
    </BrowserRouter>
  );
}

export default App;
