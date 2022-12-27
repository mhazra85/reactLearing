import React, {useEffect, useState} from "react";
import './Car.css';
import { Button } from 'react-bootstrap';
import EmpDetails from './EmpDetails'

function Car(props) {
    const [apiData, setApiData] = useState(null);
    const [empDtls, setEmpDtls] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
            return res.json();            
        }).then((data)=>{
            setApiData(data);
        });
    },[]);
    let plceHolder = "Please type your name";
    function twoWayFun (){
        return plceHolder;
    }
    const texCenter = {
        textAlign: 'center',
    }

    const rmvEmp = (indx)=>{
        let data = [...apiData]
        data.splice(indx,1)
        setApiData(data);
    }

    const goToDtls = (empId)=>{
        const empResult = apiData.filter((val)=> val.id === empId);
        setEmpDtls(empResult[0]);
    }

    const listItems = apiData && apiData.map((myList)=>{   
        return <li key={myList.id}>
           ID: {myList.id} <br />
           Name: {myList.name} <br />
           User Name: {myList.username} <br />
           Pin: {myList.address.zipcode} <br />
           <Button variant="primary" onClick={(event)=>goToDtls(myList.id)}>Details</Button>
           <Button variant="danger" onClick={()=>rmvEmp(apiData.indexOf(myList))} style={{margin: '0 12px'}}>Remove</Button>
        </li>;   
    });   
    return(
        <>
        <h2>This is a {props.color} Car component</h2>
        <div style={texCenter}>
        <input type="text" name="name" value={plceHolder} onChange={twoWayFun} />
        <h3>{plceHolder}</h3>
        </div>
        <ul>{ listItems}</ul>
        <EmpDetails details={empDtls} />
        </>
    );
}

export default Car;