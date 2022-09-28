import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation';
import SalesDash from './SalesDash';
import VericalGraph from './VerticalGraph';
import HorizontalGraph from './HorizontalGraph';
import DoughnutGraph from './DoughnutGraph';
import Otp from './Otp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);