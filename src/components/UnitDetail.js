import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const UnitDetail = ({ unit }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {unit.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {unit.description}
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(unit).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
              return (
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <span key={subKey}>
                        {subKey}: {subValue} <br />
                      </span>
                    ))}
                  </Typography>
                </Grid>
              );
            }
            return (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="subtitle1" color="textPrimary">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {value.toString()}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UnitDetail;
