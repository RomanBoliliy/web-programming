import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const daysInMonth = 30;
const monthName = 'Квітень';

const App = () => {
  const [tasks, setTasks] = useState({});

  const handleDayClick = (day) => {
    const task = prompt(`Додайте завдання на ${day} ${monthName}`);
    if (task) {
      setTasks(prev => ({
        ...prev,
        [day]: [...(prev[day] || []), task]
      }));
    }
  };

  const handleDeleteTask = (day, index) => {
    setTasks(prev => {
      const updatedTasks = [...prev[day]];
      updatedTasks.splice(index, 1);
      return {
        ...prev,
        [day]: updatedTasks.length > 0 ? updatedTasks : undefined
      };
    });
  };

  return (
    <div>
      <h1>Календар планування: {monthName}</h1>
      <div className="calendar">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          return (
            <div className="day" key={day} onClick={() => handleDayClick(day)}>
              <strong>{day} {monthName.slice(0, 3).toLowerCase()}</strong>
              <ul className="task-list">
                {(tasks[day] || []).map((task, index) => (
                  <li key={index}>
                    {task}
                    <button onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTask(day, index);
                    }}>❌</button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
