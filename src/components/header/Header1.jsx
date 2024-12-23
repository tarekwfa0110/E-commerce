import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import SimpleListMenu from "../../ui/SelectedMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router";

function Header1() {
  return (
    <div className="flex justify-around items-center gap-3 text-white bg-[#2B3445]">
      <Link to="/">
        <div className="flex items-center flex-col">
          <ShoppingCartIcon />
          <p>E-COMMERCE</p>
        </div>
      </Link>


      <div className="flex items-center gap-3">
        <SimpleListMenu />
        <button>
          <InstagramIcon />
        </button>
        <button>
          <FacebookIcon />
        </button>
        <button>
          <XIcon />
        </button>
      </div>

    </div>
  );
}
export default Header1;
