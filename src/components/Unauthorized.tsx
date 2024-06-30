import { WarningOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

export default function Unauthorized() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <WarningOutlined className='text-9xl w-full text-center text-red-700' />
                <br />
                <p className='text-2xl'>
                    You are not authorized to access this page
                </p>
                <br />
                <div className=' text-center mt-4'>
                    <Link href='/' className='bg-blue-400 py-3 px-5 text-white hover:bg-blue-500 rounded-full'>Back to Home Page</Link>
                </div>
            </div>
        </div>
    )
}
