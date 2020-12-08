import Button from 'elements/Button'
import formatNumber from 'utils/number'
import React from 'react'

export default function Feature(props) {
    return (
        <section className="container section-featured" style={{ padding: '70px 0 70px 0' }} >
            <div className="row text-left header-section">
                <div className="col">
                    <h4 className="title-section font-weight-normal">
                        Featured
            </h4>
                    <p className="font-weight-light text-section">the popular choose of the most peoples</p>
                </div>
            </div>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return (
                            <div key={`featured-${index}`} className={`item column-3${index === 0 ? " row-2" : " row-1"}`}>
                                {
                                    index === 0 ? <div className="card card-featured index-1" >
                                        <div className="label-name text-right">
                                            <h5 className="name-product">
                                                Beauty <br />
                                                black
                                                <br /><span className="star font-weight-light">star</span>
                                            </h5>
                                            <strike>
                                                <span className="disc font-weight-lighter">{`IDR. ${formatNumber(item.disc)}`}</span>
                                            </strike>
                                            <br />
                                            <span className=" price font-weight-light">{`IDR. ${formatNumber(item.price)}`}</span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img src={item.imageUrl} alt={item.name} className="img-contain" />
                                        </figure>
                                        <div className="footer-card">
                                            <Button isPrimary isSmall type="link" className="btn add">add</Button>
                                            <Button isPrimary isSmall type="link" className="btn love">love</Button>
                                        </div>
                                    </div>
                                        :
                                        <div className="card card-featured index-n" style={{ height: 190 }}>
                                            <div className="label-name text-right">
                                                <h5 className="name-product">
                                                    {item.name} <br />
                                                    <span className="star font-weight-light">star</span>
                                                </h5>
                                                <strike>
                                                    <span className="disc font-weight-lighter">{`IDR. ${formatNumber(item.disc)}`}</span>
                                                </strike>
                                                <br />
                                                <span className=" price font-weight-light">{`IDR. ${formatNumber(item.price)}`}</span> <br />
                                                <Button isPrimary isSmall type="link" href="" className="btn mt-3">Add to chart</Button>
                                            </div>
                                            <figure className="img-wrapper">
                                                <img src={item.imageUrl} alt={item.name} className="img-cover" style={{ width: 131.5, height: 190 }} />
                                            </figure>
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}
