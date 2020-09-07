import React, { Component } from 'react';
import {DesignContext} from '../context';
import Loading from './Loading';
import Design from './Design';
import Title from './Title';

export default class FeaturedDesigns extends Component {
    static contextType = DesignContext;
    render() {
        let {loading, featuredDesigns : designs} = this.context;
        designs = designs.map(room => {
            return <Design key={room.id} room={room}/>
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                {loading?<Loading/>:designs}
                </div>
            </section>
        )
    }
}

