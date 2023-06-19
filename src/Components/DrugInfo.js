import * as React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export default function DrugInfo({ drugInfo }) {
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
        <Grid container alignItems='center'>
          <Grid item xs>
            <Typography gutterBottom variant='h4' component='div'>
              {drugInfo[0].title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant='h6'
              sx={{ mb: 1.5, fontSize: 12 }}
              component='div'
            >
              {drugInfo[0].id}
            </Typography>
          </Grid>
        </Grid>
        <Typography color='text.secondary' variant='body2'>
          {drugInfo[0].namesGeneric}
        </Typography>
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant='body1'>
          Names Code
        </Typography>
        <Stack direction='row' spacing={1}>
          {drugInfo[0].namesCode.map((item) => (
            <Chip label={item} />
          ))}
        </Stack>
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant='body1'>
          Names Brand
        </Typography>
        <Stack direction='row' spacing={1}>
          {drugInfo[0].namesBrand.map((item) => (
            <Chip label={item} />
          ))}
        </Stack>
      </Box>
      <Divider variant='middle' />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant='body1'>
          Mechanisms
        </Typography>
        <Stack
          style={{ display: 'flex', flexWrap: 'wrap' }}
          direction='row'
          spacing={1}
        >
          {drugInfo[0].mechanismsOfAction.map((item) => (
            <Chip style={{ margin: '5px' }} label={item.mechanism} />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
