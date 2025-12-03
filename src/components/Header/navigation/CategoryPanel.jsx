import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import "../navigation/style.css"
import { Link } from 'react-router-dom';

const CategoryPanel = (props) => {
  // const [open, setOpen] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    // setOpen(newOpen);
    props.setIsOpenCatPanel(newOpen);
  };
  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  }

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel"
    // onClick={toggleDrawer(false)}
    >
      <h3 className='p-3 text-lg font-semibold flex items-center justify-between'>Shop By Category <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-xl' /></h3>

      <div className='scroll'>
        <ul className='w-full'>
          <li className='list-none flex justify-between relative flex-col'>
            <Link to='/' className='w-full'>
              <Button className='!w-full  !justify-start link !text-gray-500'>Fashion </Button>
            </Link>
            {
              submenuIndex === 0 ? (
                <FaRegSquareMinus className='absolute top-[10px] right-[15px]'
                  onClick={() => openSubmenu(0)} />
              ) : (
                <FaRegSquarePlus className='absolute top-[10px] right-[15px]'
                  onClick={() => openSubmenu(0)} />
              )
            }


            {
              submenuIndex === 0 &&
              <ul className='submenu w-full pl-3  '>
                <li className='list-none relative'>
                  <Link to='/'>
                    <Button className='w-full  !justify-start link !text-gray-500'>Appreal </Button>
                  </Link>
                  {
                    innerSubmenuIndex === 0 ? (
                      <FaRegSquareMinus className='absolute top-[10px] right-[15px]'
                        onClick={() => openInnerSubmenu(0)} />
                    ) : (
                      <FaRegSquarePlus className='absolute top-[10px] right-[15px]'
                        onClick={() => openInnerSubmenu(0)} />
                    )
                  }
                  {/* <FaRegSquarePlus className='absolute top-[10px] right-[15px]' 
                onClick={()=>openInnerSubmenu(0)} /> */}
                  {
                    innerSubmenuIndex === 0 &&
                    <ul className='inner-submenu w-full pl-3  '>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Smart Tablet</Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Crepe T-Shirt </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Leather Watch </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Rolling Diamond </Link>
                      </li>
                    </ul>
                  }


                </li>
              </ul>
            }



          </li>

          <li className='list-none flex justify-between relative flex-col'>
            <Link to='/' className='w-full'>
              <Button className='!w-full  !justify-start link !text-gray-500'>Outwear </Button>
            </Link>
            {
              submenuIndex === 1 ? (
                <FaRegSquareMinus className='absolute top-[10px] right-[15px]'
                  onClick={() => openSubmenu(1)} />
              ) : (
                <FaRegSquarePlus className='absolute top-[10px] right-[15px]'
                  onClick={() => openSubmenu(1)} />
              )
            }


            {
              submenuIndex === 1 &&
              <ul className='submenu w-full pl-3  '>
                <li className='list-none relative'>
                  <Link to='/'>
                    <Button className='w-full  !justify-start link !text-gray-500'>Appreal </Button>
                  </Link>
                  {
                    innerSubmenuIndex === 1 ? (
                      <FaRegSquareMinus className='absolute top-[10px] right-[15px]'
                        onClick={() => openInnerSubmenu(1)} />
                    ) : (
                      <FaRegSquarePlus className='absolute top-[10px] right-[15px]'
                        onClick={() => openInnerSubmenu(1)} />
                    )
                  }
                  {/* <FaRegSquarePlus className='absolute top-[10px] right-[15px]' 
                onClick={()=>openInnerSubmenu(0)} /> */}
                  {
                    innerSubmenuIndex === 1 &&
                    <ul className='inner-submenu w-full pl-3  '>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Smart Tablet</Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Crepe T-Shirt </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Leather Watch </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to='/' className='w-full  !justify-start link !text-left !text-gray-500 transition'>Rolling Diamond </Link>
                      </li>
                    </ul>
                  }


                </li>
              </ul>
            }



          </li>
        </ul>
      </div>

    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )


}

export default CategoryPanel
