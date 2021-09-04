import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ filter, handleChange, searchTerm }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm.length > 0) {
      dispatch(filter(searchTerm.toLowerCase()));
    }
  }, [searchTerm, dispatch, filter]);

  return (
    <div>
      <Form className="search m-0 d-flex">
        <FormControl
          type="search"
          className="mr-2"
          aria-label="Search"
          value={searchTerm.toLowerCase()}
          onChange={handleChange}
        />
        <button className="">
          <i className="fas fa-search"></i>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;
