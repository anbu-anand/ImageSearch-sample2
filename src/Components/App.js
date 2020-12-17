import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onFormSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296"
        }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
