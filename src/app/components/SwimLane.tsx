import React from 'react'

interface SwimLaneProps {
    title: string
}
const SwimLane = ({
    title
}: SwimLaneProps) => {
    return (
        // <div className='w-[300px] min-h-screen bg-white border rounded shadow'>SwimLane</div>
        <div className='flex-1 min-h-screen bg-white border border-r-0 border-gray-400 last:border-r-0'>
            <div className='w-full border-b border-gray-400 h-10'>
                {title}
            </div>
        </div>

    )
}

export default SwimLane