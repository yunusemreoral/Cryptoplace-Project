import { createContext, useEffect, useState } from 'react'
import api from "../utils/api";


const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
    // stateler
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    // apıdan coinleri alan fonskiyon
    const fetchAllCoin = () => {
 api
 .get('/coins/markets', {params: {vs_currency: currency.name }})
 .then((res) => setAllCoin(res.data))
 .catch((err) => {
    alert('Coin verilerini alırken bir hata oluştu:', err);     
 });
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = { currency, allCoin, setCurrency };

    
  return (
   <CoinContext.Provider value={contextValue}>
    {/*  */}
    {children}
     </CoinContext.Provider>
  );
};

export { CoinContextProvider, CoinContext };
