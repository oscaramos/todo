import { useTasks } from "../../hooks/useTasks";
import GroupedTasks from "../GroupedTasks";
import { groupTasksByDay } from "../utils";

function Home() {
  const [tasks] = useTasks();

  const tasksByDay = groupTasksByDay(tasks);

  return <GroupedTasks tasks={tasksByDay} />;
}

export default Home;
