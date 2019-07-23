// import React from 'react';

// class SearchBar extends React.Component {
//   render() {
//     return <div>Search Bar</div>;
//   }
// }

// export default SearchBar;

import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div>
            <label>Search Videos></label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
