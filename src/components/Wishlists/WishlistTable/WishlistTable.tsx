import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Typography } from '@mui/material';
import WishLinkButton from './WishLinkButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWieght: 'bold',
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
        color: 'white',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'none',
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'none',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
}));

type StyledImageTileProps = {
    img: string;
};
const StyledImageTile = ({ img }: StyledImageTileProps) => {
    return (
        <Box
            sx={{
                border: '2px solid black',
                height: '60px',
                width: '60px',
            }}
        >
            <img
                src={img}
                alt={img}
                style={{ height: '100%', width: '100%', borderRadius: '10px' }}
            />
        </Box>
    );
};

function createData(
    img: string,
    name: string,
    price: number,
    link: string,
    tags: string[],
    status: 'available' | 'purchased' | 'unavailable' | 'stand-by'
) {
    return { img, name, price, link, tags, status };
}

const rows = [
    createData(
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba4391e6b4f74686b0d3aebb0185b913_9366/3-Stripes_Bucket_Hat_Green_GB7194_01_standard.jpg',
        '3-STRIPES BUCKET HAT G',
        20,
        'https://www.adidas.com/us/3-stripes-bucket-hat/GB7194.html',
        ['tags1'],
        'available'
    ),
    createData(
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b055b91f1904a94a342aedd00e84601_9366/Samba_Arsenal_Shoes_Red_HQ7033_01_standard.jpg',
        'SAMBA ARSENAL SHOES',
        24,
        'https://www.adidas.com/us/defender-duffel-bag-small/EW9649.html',
        ['tags2[0]', 'tags2[1]'],
        'stand-by'
    ),
    createData(
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/754c1560897e42cdbdc3ae1900c6fb38_9366/Arsenal_22-23_Home_Jersey_Red_H35903_01_laydown.jpg',
        'ARSENAL 22/23 HOME JERSEY',
        90,
        'https://www.adidas.com/us/arsenal-2223-home-jersey/H35903.html',
        ['tags3[0]', 'tags3[1]'],
        'unavailable'
    ),
    createData(
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad936e7afe0f4c498a4cae61013cfa28_9366/Adicolor_Essentials_Trefoil_Hoodie_Blue_HK0094_01_laydown.jpg',
        'ADICOLOR ESSENTIALS TREFOIL HOODIE',
        60,
        'https://www.adidas.com/us/adicolor-essentials-trefoil-hoodie/H34652.html',
        ['tags4[0]', 'tags4[1]'],
        'stand-by'
    ),
    createData(
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0676ee648d64b80904eac07011f426c_9366/Defender_Duffel_Bag_Small_Black_EW9649_04_standard.jpg',
        'DEFENDER DUFFEL BAG SMALL',
        60,
        'https://www.adidas.com/us/samba-arsenal-shoes/HQ7033.html',
        ['tags5[0]', 'tags5[1]'],
        'purchased'
    ),
];

enum PurchaseStatus {
    AVAILABLE = 'available',
    STAND_BY = 'stand-by',
    PURCHASED = 'purchased',
    UNAVAILABLE = 'unavailable',
}

type Status = `${PurchaseStatus}`;

const statusStyles = {
    available: {
        color: '#97E69D',
        borderColor: '#97E69D',
    },
    standBy: {
        color: '#F0E79D',
        borderColor: '#F0E79D',
    },
    purchased: {
        color: '#CCCCCC',
        borderColor: '#CCCCCC',
    },
    unavailable: {
        color: '#FFC9CB',
        borderColor: '#FFC9CB',
    },
};

interface IStatusBadgeProps {
    status: Status;
}

function StatusBadge({ status }: IStatusBadgeProps) {
    let sxStyle = {};
    switch (status) {
        case PurchaseStatus.AVAILABLE:
            sxStyle = { ...statusStyles.available };
            break;
        case PurchaseStatus.STAND_BY:
            sxStyle = { ...statusStyles.standBy };
            break;
        case PurchaseStatus.PURCHASED:
            sxStyle = { ...statusStyles.purchased };
            break;
        case PurchaseStatus.UNAVAILABLE:
            sxStyle = { ...statusStyles.unavailable };
            break;
        default:
            null;
    }
    return (
        <Button
            size={'small'}
            sx={{
                ...sxStyle,
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '50px',
                border: '1px solid',
            }}
        >
            {' '}
            {status}{' '}
        </Button>
    );
}

export default function WishlistTable() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '80%',
                margin: '0 auto',
                background: '#242426',
                borderRadius: '.25rem',
                padding: '0 1rem',
            }}
        >
            <TableContainer component={'div'}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Img</StyledTableCell>
                            <StyledTableCell align="center">
                                Wish
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Price
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Link
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                List Tags
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Status
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Actions
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell scope="center">
                                    <StyledImageTile img={row.img} />
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <StyledTitle>{row.name}</StyledTitle>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {`$${row.price}`}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <WishLinkButton to={row.link}>
                                        <OpenInNewIcon fontSize="small" />
                                    </WishLinkButton>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.tags.map((tag) => `${tag}..`)}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <StatusBadge status={row.status} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <ExpandCircleDownIcon />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
