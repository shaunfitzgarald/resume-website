import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function CopyrightFooter() {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: 'background.default', mt: 6 }}>
      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
        &copy; {year} {' '}
        <Link href="https://github.com/shaunfitzgarald" target="_blank" rel="noopener" underline="hover" sx={{ color: '#fff', fontWeight: 600 }}>
          shaunfitzgarald
        </Link>
      </Typography>
    </Box>
  );
}
