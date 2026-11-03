import { useState } from "react";
import { Link } from "react-router-dom";

function Calendar(props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Weekday headings
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Format the month and year
  const currentMonth = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Generate an array with all days of the month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Calculate the weekday on which the month starts
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Adjust so Monday = 0 and Sunday = 6
  const startingDay = (firstDayOfMonth + 6) % 7;

  // Navigate between months
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
        {/* Display weekday headings */}
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}

        {/* Empty cells before the first day */}
        {Array.from({ length: startingDay }, (_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {/* Display the days of the month */}
        {days.map((day) => {
          // Format date
          const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

          // Find tasks due on this date
          const tasksForDay = props.tasks.filter((task) => {
            return task.dueDate === date;
          });

          return (
            <div key={day} className="calendar-day">
              <span>{day}</span>

              {/* Display tasks due on this day */}
              {tasksForDay.map((task) => (
                <Link
                  key={task.id}
                  to={`/task/${task.id}`}
                  className="calendar-task"
                >
                  {task.title}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Calendar;
