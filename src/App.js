import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import restProvider from 'ra-data-simple-rest'
import LoadingBar from "react-top-loading-bar";

const dataProvider=restProvider('https://localhost:3000')

const App =()=> {
  const pageSize = 5;
  const apikey = "b1295cc32a904cbca1ed18f10f6fe100";
  const[progress,setProgress]=useState(0);

    return (
      <div>
        <Router dataProvider={dataProvider}>
          <Navbar></Navbar>
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
