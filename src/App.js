import "./Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  const defaultPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <BrowserRouter>
      <Header defaultPrevent={defaultPrevent} />
      <Switch>
        {/* <Route exact path="/" component={MainPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
