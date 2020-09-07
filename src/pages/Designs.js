import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import DesignContainer from '../components/DesignContainer';

export default function Designs() {
    return (
        <>
        <Hero hero ="designsHero" >
            <Banner title="Our Designs">
                <Link to='/' className="btn-primary">
                Return Home
                </Link>
            </Banner>
        </Hero>
        <DesignContainer />
        </>
    )
}
