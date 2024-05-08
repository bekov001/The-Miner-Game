import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 7,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgba(106, 60, 80, 0.3)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 7,
    backgroundColor: theme.palette.mode === 'light' ? '#ffe41a' : '#308fe8',
  },
}));


interface EnergyInterface {
  clicks: number
}


export const EnergyBar: React.FC<EnergyInterface> = ({clicks, ...props}: EnergyInterface) => {
  return (
    <div>
      <Grid spacing={1} container alignItems="center" justifyContent="center">
        <Grid item>
        <img src="images/energy.png" width={20} height={30}></img>
        </Grid>
      <Grid item >
      
   <p>{1000 - clicks}</p>
        
      </Grid>
      <Grid item xs={9}>
      <BorderLinearProgress variant="determinate" value={(Math.round((1000 - clicks) / 10))} {...props} />
        </Grid>
        
      
      </Grid>
     
    </div>
  );
}