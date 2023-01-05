import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/ListTodoItem";

import Footer from "../components/Footer";

import { LIST_TO_DO_KEY, ITEM_PER_PAGE } from "../constants";

import { localStorageUlti } from "../functions/localStorage";
import usePagination from "../hooks/usePagination";

const All = ({ todos }) => {
  const [searchParams] = useSearchParams();

  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todos.filter((item) =>
      item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    ),

    ITEM_PER_PAGE
  );

  return (
    <>
      <ListTodoItem todoItems={currentData} />

      {maxPage > 1 && (
        <Footer
          currentPage={currentPage}
          jumpPage={jumpPage}
          maxPage={maxPage}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  todos: state.todos;
};

export default connect(mapStateToProps)(All);
