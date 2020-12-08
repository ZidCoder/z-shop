import React from 'react'
// import propTypes from 'prop-types'


export default function Special({ data }) {
    return (
        <section className="container-fluid">
            <div className="row text-center header-section">
                <div className="col">
                    <h4 className="title-section font-weight-normal">
                        Special for you
            </h4>
                    <p className="font-weight-light text-section">special choice especially for you</p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center my-2">
                {
                    data.map((item, index) => {
                        return (

                            <div className="col-3" key={index}>
                                <div className="item-special">
                                    <div className="card" style={{ width: '100%', height: 180 }} ></div>
                                    <div className="img-special text-center">
                                        <img src={item.imageUrl} alt={item.category} style={{ width: 197, height: 276, zIndex: 2 }} className="rounded mx-auto d-block" onClick={() => alert('ok')} />
                                    </div>
                                    <div className="desc-card my-3 px-3">
                                        <div className="name-star">
                                            <p className="name-product">
                                                {item.name} <br /><span className="star font-weight-light">star</span>
                                            </p>
                                        </div>
                                        <div className="disc-price">
                                            <strike>
                                                <span className="disc font-weight-lighter">{`IDR.${item.disc}`}</span>
                                            </strike>
                                            <br />
                                            <span className=" price font-weight-light">{`IDR.${item.price}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}
