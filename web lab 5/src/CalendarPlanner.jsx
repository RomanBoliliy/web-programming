import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

export default function CalendarPlanner() {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskInput, setTaskInput] = useState("");

  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleAddTask = (date) => {
    if (!taskInput) return;
    const dateKey = format(date, "yyyy-MM-dd");
    setTasks({
      ...tasks,
      [dateKey]: [...(tasks[dateKey] || []), taskInput],
    });
    setTaskInput("");
    setSelectedDate(null);
  };

  const handleDeleteTask = (date, index) => {
    const dateKey = format(date, "yyyy-MM-dd");
    const updatedTasks = tasks[dateKey].filter((_, i) => i !== index);
    setTasks({ ...tasks, [dateKey]: updatedTasks });
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-2">
      <h1 className="text-xl font-bold text-center">Календар планування</h1>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          return (
            <div
              key={dateKey}
              className="border rounded-2xl p-2 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setSelectedDate(day)}
            >
              <div className="font-semibold">{format(day, "d MMM")}</div>
              <ul className="mt-1 text-sm">
                {(tasks[dateKey] || []).map((task, i) => (
                  <li key={i} className="flex justify-between items-center">
                    {task}
                    <button
                      className="text-red-500 text-xs ml-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTask(day, i);
                      }}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-xl w-80">
            <h2 className="text-lg font-semibold mb-2">
              Додати завдання на {format(selectedDate, "d MMM yyyy")}
            </h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setSelectedDate(null)}
              >
                Скасувати
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => handleAddTask(selectedDate)}
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
