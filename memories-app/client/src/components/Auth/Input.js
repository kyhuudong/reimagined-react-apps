import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, label, half, autoFocus, type, handleChange, handleShowPassword }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            label={label}
            autoFocus={autoFocus}
            onChange={handleChange}
            type={type}
            variant="outlined"
            fullWidth
            required
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            } : null}
        />
    </Grid>

)

export default Input;