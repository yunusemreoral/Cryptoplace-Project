import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { CoinContext } from '../../context/CoinContext';

const Header = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    // select alanındaki değişim neticesinde elde edilen değeri al
const selectedCurrency = e.target.value;

switch (selectedCurrency) {
  case "usd":
    setCurrency({ name: "usd", symbol: "$"});
    break;
    case "eur":
      setCurrency({ name: "eur", symbol: "€"});
      break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
}
  };

  return (
    <header className='flex items-center justify-between px-[10%] py-5 border-b-2 border-[#3c3c3c] bg-[#1a1a40]'>
{/* logo */}
        <Link>
        <img src='/logo.png' 
        className='min-w-[90px] w-[max(12vw,120px]' 
        alt='cryplace'/>
        </Link>

        {/* nav */}
        <ul className='hidden md:flex gap-10 ml-[50px] lg:ml-8'>
            
                <li className='cursor-pointer hover:text-[#ffde4d] transition'>Home</li>

                <li className='cursor-pointer hover:text-[#ffde4d] transition'>Features</li>

                <li className='cursor-pointer hover:text-[#ffde4d] transition'>Pricing</li>

                <li className='cursor-pointer hover:text-[#ffde4d] transition'>Blog</li>
            
        </ul>

        {/* select & bottom*/}

        <div className='flex items-center gap-3 px-5 md:px-8 lg:px-0'>
            <select 
            onChange={currencyHandler}
             className='p-[5px_8px] rounded-md border-2 border-white bg-transparent'>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
            </select>

            <button className='max-md:hidden flex items-center gap-2 md:gap-[8px] px-6 py-2.5 flex-wrap rounded-[20px] bg-white text-[15px] text-black cursor-pointer hover:bg-[#ffde4d] transition'>
                <span className='whitespace-pre'>Sign up</span>
                <MdArrowOutward className='size-6'/></button>
        </div>
    </header>
  )
}

export default Header
