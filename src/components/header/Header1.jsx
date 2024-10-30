import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import SimpleListMenu from "../../ui/SelectedMenu";
function Header1() {
  return (
    <>
      <div className="flex justify-end items-center gap-3 text-white bg-[#2B3445] py-0 mb-10">
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
    </>
  );
}
export default Header1;
