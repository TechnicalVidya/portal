import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react';

const MemberCard = ({ id, addNewMember, club }) => {
    const [loading, setLoading] = useState(false);

    const addTeamMember = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(
                `/api/club/add/member/${club}/${id.erpID}`
            );
            if (data.success) {
                addNewMember(data.data);
            }
        } catch (error) {
            console.error("Error adding team member:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-full px-4 py-2 hover:bg-muted border flex gap-2 items-center relative"
            onClick={addTeamMember}
        >
            <div>
                <img src={id.avatar} className="w-10 h-10 rounded-full" />
            </div>
            <div className="grid">
                <p className="capitalize">
                    {id.firstName + " " + id.lastName}
                </p>
                <p className="text-xs text-muted-foreground">
                    {id.erpID}
                </p>
            </div>
            <div className='ml-auto'>
                {
                    loading && <Loader />
                }
            </div>
        </div>
    );
};

export default MemberCard;