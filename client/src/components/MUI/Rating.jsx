import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const Rate = ({ data, click, type = 'readonly' }) => {
    const [value, setValue] = useState(data)
    return (
        <Box sx={{
            '& > legend': { mt: 0 },
        }}>
            <Rating
                name='half-rating'
                precision={0.5}
                size={type === 'readonly' ? 'small' :'medium'}
                value={value}
                onChange={((event, newValue) => {
                    setValue(newValue);
                    click(newValue);
                })}
                readOnly={type === 'readonly'}
            />
        </Box>
    )
}

export default Rate
