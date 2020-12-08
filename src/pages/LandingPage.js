import React, { Component } from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Special from 'parts/Special'
import landingPage from 'json/landingPage.json'
import Feature from 'parts/Feature'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refSpecialForYou = React.createRef()
    }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refSpecialForYou={this.refSpecialForYou} />
                <Special refSpecialForYou={this.refSpecialForYou} data={landingPage.special} />
                <Feature data={landingPage.featured} />
            </>
        )
    }
}
