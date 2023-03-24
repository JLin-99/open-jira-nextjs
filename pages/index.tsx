import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

import { Layout } from "@/components/layouts";

export default function Home() {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />

            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completed" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
