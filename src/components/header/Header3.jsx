import {  useMediaQuery } from "@mui/material";
import BasicMenu from "../../ui/Menu";
import TemporaryDrawer from "../../ui/Drawer";
import MenuIcon from '@mui/icons-material/Menu';

function Header3() {

  return (
    <div className="flex justify-between items-center my-4 mx-auto w-[95%]">
      <BasicMenu></BasicMenu>
      
      
<<<<<<< HEAD
      {useMediaQuery('(max-width:600px)') && <TemporaryDrawer anchor="right"><MenuIcon className="text-black" /></TemporaryDrawer>}
      {useMediaQuery('(min-width:600px)') && <TemporaryDrawer anchor="right"><MenuIcon className="text-black" /></TemporaryDrawer>}
=======
      {/* {useMediaQuery('(max-width:600px)') && <TemporaryDrawer anchor="right"><MenuIcon className="text-black" /></TemporaryDrawer>} */}
      {/* {useMediaQuery('(min-width:600px)') && <TemporaryDrawer anchor="right"><MenuIcon className="text-black" /></TemporaryDrawer>} */}
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
      
    </div>
  );
}
export default Header3;
