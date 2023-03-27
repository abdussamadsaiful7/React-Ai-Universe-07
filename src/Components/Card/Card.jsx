import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';


const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const[singleData, setSingleData] = useState({});
    const [uniqueId, setUniqueId] = useState(null);
    //console.log(uniqueId);
   // console.log(singleData);
   
    const handleShowAll =()=>{
        setShowAll(true);
        
    }

    const handlerLess =()=>{
        setShowAll(false);
    }

    useEffect(()=>{
      // console.log("hello")
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res =>res.json())
        .then(data => setSingleData(data.data))
           
    },[uniqueId])
   
    useEffect(()=>{
        const loadData = async ()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            //console.log(value.data.tools);
            setData(value.data.tools);
        }
        loadData()
    },[]);

    //console.log(data);
    return (
        <>
            <div className='grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-10 my-6'>
            {
                // data.map((singleData)=> {
                //     console.log(singleData);
                //     return <SingleData singleData={singleData} key={singleData.id}/>
                // } )
                data.slice(0, showAll? 12:6).map((singleData) => <SingleData singleData={singleData} key={singleData.id} 
                setUniqueId={setUniqueId}/>)
            }
            </div>
            {
                !showAll && (<span onClick={handleShowAll}>
                    <Button>See More</Button>
                        </span>)
            }
            {
                showAll && (
                    <span onClick={handlerLess}>
                        <Button>See less</Button>
                    </span>
                )
            }
             <Modal singleData ={singleData}/>
        </>
    );
};

export default Card;