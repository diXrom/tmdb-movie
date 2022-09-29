import { Stack, CircularProgress } from '@mui/material';

const MovieProgress = () => {
  return (
    <Stack
      sx={{
        pt: '200px',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress color="info" size={60} />
    </Stack>
  );
};

export default MovieProgress;
