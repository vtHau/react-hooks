import React, { useRef, useState } from "react";

function PostFiltes(props) {
  const { onSubmit } = props;
  const [searchItem, setSearchItem] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchItem(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const searchValues = {
        searchItem: value,
      };
      onSubmit(searchValues);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchItem} onChange={handleSearchChange} />
    </form>
  );
}

export default PostFiltes;
