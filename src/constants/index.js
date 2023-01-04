export const STATUS = {
  NEW: "New",

  DOING: "Doing",

  DONE: "Done",
};

export const ROUTE = {
  All: "/",

  NEW: "/new",

  DOING: "/doing",

  DONE: "/done",

  ADD_NEW: "/add-new",

  DETAIL: "/detail",

  DETAIL_TASK: "/detail/:idTask",

  NOT_FOUND: "*",
};

export const SIDEBAR_ITEMS = [
  {
    url: ROUTE.All,

    title: "All Task",
  },

  {
    url: ROUTE.NEW,

    title: "New Task",
  },

  {
    url: ROUTE.DOING,

    title: "Doing Task",
  },

  {
    url: ROUTE.DONE,

    title: "Done Task",
  },
];
export const ALERT = {
  NONE: 0,

  SUCCESS: 1,

  ERROR: 2,

  MINIMUM_TIME_MS: 1000,

  MAXIMUM_TIME_MS: 10000,

  DEFAULT_TIME: 3,
};

export const FEATURES = {
  ADD_NEW: "addNew",

  EDIT_TASK: "editTask",

  DELETE_TASK: "deleteTask",
};

export const ITEM_PER_PAGE = 4;

// Temporary, it will be 4 so that pagination can be

// easily tested (not because I'm lazy to create a new task)

export const LIST_TO_DO_KEY = "l_t_d_k";
