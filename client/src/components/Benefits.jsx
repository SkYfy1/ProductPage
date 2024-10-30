import React, { useState } from 'react'
import woman from '../assets/wide.avif'
import BenefitsCard from './BenefitsCard';

const obj = {
    'Sustainability': {
        main: 'Eco-Friendly',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    },
    'Comfort': {
        main: 'Dolor sit amet',
        text: 'Nullam malesuada sed leo sit amet consequat. Etiam posuere felis id diam pretium commodo. Integer congue ex ut suscipit efficitur. Suspendisse potenti. In ac ante est. Quisque luctus dui vitae egestas varius. Vestibulum elit nulla, finibus quis velit sed, vestibulum fermentum ex. Proin non ullamcorper massa, sed rhoncus dui. Integer pharetra sapien et est porta tincidunt. Aliquam non magna nulla. Aenean pretium a nulla vitae efficitur.',
    },
    'Durability': {
        main: 'Good materials',
        text: 'Morbi dolor massa, vehicula quis dolor ac, aliquam auctor eros. Maecenas dapibus turpis ante, vel rutrum lectus rutrum quis. Fusce placerat rutrum elit, eget finibus justo imperdiet vitae. Phasellus aliquam lectus elementum pretium laoreet. Phasellus elementum, augue sagittis efficitur consectetur, est erat condimentum ligula, sed venenatis purus nunc non nisi.',
    },
    'Versatility': {
        main: 'Lorem Ipsum',
        text: 'Proin eget dolor convallis massa lobortis congue et a purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci nulla, hendrerit et felis quis, aliquam varius dui. Nulla facilisi. Mauris at nisi eget odio porta placerat id commodo dolor. Duis gravida magna eget neque luctus ultricies. Mauris feugiat ipsum at orci vehicula pellentesque. ',
    }
}

const Benefits = () => {
    const [benefit, setBenefit] = useState('Sustainability');

    return (
        <div className='pb-6 lg:pb-44 text-ce'>
            <div className='lg:border-b flex flex-wrap gap-4 border-gray-400 text-xs lg:text-base font-medium text-gray-600'>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Sustainability' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Sustainability</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Comfort' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Comfort</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Durability' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Durability</button>
                <button onClick={(e) => setBenefit(e.target.textContent)} className={'Versatility' === benefit ? 'pb-2 border-b relative top-px px-2 border-blue-800 text-blue-800' : 'pb-2 px-2'}>Versatility</button>
            </div>
            <div className='md:h-56 flex flex-col lg:flex-row mt-6 gap-6'>
                <img src={woman} alt="nature" className='rounded-md lg:w-1/3 object-cover' />
                <BenefitsCard data={obj[benefit]}/>
            </div>
        </div>
    )
}

export default Benefits
