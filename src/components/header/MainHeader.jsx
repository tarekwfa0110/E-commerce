import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

<<<<<<< HEAD
function MainHeader() {
    return (
    <>
        <Header1 />
        <Header2 />
=======
// eslint-disable-next-line react/prop-types
function MainHeader({cartItems, setCartItems}) {
    return (
    <>
        <Header1 />
        <Header2 cartItems={cartItems} setCartItems={setCartItems}/>
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)

        <Header3 />
    </>
    );
}
export default MainHeader;
