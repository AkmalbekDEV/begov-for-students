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
        <div className='max-w-[1250px] mx-auto mt-36 max-sm:px-5'>
            <h1 className='text-2xl font-medium max-sm:text-center text-blue-700 shadow-xl rounded-xl p-5 max-sm:text-lg'><span className='text-red-500 text-3xl max-sm:text-xl'>Eslatma:</span> Agar Uyga vazifani siz 3 marotabadan ko'p bajarmasangiz yoki 1 oy davomida Vocabularyda 70 dan ko'p xato qilsangiz, qizil ro'yxatga tushasiz va imtihondan chetlashtirilasiz. Qizil ro'yxatga tushgan o'quvchi o'z ismini rangidan bilib olishi mumkin.</h1>
            <table className="min-w-full text-center text-xl max-sm:text-lg font-medium mt-10 border-blue-600 border-b-2">
                <thead
                    className="border-b bg-blue-700 font-medium text-white text-xl max-sm:text-lg">
                    <tr>
                        <th scope="col" className=" px-6 max-sm:px-3 py-4">#</th>
                        <th scope="col" className=" px-6 max-sm:px-3 py-4">Name</th>
                        <th scope="col" className=" px-6 max-sm:px-3 py-4">Homework</th>
                        <th scope="col" className=" px-6 max-sm:px-3 py-4">Vocabulary</th>
                    </tr>
                </thead>
                <tbody  >
                    {state.map((data) => {
                        const home = data.homework
                        const voc = data.vocabulary
                        if (home >= 3 || voc >= 70) {
                            return (
                                <tr key={data.id} className="border-b-2 border-blue-600">
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 font-medium">{data.id}</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 text-red-500">{data.name}</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 text-red-500">{data.homework} marta qilinmagan (Jami)</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 text-red-500">{data.vocabulary} tasi yozilmagan (Jami)</td>
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr key={data.id} className="border-b-2 border-blue-600">
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 font-medium">{data.id}</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 ">{data.name}</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 text-red-500">{data.homework} marta qilinmagan (Jami)</td>
                                    <td className="whitespace-nowrap  px-6 max-sm:px-3 py-4 text-red-500">{data.vocabulary} tasi yozilmagan (Jami)</td>
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