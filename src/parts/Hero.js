import React from 'react'
import HeroImg2 from 'assets/hero-removebg-preview.png'
import Button from 'elements/Button'

export default function Hero() {

    const showSpecialProduct = () => {
        alert('ok')
    }
    return (
        <section className="pt-4 hero" >
            <div className="container">
                <div className="row align-item-center" style={{ width: "360" }}>
                    <div className="col-auto pr-5">
                        <h1 className="font-weight-bold line-height-1 mb-3" style={{ marginTop: 80 }}>
                            Choose Your Style.
                    </h1>
                        <p className="mb-5 text-hero font-weight-light text-gray w-75" style={{ lineHeight: "170%", marginTop: 20 }}>
                            Create your new style <br />
                    with our best selling product <br /> it's time to leave the old style.
                    </p>
                        <Button className="btn btn-shop" isPrimary hasShadow onClick={showSpecialProduct}>
                            Shop Now
                    </Button>
                    </div>
                    <div className="col-6 offset-md-1 pl-5 hero-img">
                        <div >
                            <img src={HeroImg2} alt="my-hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
