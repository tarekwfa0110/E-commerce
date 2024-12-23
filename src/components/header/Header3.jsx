import { useMediaQuery } from "@mui/material";
import BasicMenu from "../../ui/Menu";
import TemporaryDrawer from "../../ui/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import PrimarySearchAppBar from "../../ui/SearchBar";

function Header3() {
  const isMobile = useMediaQuery('(max-width:600px)');  // Detect if screen width is less than 600px

  return (
    <div className="flex justify-between items-center my-4 mx-auto w-[95%]">
      <BasicMenu />

      {isMobile && (
        <TemporaryDrawer anchor="right">
          <MenuIcon className="text-black" />
        </TemporaryDrawer>
      )}
    <PrimarySearchAppBar />
    </div>
  );
}

export default Header3;
