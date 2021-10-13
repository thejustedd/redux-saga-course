import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const [value, setValue] = useState('');
  const [customer, setCustomer] = useState('');
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  function addCash(value) {
    dispatch({ type: 'ADD_CASH', payload: value });
    setValue('');
  }

  function getCash(value) {
    dispatch({ type: 'GET_CASH', payload: value });
    setValue('');
  }

  function addCustomer(name) {
    const customer = {
      id: Date.now(),
      name
    };
    dispatch(addCustomerAction(customer));
    setCustomer('');
  }

  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className="app">
      <div style={{ display: 'flex' }}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Кол-во денег" />
        <button onClick={e => addCash(+value)}>Пополнить счёт</button>
        <button onClick={e => getCash(+value)}>Снять со счёта</button>
        <div style={{ marginLeft: 10, fontSize: 20 }}>{cash}</div>
      </div>
      <div>
        <input type="text" value={customer} onChange={e => setCustomer(e.target.value)} placeholder="Покупатель" />
        <button onClick={e => addCustomer(customer)}>Добавить клиента</button>
        <button onClick={e => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
        {customers.length ?
          customers.map(customer =>
            <div key={customer.id}
              style={{ fontSize: '1.5rem', border: '1px solid black', padding: 10, marginTop: 5 }}
              onClick={e => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          )
          : <div style={{ fontSize: '1.5rem', marginTop: 5 }}>Клиенты отсуствуют!</div>
        }
      </div>
    </div >
  );
}

export default App;
