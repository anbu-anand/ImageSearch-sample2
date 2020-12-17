import React from "react";
class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="field">Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
