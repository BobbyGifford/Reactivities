import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivitiesDetails } from "../details/ActivitiesDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
}

export const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column computer={10} mobile={16}>
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column computer={6} mobile={16}>
        <ActivitiesDetails />
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};
