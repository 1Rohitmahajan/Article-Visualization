import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BaseUrl from '../Api/BaseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; function Article() {

    const [data, setData] = useState([])

    useEffect(() => {
        const FeftchData = async () => {
            try {
                const Response = await axios.get(BaseUrl);
                const Apidata = Response.data;
                setData(Apidata);

            }
            catch (error) {
                toast.error("article data not load", {
                    position: "top-center"
                });

            }


        }
        FeftchData();

    }, [])

    return (
        <div class="table-auto overflow-scroll">
            <div className='bg-red-100'> <div className='p-2 bg-slate-200'> <Link to='/'>return dashboard</Link></div><br></br>
                this is article page
            </div>
            <div class="inner-border-2 inner-border-rose-500/75 hover:inner-border-rose-500 ...">
                <h1>ARTICLE DATA IN TABLE FORMATE</h1>
                <table class="border-collapse  w-full ">
                    <thead>
                        <tr class="border border-solid border-blue-500 p-2" >
                            <th class="border border-solid border-blue-500 p-2">Serial_no</th>
                            <th class="border border-solid border-blue-500 p-2">End_year</th>
                            <th class="border border-solid border-blue-500 p-2">City Longitude</th>
                            <th  class="border border-solid border-blue-500 p-2">city Lastitude</th>
                            <th  class="border border-solid border-blue-500 p-2">Intensity</th>
                            <th class="border border-solid border-blue-500 p-2">Sector</th>
                            <th class="border border-solid border-blue-500 p-2">Topic </th>
                            <th class="border border-solid border-blue-500 p-2">insight</th>
                            <th class="border border-solid border-blue-500 p-2">Swot</th>
                            <th class="border border-solid border-blue-500 p-2">Url</th>
                            <th class="border border-solid border-blue-500 p-2">Region</th>
                            <th class="border border-solid border-blue-500 p-2">Start_year</th>
                            <th class="border border-solid border-blue-500 p-2">Impact</th>
                            <th class="border border-solid border-blue-500 p-2">Added</th>
                            <th class="border border-solid border-blue-500 p-2">Published</th>
                            <th class="border border-solid border-blue-500 p-2">City</th>
                            <th class="border border-solid border-blue-500 p-2">Countruy</th>
                            <th class="border border-solid border-blue-500 p-2">Relanvance </th>
                            <th class="border border-solid border-blue-500 p-2">Pestal</th>
                            <th class="border border-solid border-blue-500 p-2">Source</th>
                            <th class="border border-solid border-blue-500 p-2">Title</th>
                            <th class="border border-solid border-blue-500 p-2">Likelihood</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((item) => (
                            <tr key={item.serial_no} class="border border-solid border-blue-500 p-2">
                                <td class="border border-solid border-blue-500 p-2">{item.serial_no}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.end_year}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.citylng}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.citylat}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.intensity}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.sector}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.topic}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.insight}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.swot}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.url}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.region}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.start_year}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.impact}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.added}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.published}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.city}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.country}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.relavance}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.pestle}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.source}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.title}</td>
                                <td class="border border-solid border-blue-500 p-2">{item.likelihoot}</td>



                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </div>



    )
}

export default Article;