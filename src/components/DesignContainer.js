import React from 'react';
import DesignFilter from './DesignFilter';
import DesignList from './DesignList';
import {withDesignConsumer} from '../context';
import Loading from './Loading';



function DesignContainer({context}){
const {loading,sortedDesigns,designs} = context;
    if (loading) {
            return <Loading />;
        }

            return (
                <div>
                    <DesignFilter designs ={designs} />
                    <DesignList designs={sortedDesigns} />
                </div>
            )
}


export default withDesignConsumer(DesignContainer);










// import React from 'react';
// import DesignFilter from './DesignFilter';
// import DesignList from './DesignList';
// import {DesignConsumer} from '../context';
// import Loading from './Loading';


// export default function DesignContainer() {
//     return (
//         <DesignConsumer>
//             { (value) => {
//                 const {loading,sortedDesigns,designs} = value
//                 if (loading) {
//                     return <Loading/>
//                 }

//                     return (
//                         <div>
//                             Hello from design Container
//                             <DesignFilter designs ={designs}/>
//                             <DesignList designs={sortedDesigns}/>
//                         </div>
//                     )
//                 }
//             }
        
//         </DesignConsumer>
//     )
// }
