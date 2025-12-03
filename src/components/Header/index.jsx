import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './navigation/Navigation';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    return (
        <header className='bg-white'>
            <div className='top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px] '>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='w-[50%] col1'>
                            <p className='text-[14px] font-medium'>Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className='col2 flex items-center justify-end '>
                            <ul className='flex items-center gap-2'>
                                <li className='list-none'>
                                    <Link to='/help-center' className='text-[13px] font-medium transition'>Help Center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to='/order-tracking' className='text-[13px] font-medium transition'>Order Traking</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header py-3 border-b-[1px] border-gray-300'>
                <div className='container flex items-center justify-between '>
                    <div className='col1 w-[25%]'>
                        <Link to='/'>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="border-2 border-[#ff5252] p-2 text-xl font-bold">D</div>

                                <div className="text-xs md:text-lg leading-none">
                                    <p className="font-semibold leading-none">DOLLY</p>
                                    <p className="text-[#ff5252] leading-none">LAMB</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col2 w-[45%]'>
                        <Search />
                    </div>
                    <div className='col3 w-[30%] flex items-center pl-7'>
                        <ul className='flex items-center gap-3 justify-end gap-5 w-full'>
                            <li className='list-none'>
                                <Link to='/login' className='link transition text-[15px] font-semibold'>Login</Link> |
                                <Link to='/register' className='link transition text-[15px] font-semibold pl-1'>Register</Link>
                            </li>
                            <li>
                                <Tooltip title='compare'>
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title='Wish List'>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaRegHeart />
                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title='Cart'>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <MdOutlineShoppingCart />
                                    </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header
