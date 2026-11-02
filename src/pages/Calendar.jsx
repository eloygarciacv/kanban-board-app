import { useState } from "react";

function Calendar() {
const [currentDate, setCurrentDate] = useState(new Date());
 const year = currentDate.getFullYear();
const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const currentMonth = currentDate.toLocaleString("en-US", {
  month: "long",
  year: "numeric",
});

  const days = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
const firstDayOfMonth = new Date(year, month, 1).getDay();

const startingDay = (firstDayOfMonth + 6) % 7;
const previousMonth = () => {
  setCurrentDate(new Date(year, month - 1, 1));
};

const nextMonth = () => {
  setCurrentDate(new Date(year, month + 1, 1));
};
  return (
    <>
      <div className="header">
        <h1>Calendar</h1>
        <div className="calendar-navigation">
  <button onClick={previousMonth}>←</button>
  <h2>{currentMonth}</h2>
  <button onClick={nextMonth}>→</button>
</div>
      </div>

      <div className="calendar-grid">
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
        {Array.from({ length: startingDay }, (_, index) => (
  <div key={`empty-${index}`} />
))}

        {days.map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;
