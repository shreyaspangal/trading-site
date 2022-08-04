import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AppBlockingOutlinedIcon from '@mui/icons-material/AppBlockingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatIcon from '@mui/icons-material/Chat';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';


const Data = [
    {
        name: 'Buy ticket',
        icon: () => {
            return <ShoppingCartIcon />
        }
    },
    {
        name: 'Download App',
        icon: () => {
            return <DownloadIcon />
        }
    },
    {
        name: 'My Referral Link',
        icon: () => {
            return <ShareIcon />
        }
    },
    {
        name: 'My Team',
        icon: () => {
            return <HandshakeIcon />
        }
    },
    {
        name: 'Withdraw',
        icon: () => {
            return <CurrencyRupeeIcon />
        }
    },
    {
        name: 'Bind Bank Card',
        icon: () => {
            return <CreditCardOutlinedIcon />
        }
    },
    {
        name: 'Payment Issue',
        icon: () => {
            return <AppBlockingOutlinedIcon />
        }
    },
    {
        name: 'Balance Record',
        icon: () => {
            return <AccountBalanceWalletOutlinedIcon />
        }
    },
    {
        name: 'Ticket Record',
        icon: () => {
            return <ListAltOutlinedIcon />
        }
    },
    {
        name: 'My Orders',
        icon: () => {
            return <BookmarkBorderIcon />
        }
    },
    {
        name: 'Customer Support',
        icon: () => {
            return <ChatIcon />
        }
    },
    {
        name: 'About Us',
        icon: () => {
            return <RememberMeIcon />
        }
    },
    {
        name: 'Account Settings',
        icon: () => {
            return <ManageAccountsIcon />
        }
    },
    {
        name: 'Log Out',
        icon: () => {
            return <LogoutIcon />
        }
    },
];

export default Data;