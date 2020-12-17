import React from "react";
import unplash from "../Api/unplash";
import ImageList from "./ImageList";

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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
