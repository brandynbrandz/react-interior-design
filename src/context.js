import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

// get entries for contentful
Client.getEntries({
    content_type: "interiorDesign"
})
.then((response) => console.log(response.items))

const DesignContext = React.createContext();
// <DesignContext.Provider value={"hello"}

class DesignProvider extends Component {
    state = {
        designs: [],
        sortedDesigns:[],
        featuredDesigns:[],
        loading: true,
        type: 'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        breakfast:false,
        pets:false
    };

    // getData
    getData = async () =>{
        try{
            let response = await Client.getEntries({
                content_type: "interiorDesign",
                order:"sys.createdAt"

                // group by price
                // order:"fields.price"

                // group by reverse price
                // order:"-fields.price"
            });
        let designs =this.formatData(response.items);
        let featuredDesigns = designs.filter(room => room.featured===true);
        let maxPrice = Math.max(...designs.map(item => item.price));
        let maxSize = Math.max(...designs.map(item =>item.size));

        this.setState({
            designs,
            featuredDesigns,
            sortedDesigns:designs,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        });

        } catch (error) {
            console.log(error)
        }
    }



    componentDidMount(){
        this.getData()
        
    }

    formatData(items){
        let tempItems= items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url);

            let room ={...item.fields,images,id};
            return room;
        });
        return tempItems;
    }
    getDesign = slug => {
        let tempDesigns = [...this.state.designs];
        const room = tempDesigns.find(room=>room.slug ===slug);
        return room;

    };

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox'?target.checked:target.value;
         const name = event.target.name;
         this.setState({
             [name]:value
         },
         this.filterDesigns
         )
        
    };
    filterDesigns = () => {
        let{
            designs,type,capacity,price,minSize,maxSize,pets,breakfast
        } = this.state
        // all the designs
        let tempDesigns = [...designs];

    // transform values
        // for guests capacity
        capacity = parseInt(capacity);

        // for price
        price = parseInt(price);


        //for room type 
        // filter by type
        if(type !== 'all'){
            tempDesigns = tempDesigns.filter(room => room.type ===type)
        };

        // filter by capacity
        if(capacity !==1){
            tempDesigns = tempDesigns.filter(room => room.capacity >=capacity)
        };
        // filter by price 
        tempDesigns = tempDesigns.filter(room => room.price <=price);

        // filter by size
        tempDesigns = tempDesigns.filter(room => room.size >=minSize && room.size <= maxSize)

        // filter by breakfast
        if(breakfast){
            tempDesigns = tempDesigns.filter(room => room.breakfast === true)
        };

        // filter by pets
        if(pets){
            tempDesigns = tempDesigns.filter(room => room.pets === true)
        };


        // change state
        this.setState({
            sortedDesigns: tempDesigns
        })


    };
    render() {
        return (
            <DesignContext.Provider value = {{...this.state, getDesign: this.getDesign,handleChange:this.handleChange}}>
            {this.props.children}
            </DesignContext.Provider>
        );
    }
}

const DesignConsumer = DesignContext.Consumer;

export function withDesignConsumer(Component){
    return function ConsumerWrapper(props){
        return <DesignConsumer>
            {value => <Component {...props} context ={value}/>}
        </DesignConsumer>
    }
};


export {DesignProvider,DesignConsumer,DesignContext};
