import React from 'react';
import {useContext} from 'react';
import {DesignContext} from '../context';
import Title from '../components/Title';


// get all unique values for filtering
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function DesignFilter({designs}) {
    const context = useContext(DesignContext)
    const {
        handleChange,type,capacity,price,minPrice, maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    // get unique types
    let types = getUnique(designs,'type');

    // add all
    types = ['all',...types];

    // map to jsx
    types = types.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>)
    })

    // get unique capacity
    let people = getUnique(designs, 'capacity');
    people = people.map((item,index) =>{
        return <option key={index} value ={item}>{item}</option>
    })
    
    return (
        <section className="filter-container">
           <Title title="search designs"/>
            <form className="filter-form">
                {/* start select type */}
                <div className="form-group">
                <label htmlFor="type">Design type</label>
                    <select
                     name="type"
                      id="type"
                       value={type}
                        className="form-control"
                         onChange ={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* start guests */}
                <div className="form-group">
                <label htmlFor="capacity">guests</label>
                    <select
                     name="capacity"
                      id="capacity"
                       value={capacity}
                        className="form-control"
                         onChange ={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guests*/}

                {/* start design price */}
                    <div className="form-group">
                        <label htmlFor="price">Design price Ksh: {price}
                        </label>
                        <input type ="range" name ="price" min = {minPrice} max = {maxPrice} id="price" value ={price} onChange={handleChange} className="form-control" />
                    </div>
                {/* end design price */}

                {/* size */}
                <div className="form-group">
                   <label htmlFor="size">Design size</label>
                   <div className="size-inputs">
                    <input type="number" name ="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                    <input type="number" name ="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                   </div>
                </div>
                {/* end of size  */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" value={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" value={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
            
        </section>
        // {/* <div>
        //     Hello from Design Filter
        // </div> */}
    )
}
