import React from 'react'

function List(props) {
    return (
        <div className='list'>
            {/* <img alt={props.item.ownerId} src={props.item.photos.length ? `https://images.nobroker.in/images/${props.item.ownerId}/${props.item.photos[0].imagesMap['original']}` : 'https://images.nobroker.in/static/img/resale/1bhk.jpg'} /> */}
            <img alt={props.item.ownerId} src='https://images.nobroker.in/static/img/resale/1bhk.jpg' />
            <div className='list-body'>
                <div className='list-details'>
                    <p>Title: <span>{props.item.title}</span></p>
                    <p>Locality <span>{props.item.locality}</span></p>
                </div>
                <div className='list-details'>
                    <p>furnishingDesc: <span>{props.item.furnishingDesc} </span></p>
                    <p>type: <span>{props.item.type} </span></p>
                </div>
                <div className='list-details'>
                    <p>rent: <span>{props.item.rent} </span></p>
                    <p>propertyType:  <span>{props.item.propertyType} </span></p>
                </div>
            </div>
        </div>
    )
}

export default List
