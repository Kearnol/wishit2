import React from 'react';
import Box from '@mui/material/Box';
import WishlistControlButton from '../../WishlistControls';
import WishlistTable from '../WishlistTable';
import { Tab, Tabs } from '@mui/material';
import { useAuth } from 'src/contexts/AuthContext';

const tabs = [
    { name: 'List Name 1', color: '#FF0000' },
    { name: 'List Name 2', color: '#00FF00' },
    { name: 'List Name 3', color: 'white' },
];

function listColorIndicator(label: string, color: string) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
            }}
        >
            <div
                style={{
                    background: color,
                    borderRadius: '50%',
                    height: '12px',
                    width: '12px',
                }}
            />
            {label}
        </div>
    );
}

function AllWishlists() {
    const [tab, setTab] = React.useState(0);
    const { currentUser } = useAuth();
    const handleTabChange = (event: React.SyntheticEvent, value: number) => {
        setTab(value);
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '1rem',
            }}
        >
            <Tabs
                value={tab}
                onChange={handleTabChange}
                textColor={'inherit'}
                indicatorColor="primary"
            >
                {tabs.map((tab, idx) => {
                    const { name, color } = tabs[idx];
                    return (
                        <Tab
                            value={idx}
                            label={listColorIndicator(name, color)}
                        />
                    );
                })}
            </Tabs>
            <WishlistTable />
        </Box>
    );
}

export default AllWishlists;
