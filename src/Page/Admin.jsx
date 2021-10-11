import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Table from '../Components/Table';


function Admin() {
    // https://martserver.herokuapp.com/api/v1/product - all products
    // https://martserver.herokuapp.com/api/v1/product/11 - a specific
    const [items, setData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect ( ()=>{
        fetch('https://martserver.herokuapp.com/api/v1/product')
        .then ((response) => response.json())
        .then((json) => setData(json))
        .catch((err)=>console.log(err))
        .finally(()=>setloading(false))
        console.log(items);
    },[])
    return (
        <>
        <div className="first">
                <div className="side">
                    <ul>
                        <Link to ="/admin"><li>All items</li></Link>
                        <Link to ="/admin"><li>User</li></Link>
                    </ul>
                </div>
                <div className="body">
                    {loading ? "fetching Data": <Table data = {items}/>}
                </div>
        </div>
        </>
    )
}

export default Admin
