import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const Rate = () => {
    const [value, setValue] = useState(2)
    return (
        <Box sx={{
            '& > legend': { mt: 0 },
        }}>
            <Rating 
            name='half-rating'
            precision={0.5}
            size='small'
            value={value}
            onChange={((event, newValue) => {
                setValue(newValue)
            })}
            />
        </Box>
    )
}

export default Rate
