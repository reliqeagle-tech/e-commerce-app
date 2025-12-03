import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex items-center justify-end gap-8'>
                    <div className='col_1 w-[30%] md:w-[20%]'>
                        <Button className='!font-bold !text-gray-700 gap-2 w-full' onClick={openCategoryPanel}>
                            <RiMenu2Fill className='text-lg' />
                            Shop By Categories
                            <LiaAngleDownSolid className='text-lg ml-auto' />
                        </Button>
                    </div>
                    <div className='col_2 w-[70%] md:w-[62%] overflow-x-auto overflow-y-hidden scrollbar-hide'>
                        <ul className='flex items-center gap-2 nav'>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Home</Button> </Link>
                            </li>
                            <li className='list-none relative'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Fashion</Button> </Link>

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[200%] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full relative'>
                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 w-full text-left !justify-start !rounded-none'>Men</Button>
                                                <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                    <ul>
                                                        <li className='list-none w-full'>
                                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 w-full text-left !justify-start !rounded-none'>T-shirt</Button> </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Jeans</Button> </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Footwear</Button> </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Whatch</Button> </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Pents</Button> </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Women</Button> </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Kids</Button> </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Girls</Button> </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'> <Button className='!text-gray-700 text-left !justify-start w-full !rounded-none'>Boys</Button> </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Eelectronics</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Bags</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Footwear</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Groceries</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Beauty</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Wellness</Button> </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className=' text-[14px] font-semibold ' > <Button className='link transition !text-gray-700'>Jewellery</Button> </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col_3 w-[18%]'>
                        <p className='text-[13px] font-semibold flex items-center gap-3 text-gray-700'> <GoRocket className='text-[18px]' />Free Intenational Delivery</p>
                    </div>
                </div>
            </nav>
            {/* category panel component */}
            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
        </>
    )
}

export default Navigation



// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { RiMenu2Fill } from "react-icons/ri";
// import { LiaAngleDownSolid } from "react-icons/lia";
// import { GoRocket } from "react-icons/go";
// import { Link } from 'react-router-dom';
// import CategoryPanel from './CategoryPanel';

// const Navigation = () => {
//     const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

//     const openCategoryPanel = () => {
//         setIsOpenCatPanel(true);
//     };

//     return (
//         <>
//             <nav className="py-2">
//                 <div className="container flex items-center justify-end gap-8">

//                     {/* category button */}
//                     <div className="col_1 w-[30%] md:w-[20%]">
//                         <Button
//                             className="!font-bold !text-gray-700 gap-2 w-full"
//                             onClick={openCategoryPanel}
//                         >
//                             <RiMenu2Fill className="text-lg" />
//                             Shop By Categories
//                             <LiaAngleDownSolid className="text-lg ml-auto" />
//                         </Button>
//                     </div>

//                     {/* main navigation */}
//                     <div className="col_2 w-[70%] md:w-[62%]">
//                         <ul className="flex items-center gap-2 nav">

//                             <li className="list-none">
//                                 <Button component={Link} to="/" className="link transition !text-gray-700">
//                                     Home
//                                 </Button>
//                             </li>

//                             {/* Fashion with submenu */}
//                             <li className="list-none relative">

//                                 <Button component={Link} to="/" className="link transition !text-gray-700 flex items-center gap-1">
//                                     Fashion
//                                 </Button>

//                                 <div className="submenu absolute top-[120%] left-0 min-w-[200%] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">

//                                     <ul>
//                                         <li className="list-none w-full relative">

//                                             {/* Men */}
//                                             <Button
//                                                 component={Link}
//                                                 to="/"
//                                                 className="!text-gray-700 w-full text-left !justify-start !rounded-none"
//                                             >
//                                                 Men
//                                             </Button>

//                                             {/* Men → inner submenu */}
//                                             <div className="submenu absolute top-0 left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
//                                                 <ul>
//                                                     <li>
//                                                         <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                             T-shirt
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                             Jeans
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                             Footwear
//                                                         </Button>
//                                                     </li>
//                                                     <li>
//                                                         <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                             Watch
//                                                         </Button>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </li>

//                                         <li>
//                                             <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                 Women
//                                             </Button>
//                                         </li>

//                                         <li>
//                                             <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                 Kids
//                                             </Button>
//                                         </li>

//                                         <li>
//                                             <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                 Girls
//                                             </Button>
//                                         </li>

//                                         <li>
//                                             <Button component={Link} to="/" className="!text-gray-700 w-full text-left !justify-start !rounded-none">
//                                                 Boys
//                                             </Button>
//                                         </li>

//                                     </ul>
//                                 </div>
//                             </li>

//                             <li><Button component={Link} to="/" className="link !text-gray-700">Electronics</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Bags</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Footwear</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Groceries</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Beauty</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Wellness</Button></li>
//                             <li><Button component={Link} to="/" className="link !text-gray-700">Jewellery</Button></li>

//                         </ul>
//                     </div>

//                     <div className="col_3 w-[18%]">
//                         <p className="text-[13px] font-semibold flex items-center gap-3 text-gray-700">
//                             <GoRocket className="text-[18px]" />
//                             Free International Delivery
//                         </p>
//                     </div>
//                 </div>
//             </nav>

//             {/* Category Panel Component */}
//             <CategoryPanel
//                 isOpenCatPanel={isOpenCatPanel}
//                 setIsOpenCatPanel={setIsOpenCatPanel}
//             />
//         </>
//     );
// };

// export default Navigation;
