import React, {useRef, useState} from 'react'
import Table from 'react-bootstrap/Table'
import excel from '../images/svg/excel.svg'
import * as XLSX from 'xlsx'

export default function Main() {
    const [data, setData] = useState([]);

    const inputRef = useRef(null);

    const handleClick = () => {
        // inputRef.current.click();
        console.log("click")
    }

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet)

        setData(jsonData);
        console.log(jsonData)
    };
   
  return (
    <div className='App p-3'>
        <div className='head flex flex-col sm:flex-row w-full'>
            <form action="" className='customerForm flex flex-col w-full sm:w-2/3'>
                <div className='w-full flex justify-around'>
                    <div className='flex flex-col w-[40%] customerForm'>
                        <label htmlFor="" className='mx-1 my-1'>Харилцагч</label>
                        <select id="select" className='customer border p-1' placeholder='Харилцагч'>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='flex flex-col w-[40%] customerForm'>
                        <label htmlFor="" className='mx-1 my-1'>Үнийн дүн</label>
                        <input type="text" name="" id="price" className='border p-1 price' placeholder='Үнийн дүн'/>
                    </div>
                </div>
                <button type="submit" className='border w-1/3 p-1 my-3 mx-auto font-semibold hover:bg-slate-200'>Илгээх</button>
            </form>

            <form action="" className='customerForm w-full sm:w-1/2 flex justify-around items-center'>
                <input className='d' type="file" id='file' ref={inputRef} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={(e) => handleFileChange(e)} />
                <button type="file" id="fileSelect" className='border lg:h-[30%] w-[40%] px-3 font-semibold hover:bg-slate-200' onClick={handleClick}>Листээр оруулах</button>

                <button type="submit" className='border lg:h-[30%] w-[40%] px-3 flex items-center hover:bg-slate-200'>
                    <div className='w-full flex justify-around'>
                        <img src={excel} alt="" className='w-[20%] sm:w-[50%] md:w-[25%] xl:w-[15%] p-1 sm:p-0 mr-2'/>
                        <p className='my-auto font-semibold'> Export To Excel </p>
                    </div>
                </button>
            </form>
        </div>

        <div className='body mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Харилцагч</th>
                        <th>Үнийн дүн</th>
                        <th>---</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {data === "" ? "" : data.map((res, i) => {
                        <tr>
                            <td>{i}</td>
                            <td>{res.Firstname}</td>
                            <td>{res.Lastname}</td>
                            <td>{res.Email}</td>
                        </tr>
                    })} */}
                    </tbody>
                </Table>
            
        </div>
    </div>
  )
}
