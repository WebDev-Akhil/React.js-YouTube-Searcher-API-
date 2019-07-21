// import React from 'react';

// class SearchBar extends React.Component {
//   render() {
//     return <div>Search Bar</div>;
//   }
// }

// export default SearchBar;


import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (<div className="ui segment">

      <form className="ui form">
        <div>
          <label>Search Videos></label>
          <input type="text" />

        </div>
      </form>


    </div >);
  }
}

export default SearchBar;
