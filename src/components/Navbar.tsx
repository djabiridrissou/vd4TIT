import { useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Menu } from 'antd';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1'); // "Home" is selected by default

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
        setMenuOpen(false); // Close the menu after selecting an item
    };

    const menuItems = [
        { key: '1', label: 'Home' },
        { key: '2', label: 'About Us' },
        { key: '3', label: 'Services' },
        { key: '4', label: 'Our Team' },
    ];

    return (
        <div className="relative bg-white h-20 w-full flex items-center">
            <div className="flex justify-between items-center w-full mx-4">
                <div className='flex justify-center items-center'>
                    <h1 className="text-green-800 font-bold text-xl">Vandzillah</h1>
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    {menuOpen ? (
                        <ImCross size={24} className="text-green-800" onClick={handleMenuToggle} />
                    ) : (
                        <HiOutlineBars3BottomRight size={24} className="text-green-800" onClick={handleMenuToggle} />
                    )}
                </div>
            </div>
            {menuOpen && (
                <Menu
                    mode="inline"
                    className="absolute top-20 left-0 w-full bg-white z-50 custom-menu"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} className="custom-menu-item">
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
}

export default Navbar;

{/*  <SubMenu key="sous-menu" title="Menu" icon={<HiOutlineBars3BottomRight size={24} className="text-green-800" />}>
                        {menuItems.map(item => (
                            <Menu.Item key={item.key} className="custom-menu-item">
                                {item.label}
                            </Menu.Item>
                        ))}
                    </SubMenu> */}