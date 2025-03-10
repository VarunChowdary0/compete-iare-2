import { useSearchParams } from 'next/navigation';
import React from 'react'

const page:React.FC = () => {

    const parms = useSearchParams();
    
    return (
    <div>page</div>
  )
}

export default page