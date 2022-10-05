import { Stack, Alert, AlertTitle } from '@mui/material';

const MovieNotFound = () => (
  <Stack data-testid="мovieNotFound" sx={{ alignItems: 'center' }}>
    <Alert severity="info" sx={{ width: '60%' }}>
      <AlertTitle>Nothing found</AlertTitle>
      Unfortunately, nothing was found for your search, please change your query and try again.
    </Alert>
  </Stack>
);

export default MovieNotFound;
