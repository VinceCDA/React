import { useState } from "react"
import useCurrencyInfo from "../../hooks/useCurrencyInfo.js"
import InputBox from "../InputBox/InputBox.tsx"

function CurrencyConverter() {
    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('usd')
    const [toCurrency, setToCurrency] = useState('eur')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(fromCurrency)
    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[toCurrency])
    }

    return (
        <>
            <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }} >
                <div className='w-full'>
                    <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}>
                            <div className='w-full mb-1'>
                                <InputBox
                                    label="from"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFromCurrency(currency)}
                                    onAmountChange={(amount) => { setAmount(amount) }}
                                    selectedCurrency={fromCurrency}
                                />
                            </div>
                            <div className='relative w-full h-0.5'>
                                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
                            </div>
                            <div className='w-full mb-1'>
                                <InputBox
                                    label="to"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setToCurrency(currency)}
                                    selectedCurrency={toCurrency}
                                    amountDisabled={true}
                                />
                            </div>
                            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrencyConverter