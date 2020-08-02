import React from 'react';

import './styles.scss'

type TagProps = {
    value: string;
    status?: 'danger' | 'success'
}

export const Tag: React.FC<TagProps> = ({value, status}) => {

    return (
        <div className={"tag " + (status != null ? status : "")} >
            {value}
        </div>
    )
}
