import img from '../../public/avatar.svg'
import Rate from './MUI/Rating.jsx'

const Review = ({ review }) => {
    return (
        <div className="flex gap-4 border border-gray-400 rounded-2xl p-3">
            <img className='size-24' src={img} alt="" />
            <div className='flex-1 flex flex-col gap-2'>
                <div className="flex justify-between">
                    <div>{review.user}</div>
                    {/* <div>{review.stars}</div> */}
                    <Rate data={review.stars} />
                </div>
                <div className='mt-2 h-full text-start'>{review.review}</div>
            </div>
        </div>
    )
}

export default Review
