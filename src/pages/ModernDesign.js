import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {DesignContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class ModernDesign extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = DesignContext;
    // componentDidMount(){}    //can be used instead of props
    render() {
        const {getDesign} = this.context;
        const design = getDesign(this.state.slug);
        if(!design){
            return (<div className="error">
              <h3>no such Design could be found...</h3>  
              <Link to='/designs' className="btn-primary">back to Designs</Link>
            </div>)
        }

        const {name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images} = design;
        const [mainImg,...defaultImg] =images;
        return (
            <div>
            <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner  title={`${name} design`}>
            <Link to ='/designs' className="btn-primary">
                back to Designs
            </Link>
            </Banner>
            </StyledHero>
                <section className="single-design">
                    <div className="single-design-images">
                    {defaultImg.map((item,index)=>{
                      return  <img key={index} src={item} alt={name}/>
                    })}
                    </div>
                    <div className="single-design-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price :${price}</h6>
                            <h6>size :{size} SQFT</h6>
                            <h6>Max capacity :{" "}
                            { capacity > 1 ? `${capacity} people` : `S{capacity} person`
                            } </h6>
                            <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="design-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>- {item}</li>
                        }
                        
                        )}
                    </ul>
                </section>
             </div>
        )
    }
}
