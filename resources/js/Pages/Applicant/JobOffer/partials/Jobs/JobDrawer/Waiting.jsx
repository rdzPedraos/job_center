import { Skeleton } from '@mui/material';
import React from 'react';

function Waiting() {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-[70px_auto_70px] gap-5">
                <Skeleton variant="rounded" width={70} height="auto" />
                <div>
                    <Skeleton variant="text" height={50} />
                    <Skeleton variant="text" height={20} />
                </div>
                <Skeleton variant="rounded" width={70} height="auto" />
            </div>

            <div className="grid grid-cols-2 gap-5 h-[100px]">
                <Skeleton variant="rounded" height="auto" />
                <Skeleton variant="rounded" height="auto" />
            </div>

            <div>
                <Skeleton variant="rectangular" width={210} height={20} />
                <Skeleton variant="rectangular" height={250} className="mt-5" />
            </div>

            <Skeleton variant="rectangular" width={210} height={20} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rectangular" height={60} />
        </div>
    );
}

export default Waiting;
