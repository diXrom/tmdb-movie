import { FC, memo } from 'react';
import { Card, CardContent, CardMedia, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { IPersonList } from './lib/types';

const PersonList: FC<IPersonList> = ({ persons }) => (
  <Grid
    data-testid="personList"
    container
    spacing={2}
    sx={{ width: '100%', mt: 2, justifyContent: 'center' }}
  >
    {persons.map((person) => (
      <Grid
        xs={12}
        md={6}
        lg={4}
        xl={3}
        display="flex"
        justifyContent="center"
        key={String(person.name)}
      >
        <Card sx={{ width: 300 }}>
          <CardMedia
            component="img"
            height="300"
            image={person.img ? URL.createObjectURL(person.img as File) : ''}
            alt="photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${String(person.name)} ${String(person.surName)}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Birthday: ${String(person.birthday)}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Country: ${String(person.country)}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default memo(PersonList);
