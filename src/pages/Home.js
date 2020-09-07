import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedDesigns from '../components/FeaturedDesigns';

export default function Home () {
    return (
        <div>
        <Hero>
            <Banner title="Top Designs" subtitle="Most trending designs">
            <Link to='/designs' className="btn-primary">
                Our designs
            </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedDesigns/>
        </div>
    )
}
