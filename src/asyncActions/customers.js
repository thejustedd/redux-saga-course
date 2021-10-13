import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return dispatch => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
    .then(response => response.json())
    .then(json => dispatch(addManyCustomersAction(json)));
};