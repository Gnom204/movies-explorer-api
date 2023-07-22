const regexForImageUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const secretKey = 'my-mega-secret-key';

const HTTP_STATUS_BAD_REQUEST = {
  status: 400,
  message: 'переданы невалидные данные',
};

const HTTP_STATUS_NOT_FOUND = {
  status: 404,
  message: 'Объект не найден',
};

const HTTP_STATUS_SERVER_ERROR = {
  status: 500,
  message: 'Произошла ошибка',
};

const HTTP_STATUS_GOOD_REQUEST = {
  status: 200,
  message: 'Успешный запрос',
};

const HTTP_STATUS_CREATE_REQUEST = {
  status: 201,
  message: 'Объект создан',
};

const HTTP_STATUS_UNAUTHORIZED_REQUEST = {
  status: 401,
  message: 'Пользователь не авторизован',
};

const HTTP_STATUS_FORBIDDEN_REQUEST = {
  status: 403,
  message: 'У вас нет прав на это действие',
};

const HTTP_STATUS_CONFLICT_REQUEST = {
  status: 409,
  message: 'Пользователь уже существует',
};

module.exports = {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_SERVER_ERROR,
  HTTP_STATUS_GOOD_REQUEST,
  HTTP_STATUS_CREATE_REQUEST,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_UNAUTHORIZED_REQUEST,
  HTTP_STATUS_FORBIDDEN_REQUEST,
  HTTP_STATUS_CONFLICT_REQUEST,
  regexForImageUrl,
  secretKey,
};
