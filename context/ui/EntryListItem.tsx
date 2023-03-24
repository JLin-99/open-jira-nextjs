import { FC } from "react";

import { Entry } from "@/interfaces";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  entry: Entry;
}
export const EntryListItem: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="body2">3 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
