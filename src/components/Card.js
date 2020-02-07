import React from 'react'

function ItemsCard(props) {
    return (
        <div className='card'>
            {/* <img alt={props.item.ownerId} src={props.item.photos.length ? `https://images.nobroker.in/images/${props.item.ownerId}/${props.item.photos[0].imagesMap['thumbnail']}` : 'https://images.nobroker.in/static/img/resale/1bhk.jpg'} /> */}
            <img alt={props.item.ownerId} src='https://images.nobroker.in/static/img/resale/1bhk.jpg' />

            <div className='proerty-details'>
                <p>{props.item.title}</p>
                <p>{props.item.rent}</p>
            </div>
        </div>
    )
}

export default ItemsCard
