import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/*Title - Coronavirus cases*/}
        <Typography className="inforBox_title" color="textSecondary">
          {title}
        </Typography>

        {/*Number of Cases - +120k*/}
        <h2 className="infoBox_cases">{cases}</h2>
        {/*Total Deaths - 1.2M*/}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
