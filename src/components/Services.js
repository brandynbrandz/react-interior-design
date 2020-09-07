import React, { Component } from 'react';
import {FaSearchDollar} from 'react-icons/fa';
import {CgIfDesign} from 'react-icons/cg';
import {BiSelectMultiple} from 'react-icons/bi';
import {GiArmorUpgrade} from 'react-icons/gi';
import Title from './Title';

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaSearchDollar />,
                title:"Best Value for Money",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate!'
            },
            {
                icon:<CgIfDesign />,
                title:"Best Interior Design Service",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate!'
            },
            {
                icon:<BiSelectMultiple />,
                title:"A wide range of choices to pick",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate!'
            },
            {
                icon:<GiArmorUpgrade />,
                title:"DesignLift",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.Services.map((item,index) =>{
                    return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}
