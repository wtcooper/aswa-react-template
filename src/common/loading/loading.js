import * as React from "react";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingBox = () => {
  return (
      <>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                <Box pt={4} pb={3} px={3} textAlign="center">
                    <CircularProgress />
                </Box>

        </Box>
      </>
  );

};

export default LoadingBox;
