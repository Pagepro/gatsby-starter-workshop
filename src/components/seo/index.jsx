import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({ pageTitle, meta }) => {
  const { title, description, author } = {} // query it

  return (
    <Helmet
      title={pageTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
