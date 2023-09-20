import { useState } from "react";
import { bike0, bike1, bike2 } from "../assets/images";

import {  statistics } from "../constants";
import { Button } from "../components";
// import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  // const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>
          Saifi Auto Jahangirabad
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Book your two wheeler
          </span>
          <br />
          <span className='text-red-600 inline-block mt-3'>Bike</span> Service
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
         Get introducery offer !  book your Service at just  ₹ <span className='text-red-500 inline-block mt-3'><b className="">99   </b></span>&nbsp; &nbsp;<span className="text-decoration-line: line-through"><b>499</b></span> only
        </p>

        <Button label='Connect now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative fblock gap-10 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        {/* <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}> 
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div> */}
        <img
          src={bike0}
          alt='shoe colletion'
          width={500}
          height={502}
          className='object-contain relative z-10'
        />
         <img
          src={bike1}
          alt='shoe colletion'
          width={500}
          height={502}
          className='object-contain relative z-10'
        />
         <img
          src={bike2}
          alt='shoe colletion'
          width={500}
          height={502}
          className='object-contain relative z-10'
        />

        
      </div>
    </section>
  );
};

export default Hero;
