import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const CardLoading = () => {
    return (
        <Card className='min-w-[300px] animate-pulse'>
            <CardHeader>
                <CardTitle className='bg-gray-200 h-6 rounded-md w-3/4'></CardTitle>
                <CardDescription className='bg-gray-200 h-4 rounded-md w-1/2 mt-2'></CardDescription>
            </CardHeader>
            <CardContent>
                <p className='bg-gray-200 h-4 rounded-md w-3/4 mb-2'></p>
                <p className='bg-gray-200 h-4 rounded-md w-1/2 mb-2'></p>
                <p className='bg-gray-200 h-4 rounded-md w-2/3'></p>
            </CardContent>
            <CardFooter>
                <p className='bg-gray-200 h-4 rounded-md w-1/4'></p>
            </CardFooter>
        </Card>
    )
}

export default function FormDisplay({ data, loading }) {
    console.log(data);
    if (loading)
        return (
            <div className='gap-10 flex'>
                <CardLoading />
                <CardLoading />
                <CardLoading />
            </div>
        );
    if (data.boarding)
        return (
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                    <Card className='min-w-[300px]'>
                        <CardHeader>
                            <CardTitle className='line-clamp-1 mb-3 font-serif'>
                                {data.boarding}
                            </CardTitle>
                            <CardDescription className={`w-max h-max p-2 rounded-2xl ${data.status == 'pending' ? 'bg-yellow-200 text-yellow-600' : data.status == 'approved' ? 'bg-green-200 text-green-700' : 'text-red-700 bg-red-200'}`}>
                                {data.status}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-md font-semibold'>Class:&nbsp;&nbsp;<b>{data.className}</b></p>
                            <p className='text-md font-semibold'>Duration:&nbsp;&nbsp;<b>{data.duration}</b></p>
                            <p className='text-md font-semibold'>Line:&nbsp;&nbsp;<b>{data.line}</b></p>
                        </CardContent>
                        <CardFooter>
                            <p className='text-md font-semibold'>{new Date(data.createdAt).toLocaleDateString()}</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    return (
        <p className='text-center w-full font-semibold text-xl'>No forms found</p>
    )
}
