import { Component } from 'react';
import { Toolbar, Typography, Link, SvgIcon, IconButton, Stack } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import { ReactComponent as RSS } from './assets/logo_RSS.svg';
import { BlackTooltip } from './lib/styles';

class Footer extends Component {
  render() {
    return (
      <Toolbar sx={{ bgcolor: '#000', mt: 'auto', justifyContent: 'space-between' }}>
        <Link
          href="https://rs.school/"
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ display: 'flex' }}
        >
          <IconButton>
            <SvgIcon component={RSS} sx={{ width: '90px', height: '40px' }} inheritViewBox />
          </IconButton>
        </Link>
        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
          <Link
            href="https://github.com/diXrom"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <BlackTooltip title="Timur Tolegen" placement="top">
              <IconButton color="secondary">
                <GitHub />
              </IconButton>
            </BlackTooltip>
          </Link>
          <Typography variant="h6" component="div" color="secondary" sx={{ mr: 1 }}>
            2022
          </Typography>
        </Stack>
      </Toolbar>
    );
  }
}

export default Footer;
