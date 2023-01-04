import { useState, useEffect } from "react";
import { localStorageUlti } from "../functions/localStorage";
import TodoItem from "../components/TodoItem";
import DetailTaskForm from "../shared/DetailTaskForm";

import AddNewForm from "../shared/form";

import { MODE, STATUS } from "../constants";

////////////////

//////////////////////
const { get, set } = localStorageUlti("todoItems", []);
const POSITION_KEYWORD = 9;
const Body = ({ mode, handleChangeRenderMode }) => {
  const [indexCurrentTask, setIndexCurrentTask] = useState(null);

  const [currentTask, setCurrentTask] = useState({
    title: "",

    creator: "",

    description: "",

    status: STATUS.NEW,
  });
  const [filterText, setFilterText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const handleShowDetailTask = (item, index) => {
    setCurrentTask(item);

    setIndexCurrentTask(index);

    handleChangeRenderMode(MODE.DETAIL_TASK);
  };
  useEffect(() => {
    setTodoItems(get());
  }, []);
  useEffect(() => {
    const keyword = window.location.search.slice(POSITION_KEYWORD);

    setFilterText(keyword);
  }, []);
  const renderTodoItem = () => {
    return todoItems

      .filter((item) => item.title.includes(filterText))

      .map((item, index) => (
        <TodoItem
          key={`${item.title}_${index}`}
          title={item.title}
          creator={item.creator}
          status={item.status}
          description={item.description}
          handleClick={() => handleShowDetailTask(item, index)}
        />
      ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,

      status: STATUS.NEW,
    };

    set([data, ...get()]);

    alert.success(
      getMessageAddNew("Task is created successfully!"),

      ALERT.DEFAULT_TIME
    );

    navigate(ROUTE.All);
  };

  const handleChangeTask = (e, isDelete) => {
    e.preventDefault();

    const todoItemsLocalStorage = get();

    if (!isDelete) {
      todoItemsLocalStorage.splice(idTask, 1, form);

      alert.success(
        getMessageEditTask(
          `Task have id: ${idTask} which is updated successfully!`
        ),

        ALERT.DEFAULT_TIME
      );
    } else {
      todoItemsLocalStorage.splice(idTask, 1);

      alert.success(
        getMessageDeleteTask(`Task have id: ${idTask} which is deleted!`),

        ALERT.DEFAULT_TIME
      );
    }

    set([...todoItemsLocalStorage]);

    navigate(ROUTE.All);
  };
  //////////////////////////////////////
  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItem();

      case MODE.ADD_NEW:
        return <AddNewForm handleSubmit={handleSubmit} />;

      case MODE.DETAIL_TASK:
        return (
          <DetailTaskForm
            currentTask={currentTask}
            handleChangeTask={handleChangeTask}
          />
        );

      default:
        return renderTodoItem();
    }
  };

  return <div className="containerBody">{chooseMode()}</div>;
};

export default Body;
