import React, { Component, Fragment } from 'react'

import { connect } from 'redaction'

import styles from './CurrencySlider.scss'
import cssModules from 'react-css-modules'

import config from 'app-config'
import ItemsCarousel from 'react-items-carousel'

import { FormattedMessage } from 'react-intl'

import images from './images'


const symbol = (data) => (
  <a href="#" styleName="currencyAdd">
    <FormattedMessage id="CurrencySlider36" defaultMessage={data} />
  </a>
)

@connect(
  ({ currencies: { items: currencies } }) => ({
    currencies,
  })
)
@cssModules(styles, { allowMultiple: true })
export default class CurrencySlider extends Component {

  state = {
    children: [],
    activeItemIndex: 0,
  }

  render() {
    const { activeItemIndex, children } = this.state
    const { currencies } = this.props
    const curr = Object.values(currencies).map(item => item.name.toLowerCase())
    console.warn(Object.values(images))

    console.warn(Object.values(images))

    return (
      <Fragment>
        <div>
          <h3 styleName="availableCurrencies">
            <FormattedMessage id="CurrencySlider19" defaultMessage="Already available for exchange" />
          </h3>
          <div styleName="currencyListWrap">
            <ItemsCarousel
              gutter={12}
              activePosition="center"
              chevronWidth={60}
              numberOfCards={3}
              slidesToScroll={3}
              outsideChevron
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={value => this.setState({ activeItemIndex: value })}
              rightChevron={symbol('+')}
              leftChevron={symbol('-')}
            >
              {Object.values(images).map((item, index) => (
                <ul styleName="currencyList">
                  <li styleName={item !== 'eth' || item !== 'btc' ? 'currencyListItem' : `currencyListItem currencyListItem${item.toUpperCase()}`} key={index}>
                    <img key={index} src={item} alt="" />
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </Fragment>
    )
  }
}
