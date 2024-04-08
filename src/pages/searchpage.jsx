import React, { useState } from "react";
import SearchHeader from "../components/search_header";
import { Card } from "primereact/card";
import "./searchpage.scss";
const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  const cardHeader = (imageUrl) => {
    return (
      <img src={imageUrl} alt="Card Header" className="h-40 object-cover" />
    );
  };

  return (
    <>
      <SearchHeader searchResultState={[searchResult, setSearchResult]} />
      <div className="container">
        <div className="search-result-info">
          <span>Total Result: {searchResult.length}</span>
          <div className="divider"></div>
          <span>Total Result: {searchResult.length}</span>
        </div>
        <div className="flex gap-5">
          {searchResult.map((item) => (
            <Card
              header={cardHeader(item.imageUrl)}
              key={item.id}
              title={item.title}
              className="w-80"
            >
              <p className="m-0">{item.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
