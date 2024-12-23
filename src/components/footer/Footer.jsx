function Footer() {
    return (
        <footer className="bg-gray-100 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">About Us</h3>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Customer Care</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary">Track Your Order</a></li>
                            <li><a href="#" className="hover:text-primary">Returns & Refunds</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary">Facebook</a>
                            <a href="#" className="hover:text-primary">Twitter</a>
                            <a href="#" className="hover:text-primary">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
                    © 2024 Store. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
export default Footer