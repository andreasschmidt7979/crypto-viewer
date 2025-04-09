import React, { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="MyCalendar">
      <header>
        <h1>Calendar</h1>
      </header>
      <div className="MyCalendar__container">
        <main className="MyCalendar__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
    </div>
  );
}

// const MyCalendar = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (date) => {
//     setDate(date);
//   };

//   return (
//     <div>
//       <Calendar showWeekNumbers onChange={onChange} value={date} />
//       {console.log(date)}
//       {date.toString()}
//     </div>
//   );
// };

// render(<ReactCalendar />, document.querySelector("#root"));
