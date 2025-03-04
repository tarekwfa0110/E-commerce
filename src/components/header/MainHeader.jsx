import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSelector from "../../ui/LanguageSelector";
import SearchBar from "../../ui/SearchBar";
import CategoryMenu from "../../ui/CategoryMenu";
import Cart from "../../ui/Cart";
import useCartStore from "../../store/cartStore";

function MainHeader() {
    const isMobile = useMediaQuery('(max-width:768px)');
    const { items, updateQuantity, removeItem } = useCartStore();

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-[#2B3445] text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <ShoppingCartIcon />
                        <span className="font-semibold">E-COMMERCE</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <LanguageSelector />
                        <div className="hidden sm:flex items-center gap-3">
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <XIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white py-2 shadow-sm">
                <div className="container mx-auto px-4">
                    {isMobile ? (
                        // Mobile Layout
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <button className="p-2">
                                    <MenuIcon />
                                </button>
                                <CategoryMenu />
                                <Cart
                                    cartItems={items}
                                    onUpdateQuantity={updateQuantity}
                                    onRemoveItem={removeItem}
                                />
                            </div>
                            <div className="w-full">
                                <SearchBar />
                            </div>
                        </div>
                    ) : (
                        // Desktop Layout
                        <div className="flex items-center justify-between gap-4">
                            <CategoryMenu />
                            <div className="flex-1 max-w-2xl">
                                <SearchBar />
                            </div>
                            <Cart
                                cartItems={items}
                                onUpdateQuantity={updateQuantity}
                                onRemoveItem={removeItem}
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
