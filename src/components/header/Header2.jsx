import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PrimarySearchAppBar from '../../ui/SearchBar';
import TemporaryDrawer from '../../ui/Drawer';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header2() {
  return (
    <div className='flex-wrap flex justify-between items-center w-[95%] mx-auto' >
      
      
      <div className='inline-flex items-center flex-col '>
        <ShoppingCartIcon />
        <p>E-COMMERCE</p>
      </div>


      <PrimarySearchAppBar/>


      <div className='flex items-center justify-center'>

      <IconButton aria-label="cart">
          <PersonIcon />
        </IconButton>

        <TemporaryDrawer anchor= "bottom"> 
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
        </TemporaryDrawer>
    
        
      </div>

    </div>
  );

}
