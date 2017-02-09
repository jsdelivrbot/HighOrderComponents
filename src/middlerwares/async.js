export default function ({ dispatch }) {
  return (next) => (action) => {
    // if the action does not have a paylor or is not a promise
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

   // wait for promise resolve
    action.payload.then((response) => dispatch({ ...action, payload: response }));
  };
}
