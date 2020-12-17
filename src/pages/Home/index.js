import React, { Component } from 'react'

//Components
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import CtaSection from './CtaSection'

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <FeatureSection />
        <CtaSection />
      </>
    )
  }
}
