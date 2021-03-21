import React, { useEffect, useState } from "react";
import queryString from "query-string";
import TotoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilters from "./components/PostFilters";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [person, setPerson] = useState([
    { id: 0, name: "Nguyen Van A" },
    { id: 1, name: "Nguyen Van B" },
    { id: 2, name: "Nguyen Van C" },
    { id: 3, name: "Nguyen Van D" },
    { id: 4, name: "Nguyen Van E" },
  ]);

  const [showClock, setShowClock] = useState(true);
  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requetsURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requetsURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, [filters]);

  const deleteItem = (id) => {
    const index = person.findIndex((x) => x.id === id);
    if (index < 0) return;
    const newPerson = [...person];
    newPerson.splice(index, 1);
    setPerson(newPerson);
  };

  const addItem = (item) => {
    const newPerson = [...person, item];
    setPerson(newPerson);
  };

  function handleFiltersChange(searchValues) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: searchValues.searchItem,
    });
  }

  function toggleClock() {
    setShowClock(!showClock);
  }

  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div className="container">
        <h2 className="text-center mt-4 mb-5">Hello To React</h2>
        {/* <TotoList person={person} deleteItem={deleteItem} />
        <FormTodo addItem={addItem} /> */}
        {/* <PostList postList={postList} />
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
        <PostFilters onSubmit={handleFiltersChange} /> */}
        {/* {showClock && <Clock />}

        <button
          onClick={toggleClock}
          style={{ margin: "0 auto", display: "block" }}
        >
          {showClock ? "Hide Clock" : "Show Clock"}
        </button> */}
        <MagicBox />
      </div>
    </div>
  );
}

export default App;
