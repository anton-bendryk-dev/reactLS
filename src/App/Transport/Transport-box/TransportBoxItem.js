import React from 'react';

const TransportBoxItem = ({
    image,
    name,
    CarryingCapacity,
    UsefulVolume,
    size,
    spaciousness,
    cargo,
    NotSuitableFor
}) => {
    return (
        <div className="TransportBoxItem">
            <img src={image} alt=''/>
            <h3>{name}</h3>
            <ul>
                <li>{CarryingCapacity}</li>
                <li>{UsefulVolume}</li>
                <li>{size}</li>
                <li>{spaciousness}</li>
                <li>{cargo}</li>
                <li>{NotSuitableFor}</li>
            </ul>
		</div>
    )
}
export default TransportBoxItem