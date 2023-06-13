"use client";
import { useEffect, useState } from "react";

const PromptCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout"></div>;
};
const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a user name"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
