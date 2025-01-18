import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSelector } from 'react-redux';
import { UpdateProfile } from './updateProfile';
import { Skeleton } from '@/components/skeleton/cardSkeletion';
import { useEffect, useState } from 'react';

const Profile = () => {
    const { user } = useSelector((state) => state.user)
    const [loading, setIsLoading] = useState(true)
    console.log(user)
    useEffect(() => {
        if (user) {
            setIsLoading(false)
        }
    })

    if (loading) {
        return (
            <div className="flex flex-col items-center h-dvh">
                <Skeleton className='w-screen h-[350px] pb-32 relative animate-pulse bg-muted-foreground/15' />
                <div className='flex flex-col absolute top-20 items-center w-full'>
                    <div className="relative w-full h-[25vh] flex items-center justify-center">
                        <Skeleton
                            className="rounded-full border-4 border-white bg-muted-foreground/15 shadow-lg w-[150px] h-[150px] animate-pulse"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center z-40">
                        <Skeleton className="h-8 bg-muted-foreground/15 rounded-md mb-4" />
                        <Skeleton className="h-6 bg-muted-foreground/15 rounded-md mb-2" />
                        <Skeleton className="h-6 bg-muted-foreground/15 rounded-md mb-2" />
                        <Skeleton className="h-6 bg-muted-foreground/15 rounded-md mb-2" />
                        <Skeleton className="h-6 bg-muted-foreground/15 rounded-md mb-2" />
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className="flex flex-col items-center">
            <div className='h-max pb-32 relative'>
                <video
                    className="w-svw h-[350px] object-cover rounded-xl brightness-[55%]"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/icons/LTCE_Mumbai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className='flex flex-col items-center absolute top-20 w-full'>
                    <div className="relative w-full h-[25vh] flex items-center justify-center">
                        <Avatar
                            className="rounded-full border-4 border-white shadow-lg w-[150px] h-[150px]"
                        >
                            <AvatarImage
                                src={user?.avatar}
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center z-40 mb-5">
                        <h1 className="text-2xl font-semibold">{user?.firstName + " " + user?.lastName}</h1>
                        <p className="text-gray-600">Branch: {user?.branch}</p>
                        <p className="text-gray-600">Gender: {user?.gender}</p>
                        <p className="text-gray-600">Batch: {user?.batch}</p>
                        <p className="text-gray-600">Date of Birth: {user?.dob}</p>
                    </div>
                    <UpdateProfile />
                </div>
            </div>
        </div >
    );
};

export default Profile;