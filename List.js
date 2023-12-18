import React from "react";
export default function List(){
    const college=[{id:1,name:"one",age:14},
                    {id:2,name:"two",age:13},
                    {id:3,name:"three",age:17},
                    {id:4,name:"five",age:12}]
    const display=college.map((col)=><li key={col.id}>{col.id} {col.name} {col.age}</li>)
    return(
        <div>
            <h1>Students details</h1>
            <h5>    id name age</h5>
            {display}
        </div>
    )
}