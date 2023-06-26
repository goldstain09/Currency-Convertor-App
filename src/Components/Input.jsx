import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectingStart1 } from '../Redux/CC.Actions';
import './Input.css';
import { CirclesWithBar, Dna } from 'react-loader-spinner';

export default function Input() {


    // dispatching data
    const dispatch = useDispatch();

    // getting data 
    const [allCurrency_Data, setAllCurrency_Data] = useState([])
    const Data = useSelector((state) => state.currencies);
    // using useEffect beczz Data's promise may block rendering...
    useEffect(() => {
        function dt() {
            Data.then((data) => {
                setAllCurrency_Data(data);
            })
        }
        Data && dt();
    }, [Data])

    // SELECT
    // for selected value
    const [selectedValue1, setSelectedValue1] = useState('Select');
    const [selectedValue2, setSelectedValue2] = useState('Select');

    // getting selected currency data from reducer
    const { currency1 } = useSelector((state) => state)


    // for setting data of this particular currency
    const [currency_1, setCurrency_1] = useState();
    // for getting single country currency data on selecting
    useEffect(() => {
        async function cur() {
            let currency1_data = await fetch(`https://v6.exchangerate-api.com/v6/8fd95064ff7ac1a2d34d064f/latest/${currency1}`);
            let currency = await currency1_data.json();
            setCurrency_1(currency);
        }
        currency1 && cur();
    }, [currency1])

    // INPUT
    // to getting input for only numeric values 
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();


    // Converting value----
    const InputChange_1 = (v) => {
        let arr = Object.entries(currency_1.conversion_rates);
        arr.length > 0 && arr.map(([currency, value]) => {
            if (currency === selectedValue2) {
                setInput2(`->    ${parseFloat(v * value).toFixed(2)}    ${selectedValue2}`);
            }
        })
    }


    // ---------------------------------LOADING-------------------------------------
    const { loading, selecting_loading } = useSelector((state) => state);

    if (loading) {
        return (<div align='center' style={{ padding: '10% 40%', width: '100%' }}>
            <CirclesWithBar
                align='center'
                height="300"
                width="300"
                color="burlywood"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>)
    }



    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    {/* -------------------------------------------------------- */}
                    <div className='col col-6 text-dark pt-sm-5'>
                        <div className='justify-content-evenly d-flex pt-sm-5'>
                            <label htmlFor="select"><h1>From</h1></label>
                            <select
                                name="currency1"
                                value={selectedValue1}
                                onChange={(event) => {
                                    setSelectedValue1(event.target.value);
                                    dispatch(selectingStart1(event.target.value));
                                    setInput1('');
                                    setInput2('');
                                }}>
                                <option value="Select" disabled>Select</option>
                                {
                                    allCurrency_Data.length > 0 ? allCurrency_Data.map(([currency]) => (
                                        <option value={currency} key={currency}>{currency}</option>
                                    )) : (<option value="data">data</option>)
                                }
                            </select>
                        </div>
                        <div>
                            {
                                currency1 && (<div className='d-flex'><input
                                    autoFocus
                                    type="text"
                                    value={input1}
                                    onChange={(event) => {
                                        event.preventDefault()
                                        if (/^\d*\.?\d*$/.test(event.target.value)) {
                                            setInput1(event.target.value);
                                            InputChange_1(event.target.value);
                                        }
                                    }} /><p>{selectedValue1}</p></div>   )
                            }
                        </div>

                    </div>
                    {/* -------------------------------------------------------- */}
                    <div style={{ position: 'absolute', margin: '5rem 40%' }}>
                        {
                            selecting_loading && (<Dna
                                visible={true}
                                height="110"
                                width="110"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />)
                        }
                    </div>
                    {/* -------------------------------------------------------- */}
                    <div className='col col-6  text-dark pt-sm-5'>
                        <div className='justify-content-evenly d-flex pt-sm-5'>
                            <label htmlFor="select"><h1>To</h1></label>
                            <select
                                name="currency1"
                                value={selectedValue2}
                                onChange={(event) => {
                                    setSelectedValue2(event.target.value);
                                    setInput1('');
                                    setInput2(0+'   '+event.target.value);
                                }} >
                                <option value="Select" disabled>Select</option>
                                {
                                    allCurrency_Data.length > 0 ? allCurrency_Data.map(([currency]) => (
                                        <option value={currency} key={currency}>{currency}</option>
                                    )) : (<option value="data">data</option>)
                                }
                            </select>
                        </div>

                        <div>
                            {
                                selectedValue2 && (<input
                                    readOnly
                                    type="text"
                                    value={input2}
                                />
                                )
                            }
                        </div>
                    </div>
                    {/* -------------------------------------------------------- */}
                </div>
            </div>
        </>
    )
}
