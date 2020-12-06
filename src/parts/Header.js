import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {
    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? "active" : " "
    }
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse-navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/feature")}`}>
                                <Button className="nav-link" type="link" href="/feature">
                                    Feature
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/about")}`}>
                                <Button className="nav-link" type="link" href="/about">
                                    About
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/contact")}`}>
                                <Button className="nav-link" type="link" href="/contact">
                                    Contact
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <Button type="link" href="/cart" className="cart">
                        Cart <span className="badge badge-pill badge-primary">9</span>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
