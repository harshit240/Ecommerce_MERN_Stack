import React from 'react'
import {Helmet} from 'react-helmet'
function MetaData(title) {
  // console.log(title.title);
  return (

    <>
      <Helmet>
        <title>
            {`${title.title} - ShopWebsite`}
        </title>
      </Helmet>
    </>
  )
}

export default MetaData
