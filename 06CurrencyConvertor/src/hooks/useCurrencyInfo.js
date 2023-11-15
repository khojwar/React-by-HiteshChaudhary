import {useEffect, useState} from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  // fetch maa chaining laauna parxa. Then le callback linxa. (json maa convert gareko)
        .then((res) => setData(res[currency]))  // "data" maa currency storre gareko. square bracket use garera object access gareko (dot use garera pani object access garna sakinxa)
        console.log(data)
    }, [currency])
    console.log(data)
  return data
}

export default useCurrencyInfo