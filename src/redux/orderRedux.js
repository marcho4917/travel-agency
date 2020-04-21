// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');
export const SET_SUBMITED = createActionName('SET_SUBMITED');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });
export const setSubmited = payload => ({payload, type: SET_SUBMITED});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case SET_SUBMITED:
      return {
        ...statePart,
        submit: action.payload,
      };
    default:
      return statePart;
  }
}
