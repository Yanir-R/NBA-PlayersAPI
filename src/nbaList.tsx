import React from 'react'
import { Player } from './player';

interface nbaListProps {
    nbaList: Array<Player>;
}

export const NbaList: React.FC<nbaListProps> = ({ nbaList = [] }) => {

    return (
        <>
            {nbaList.map((data, index) => {
                if (data) {
                    return (
                        <div key={data.first_name}>
                            <h1>data.first_name</h1>
                        </div>
                    )
                }
                return null
            })}
        </>
    );
}