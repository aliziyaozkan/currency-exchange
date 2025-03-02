import React, { useState } from 'react'
import '../css/currency.css'
import { BsCurrencyExchange } from "react-icons/bs";
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_401vyXQUQQ9Ncj4f2HkH3H7QSC3DQav1WuPbVEMk';

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }
    return (
        <div className='currency-div'>
            <div className='header' style={{ marginTop: '-80px' }}>
                <h2>Currency Exchange App</h2>
            </div>
            <div>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount' />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>
                        USD
                    </option>
                    <option>
                        EUR
                    </option>
                    <option>
                        TRY
                    </option>
                </select>
                <BsCurrencyExchange style={{ fontSize: '50px', margin: '10px', marginTop: '-10' }} />
                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type='number' className='result' />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>
                        USD
                    </option>
                    <option>
                        EUR
                    </option>
                    <option>
                        TRY
                    </option>
                </select>

            </div>
            <div>
                <button
                    onClick={exchange}
                    className='button'>Exchange</button>
            </div>

        </div>
    )
}

export default Currency