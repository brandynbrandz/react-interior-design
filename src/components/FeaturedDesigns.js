import React, { Component } from 'react';
import {DesignContext} from '../context';
import Loading from './Loading';
import Design from './Design';
import Title from './Title';

export default class FeaturedDesigns extends Component {
    static contextType = DesignContext;
    render() {
        let {loading, featuredDesigns : designs} = this.context;
        designs = designs.map(design => {
            return <Design key={design.id} design={design}/>
        })

        return (
            <section className="featured-designs">
                <Title title="featured designs"/>
                <div className="featured-designs-center">
                {loading?<Loading/>:designs}
                </div>
            </section>
        )
    }
}

