import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // State to hold the search query
  const [showSearch, setShowSearch] = useState(false); // State to show/hide the search input

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    // You can integrate your API call here (with an API key)
    console.log("Searching for movie:", searchTerm);
    // Example of API request (replace with actual API call)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the API response
      });
  };

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/th.jpeg" alt="logo" />
            </div>

            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href="/">HOME</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>

          <div className="account flexSB">
            <i className="fa fa-search" onClick={() => setShowSearch(!showSearch)}></i>
            {showSearch && (
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  placeholder="Search for a movie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
