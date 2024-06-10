import { useEffect, useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    const menuItems = [
        { key: '/', label: 'Home', path: '/' },
        { key: '/services', label: 'Services', path: '/services' },
        { key: '/team', label: 'Our Team', path: '/team' },
        { key: '/contact', label: 'Contact Us', path: '/contact' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div className="bg-white fixed inset-x-0 top-0 thead h-24 w-full flex items-center z-999999 inset-0">
            <div className="flex justify-between items-center w-full mx-4">
                <div className='flex justify-center items-center flex-col cursor-pointer'>
                    <Link to="/">
                        <h1 className="text-green-800 font-bold text-xl">Vandzilah</h1>
                        <h1 className="text-green-800 font-bold text-xl">Technology</h1>
                    </Link>
                </div>
                <div className='hidden md:flex justify-center items-center space-x-8 text-green-800 font-semibold cursor-pointer'>
                    {menuItems.map(item => (
                        <Link key={item.key} to={item.path} className={`menu-item ${location.pathname === item.path ? 'selected' : ''}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className='flex justify-center items-center cursor-pointer md:hidden'>
                    {menuOpen ? (
                        <ImCross size={12} className="text-green-800" onClick={handleMenuToggle} />
                    ) : (
                        <HiOutlineBars3BottomRight size={24} className="text-green-800" onClick={handleMenuToggle} />
                    )}
                </div>
            </div>

            {menuOpen && (
                <Menu
                    mode="inline"
                    className="absolute top-20 left-0 w-full z-50 custom-menu"
                    style={{ backgroundColor: 'white' }}
                    onClick={handleMenuClick}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} className="custom-menu-item">
                            <Link to={item.path}>
                                {item.label}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
}

export default Navbar;
