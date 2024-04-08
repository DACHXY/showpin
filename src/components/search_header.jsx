import React, { useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import "./search_header.scss";

const SearchHeader = ({ searchResultState }) => {
  const [searchResult, setSearchResult] = searchResultState;
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Here should connect to API to get search result
    var searchResultList = [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1712460842725-f1c9b3ad5a1e",
        title: "Best Title",
        content: "Here is some content.",
      },
      {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1704318847747-1b3fc0e645ba",
        title: "Worst Title",
        content: "BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH",
      },
    ];
    setSearchResult(searchResultList);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here should connect to API to get search result
    var searchResultList = [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1712460842725-f1c9b3ad5a1e",
        title: "Best Title",
        content: "Here is some content.",
      },
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1704318847747-1b3fc0e645ba",
        title: "Worst Title",
        content: "BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH BRUH",
      },
    ];
    setSearchResult(searchResultList);
  };

  return (
    <div className="header-search flex flex-row justify-around mb-10 mt-5">
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <InputText v-model="value1" placeholder="Search"></InputText>
            <button onClick={handleSubmit}>
              <span
                className="pi pi-search"
                style={{ fontSize: "1.5rem" }}
              ></span>
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default SearchHeader;
