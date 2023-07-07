import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import CreatableFreeSoloInput from './CreatableFreeSoloInput/CreatableFreeSoloInput';

export default function AddWishlistForm() {
    return (
        <Box className="add-wishlist-form">
            <TextField
                id="wishlist-name"
                label="Wishlist Name"
                variant="outlined"
                helperText="Go ahead, give it a name"
            />
            <CreatableFreeSoloInput />
        </Box>
    );
}
