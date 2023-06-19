import * as React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export default function Landing() {
  return (
    <Box
      className='drugInfo'
      sx={{
        bgcolor: '#EDF5E1',
        borderRadius: '20px',
        marginTop: '10px',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        {/* <Grid container alignItems='center'> */}
          <Grid item xs alignItems='center'>
            {/* <Typography gutterBottom variant='h4' component='div'> */}
            <h3 style={{textAlign: "center"}}>
              Welcome to Pharma App

            </h3>
            {/* </Typography> */}
          </Grid>
        {/* </Grid> */}
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant='h6'>
        To access detailed information, simply search the drug or mechanism in the search bar.
        </Typography>
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
      <p style={{textAlign: "center"}}>
                Made with  
                <span style={{color: '#ff0000', margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                 by Shashank K
            </p>
      </Box>
    </Box>
  )
}
