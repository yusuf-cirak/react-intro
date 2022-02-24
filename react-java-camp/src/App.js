import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import 'semantic-ui-css/semantic.min.css';




function App() {
  return (
    <div className="App">
      <Navi />

      <Container className="main">
        {/*app.css'deki mainden geliyor */}
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
