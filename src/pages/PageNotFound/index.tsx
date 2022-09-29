import { Box, Alert, AlertTitle } from '@mui/material';

const PageNotFound = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Alert severity="info" sx={{ width: '100%' }}>
        <AlertTitle>
          <strong>404</strong> Not Found
        </AlertTitle>
        The page at this address is not available. The address of the page has changed or it has
        been deleted
      </Alert>
    </Box>
  );
};

export default PageNotFound;
