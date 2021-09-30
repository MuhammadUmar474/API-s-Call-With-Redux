/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/index';
import CreatePatient from './src/screens/CreatePatient';
import PatientList from './src/screens/PatientList';

const App = () => {
  return (
    <Provider store={store}>
      <PatientList />
    </Provider>
  )
}

export default App;