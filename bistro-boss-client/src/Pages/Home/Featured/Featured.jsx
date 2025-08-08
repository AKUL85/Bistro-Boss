import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/featured.jpg'
import './featured.css'

function Featured(props) {
    return (
        <div className='featured-image bg-fixed text-white pt-10 my-20'>
            <SectionTitle heading="Featured Item" subheading="Check It Out"></SectionTitle>
          <div className='flex justify-center items-center bg-slate-500 bg-opacity-40 pb-12 pt-8 px-36'>
              <div>
                <img className='w-3/4 h-3/4' src={featuredImage} alt="" />
            </div>
            <div className='md:lm-10'>
                <p>May 10,2025</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia unde, error aspernatur ipsam, corporis nisi tenetur architecto modi maxime adipisci quos quidem ipsa commodi vel!</p>
                <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
            </div>
          </div>
        </div>
    );
}

export default Featured;