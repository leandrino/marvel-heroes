import React, { Component } from "react";
import "./App.css";
import Root from "./Root";
import SearchAppBar from "./commons/SearchAppBar";
import LinearProgressCustom from "./commons/LinearProgressCustom";
import DataTable from "./commons/DataTable";
import FormHeroEdit from "./commons/FormHeroEdit";

class App extends Component {
  render() {
    return (
      <Root>
        <div className="App">
          <LinearProgressCustom />
          <header>
            <SearchAppBar />
          </header>
          <main>
            <DataTable />
          </main>
          <footer>
            <FormHeroEdit />
          </footer>
        </div>
      </Root>
    );
  }
}

export default App;
