// Получить пользователей
export const getUsers = (state) => {
  return state.usersPage.users;
};

// Получить размер страницы
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

// Получить кол-во пользовтелей
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

// Получить номер текущей страницы
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

// Получить состояние загрузки
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

// Получить состояние прогресса подписки на пользовтеля
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
