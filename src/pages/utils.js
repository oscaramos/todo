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
  return tasks.reduce((acum, task) => {
    const groupName = getDay(task.startTime);
    const groupContent = acum[groupName] || [];
    return {
      ...acum,
      [groupName]: [...groupContent, task],
    };
  }, {});
};
