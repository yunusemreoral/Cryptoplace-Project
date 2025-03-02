import React, { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const CoinItem = ({ item }) => {
    // context yapısı içerisinden currency al
    const { currency } = useContext(CoinContext);

  return (
    <Link to={`/coin/${item.id}`} className='grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] sm:grid-cols-2 p-4 place items-center border-b border-[#333] hover:bg-[#1f1f1f] transition'
    >
      {/* rank */}
      <p>{item.market_cap_rank} </p>
      {/* name && image */}
      <div className=' flex items-center gap-3'>
        <img className='size-6' src={item.image} alt="coin-image"/>
        <span className='font-semibold'>{item.name}</span>
      </div>

      {/* price */}
      <p className='text-center'>  {currency.symbol} {item.current_price}</p>

      {/* change */}
      <p className={`hidden md:block text-right ${
        item.price_change_percentage_24h > 0
        ? "text-green-500"
        : "text-red-500"
      }`}
       >
        {Math.round(item.price_change_percentage_24h * 1000) / 10000}
       </p>
    </Link>
  );
};

export default CoinItem;
