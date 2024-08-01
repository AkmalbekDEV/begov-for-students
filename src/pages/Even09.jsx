import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Even09 = () => {
    const [state, setState] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://aabd2a0302baf66f.mokky.dev/Even_09')
            setState(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='max-w-[1250px] mx-auto mt-36'>
            <h1 className='text-2xl font-medium'><span className='text-red-500 text-3xl'>Eslatma:</span> Agar Homework xatoliklari 3 tadan oshsa yoki Vocabulary xatoliklari 70 tadan oshsa, o'quvchi qizil ro'yxatga tushadi. Qizil ro'yxatga tushgan o'quvchi o'z ismini rangidan bilib olishi mumkin.</h1>
            <table className="min-w-full text-center text-xl font-medium mt-10 border-blue-600 border-b-2">
                <thead
                    className="border-b bg-blue-700 font-medium text-white text-xl">
                    <tr>
                        <th scope="col" className=" px-6 py-4">#</th>
                        <th scope="col" className=" px-6 py-4">Name</th>
                        <th scope="col" className=" px-6 py-4">Homework</th>
                        <th scope="col" className=" px-6 py-4">Vocabulary</th>
                    </tr>
                </thead>
                <tbody  >
                    {state.map((data) => {
                        const home = data.homework
                        const voc = data.vocabulary
                        if (home >= 3 || voc >= 70) {
                            return (
                                <tr key={data.id} className="border-b-2 border-blue-600">
                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">{data.id}</td>
                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">{data.name}</td>
                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">{data.homework} marta qilinmagan (Jami)</td>
                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">{data.vocabulary} tasi yozilmagan (Jami)</td>
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr key={data.id} className="border-b-2 border-blue-600">
                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">{data.id}</td>
                                    <td className="whitespace-nowrap  px-6 py-4 ">{data.name}</td>
                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">{data.homework} marta qilinmagan (Jami)</td>
                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">{data.vocabulary} tasi yozilmagan (Jami)</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Even09