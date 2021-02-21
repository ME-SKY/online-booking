import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import BookingForm from './app/components/booking-form/booking-form'
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <div className="body">
        Some with classname 'body'

          <BookingForm />
      </div>
    </div>
  );
}

export default App;
