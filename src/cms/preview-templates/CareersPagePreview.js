import React from 'react'
import PropTypes from 'prop-types'
import { CareerPageTemplate } from '../../templates/careers-page'

const CareerPagePreview = ({ entry, getAsset }) => {
  const jobs = entry.getIn(['data', 'jobs'])
  const blurbs = jobs ? jobs.toJS() : []

  return (
    <CareerPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      jobs={{ jobs }}
    />
  )
}

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CareerPagePreview
