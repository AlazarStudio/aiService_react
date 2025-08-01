import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Non_Found_Page from './Components/Pages/Non_Found_Page';
import Layout from './Components/Standart/Layout/Layout';
import HomePage from './Components/Pages/HomePage/HomePage';
import AdminPage from './Components/Pages/AdminPage/AdminPage';
// import InstallButton from "./Components/Pages/InstallButton/InstallButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  );
}

export default App;
