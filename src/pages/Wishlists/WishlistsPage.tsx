import React from 'react';
import Box from '@mui/material/Box';
import WishlistControlButton from '../../components/WishlistControls';
import { useAuth } from 'src/contexts/AuthContext';
import { Outlet } from 'react-router-dom';

function WishlistHub() {
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    id="left-nav"
                    sx={{
                        background: 'none',
                        flex: 0.2,
                        borderRight: '2px solid white',
                        minHeight: '100vh',
                        py: '1rem',
                        px: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 'fit-content',
                    }}
                >
                    <WishlistControlButton to="/wishlists/add">
                        Add Wish
                    </WishlistControlButton>
                    <WishlistControlButton to="/create">
                        New Wishlist
                    </WishlistControlButton>
                    <WishlistControlButton to="/create">
                        Edit Wishlist
                    </WishlistControlButton>
                    <WishlistControlButton to="/wishlists/all">
                        Share Wishlist
                    </WishlistControlButton>
                    <WishlistControlButton to="/create">
                        Delete Wishlist
                    </WishlistControlButton>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Outlet />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default WishlistHub;
