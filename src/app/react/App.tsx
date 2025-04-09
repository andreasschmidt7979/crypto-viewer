import React from "react";
import { Routes, Route } from "react-router-dom";
import MyCalendar from "./calendar/MyCalendar";
import Calculator from "./calculator/Calculator";
import { NavBar } from "./NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={"Select a React App"} />
        <Route path="/pages/app-react-comp" element={<MyCalendar />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/pages/app-react-comp/calendar" element={<MyCalendar />} />
  //     </Routes>
  //   </>
  // );

  // return (
  //   <div>
  //     <MyCalendar />
  //   </div>
  // );
};

export default App;
