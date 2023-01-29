import { withAuthenticationRequired } from '@auth0/auth0-react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { styled } from '@mui/material'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    height: '68.5px',
    justifyContent: 'flex-end',
}))

function WishlistsPage() {
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ backgroundColor: 'orange', flex: 0.2 }}>Hello</Box>
                <Box sx={{ backgroundColor: 'black', flex: 1 }}>
                    <Typography>You made it to the wishlists page!!</Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default withAuthenticationRequired(WishlistsPage, {
    onRedirecting: () => <div>Loading..</div>,
})
