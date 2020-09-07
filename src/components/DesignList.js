import React from 'react';
import Design from './Design';

export default function DesignList({designs}) {
    
    if(designs.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately no design matched your search parameters</h3>
            </div>
        )
    }
    
    return (
        <section className="designslist">
        <div className="designslist-center">
            {
                designs.map(item=>{
                    return <Design key={item.id} design={item}/>
                })
            }
        </div>
        </section>
    )
}
