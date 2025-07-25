import React from 'react';
import Header from '../components/Header';
import Hero from '../components/hero';
import Body from '../components/body';
import Footer from '../components/footer';

const Page=()=>{
    return (
        <div className='flex-col'>
        <Header/>
        <Hero/>
        <Body/>
        <Footer/>

        </div>
    )
}
export default Page;
