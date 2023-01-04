import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/ListTodoItem";

import Footer from "../components/Footer";

import { LIST_TO_DO_KEY, ITEM_PER_PAGE } from "../constants";

import { localStorageUlti } from "../functions/localStorage";
import usePagination from "../hooks/usePagination";
const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

const All = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [searchParams] = useSearchParams();

  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoItems,

    ITEM_PER_PAGE
  );

  useEffect(() => {
    const listTodoItem = get().filter((item) =>
      item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    );

    setTodoItems(listTodoItem);
  }, [searchParams]);

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

export default All;
