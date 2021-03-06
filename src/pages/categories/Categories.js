import { Grid } from "@material-ui/core";

import { ReactComponent as MeetingIcon } from "../../assets/categories/Meeting.svg";
import { ReactComponent as PartyIcon } from "../../assets/categories/Party.svg";
import { ReactComponent as PersonalIcon } from "../../assets/categories/Personal.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/categories/Shopping.svg";
import { ReactComponent as StudyIcon } from "../../assets/categories/Study.svg";
import { ReactComponent as WorkIcon } from "../../assets/categories/Work.svg";
import { tags } from "../../constants/tags";
import { useTasks } from "../../hooks/useTasks";
import CategoryLink from "./CategoryLink";

const getCategoryLength = (tasks, name) => {
  const tag = tags.find((tag) => tag.name.toLowerCase() === name);
  const categoryTasks = tasks.filter((task) => task.tagId === tag.id);
  return categoryTasks.length;
};

function Categories() {
  const [tasks] = useTasks();

  return (
    <Grid container direction="column" spacing={2} style={{ marginBottom: 75 }}>
      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Personal"
            number={getCategoryLength(tasks, "personal")}
            icon={<PersonalIcon />}
            href="/category/personal"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Work"
            number={getCategoryLength(tasks, "work")}
            icon={<WorkIcon />}
            href="/category/work"
          />
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Meeting"
            number={getCategoryLength(tasks, "meeting")}
            icon={<MeetingIcon />}
            href="/category/meeting"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Shopping"
            number={getCategoryLength(tasks, "shopping")}
            icon={<ShoppingIcon />}
            href="/category/shopping"
          />
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Party"
            number={getCategoryLength(tasks, "party")}
            icon={<PartyIcon />}
            href="/category/party"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Study"
            number={getCategoryLength(tasks, "study")}
            icon={<StudyIcon />}
            href="/category/study"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Categories;
