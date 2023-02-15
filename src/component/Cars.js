import React, { useState } from 'react';
import { CAR_LIST, PRICE_LIST } from './Comp'

export default function Cars() {
    const [search, setSearch] = useState('');
    // const mergedCarList = (arr1, arr2) => {
    //     const temp = [];

    //     arr1.forEach(x => {
    //         arr2.forEach(y => {
    //             if (x.id === y.car_id) {
    //                 temp.push({ ...x, ...y })
    //             }
    //         })
    //     })

    //     return temp;
    // }
    const mergedCarList = CAR_LIST.map((item, i) => {
        if (item.id === PRICE_LIST[i].car_id) {
          return Object.assign({}, item, PRICE_LIST[i]);
        }
    });
    const keys=['make','model'];
    const searchVal=(list)=>{
        if(search!==''){
            return list.filter((item)=>{
                keys.some((key)=> item[key].toLowerCase().includes(search))
            });
        }
    }

    return (
        <div>
            <div>
                <input placeholder='search' onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <ul>
                {mergedCarList.filter((carlist)=>{
                    carlist.make.toLowerCase().includes(search)
                }).map((ele) => {
                    return <li key={ele.id}>{ele.make} {ele.model}-{ele.type}-{ele.price}</li>
                })}
            </ul>
        </div>
    )
}