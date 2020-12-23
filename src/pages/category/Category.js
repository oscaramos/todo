import { tags } from "../../constants/tags";
import { useTasks } from "../../hooks/useTasks";
import GroupedTasks from "../GroupedTasks";
import { groupTasksByDay } from "../utils";

function Category({ params }) {
  const { name } = params;

  const [tasks] = useTasks();

  const tag = tags.find((tag) => tag.name.toLowerCase() === name);
  const categoryTasks = tasks.filter((task) => task.tagId === tag.id);
  const tasksByDay = groupTasksByDay(categoryTasks);

  return <GroupedTasks tasks={tasksByDay} />;
}

export default Category;
