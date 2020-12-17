import React from "react";
import unplash from "../Api/unplash";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onFormSubmit = async (term) => {
    const response = await unplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchFormSubmit={this.onFormSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
