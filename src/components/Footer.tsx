
const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full border-t-2 border-green-800 flex-col">
            <div className="flex flex-col lg:flex-row space-x-8 mt-12">
                {/* partners/clients */}
                <div className="w-[320px] flex flex-col">
                    <span className="text-3xl text-green-800">Our Partners</span>
                    <img src="/images/partners.png" alt="" className="mt-4 h-[370px]" />
                </div>
                <div className="hidden lg:flex h-[440px] border-l-2 border-green-800 ">

                </div>
                <div className="w-[320px] lg:pl-4 mt-12 lg:mt-0 flex flex-col">
                    <span className="text-3xl text-green-800">Our Newsletters</span>
                    <p className="mt-6">Subscribe to our newsletter to receive news, updates and special offers.</p>
                <div className="mt-12 ">
                    <input type="text" placeholder="Email Address" className="w-full border-2 border-green-800 px-4 py-2" />
                    <button className="text-white font-semibold mt-12 px-12 py-4 bg-yellow-700 opacity-80">
                        Subscribe
                    </button>
                </div>
                </div>

            </div>
            <div className="mt-12  max-w-6xl mx-2 py-4  flex flex-col items-center justify-center md:justify-between">
                <span className="text-3xl text-green-800">Vandzilah Technology</span>
                <span>Powered by <span className="text-yellow-700">Vandzilah Technology</span></span>
            </div>

        </div>
    );
};

export default Footer;
