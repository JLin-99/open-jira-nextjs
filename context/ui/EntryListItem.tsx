import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const EntryListItem = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            Some description
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="body2">3 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
