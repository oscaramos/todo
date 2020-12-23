import { Grid } from "@material-ui/core";

import { ReactComponent as MeetingIcon } from "../../assets/categories/Meeting.svg";
import { ReactComponent as PartyIcon } from "../../assets/categories/Party.svg";
import { ReactComponent as PersonalIcon } from "../../assets/categories/Personal.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/categories/Shopping.svg";
import { ReactComponent as StudyIcon } from "../../assets/categories/Study.svg";
import { ReactComponent as WorkIcon } from "../../assets/categories/Work.svg";
import CategoryLink from "./CategoryLink";

function Categories() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Personal"
            number={24}
            icon={<PersonalIcon />}
            href="/category/personal"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Work"
            number={30}
            icon={<WorkIcon />}
            href="/category/work"
          />
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Meeting"
            number={24}
            icon={<MeetingIcon />}
            href="/category/meeting"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Shopping"
            number={-60000}
            icon={<ShoppingIcon />}
            href="/category/shopping"
          />
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={2}>
        <Grid item xs={6}>
          <CategoryLink
            name="Party"
            number={24}
            icon={<PartyIcon />}
            href="/category/party"
          />
        </Grid>
        <Grid item xs={6}>
          <CategoryLink
            name="Study"
            number={30}
            icon={<StudyIcon />}
            href="/category/study"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Categories;
