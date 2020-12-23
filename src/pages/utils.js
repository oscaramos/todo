import { differenceInDays, startOfDay } from "date-fns";

const getDay = (startTime) => {
  const diff = differenceInDays(startTime, startOfDay(new Date()));

  if (diff === 0) {
    return "Today";
  } else if (diff === 1) {
    return "Tomorrow";
  } else {
    return `${diff} days`;
  }
};

export const groupTasksByDay = (tasks) => {
  return tasks.reduce(
    (acum, task, index) => ({
      ...acum,
      [getDay(task.startTime)]: [
        ...(acum[getDay(task.startTime)] || []),
        { ...task, index },
      ],
    }),
    {}
  );
};
