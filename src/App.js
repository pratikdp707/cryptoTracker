import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";

const useStyles = makeStyles(() => ({
  App:{
    backgroundColor: "#111111",
    color: "#EEEEEE",
    minHeight: "100vh"
  }
}))


function App() {
  
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage/>} exact/>
            <Route path="/coins/:id" element={<Coinpage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
