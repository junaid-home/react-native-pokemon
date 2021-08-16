import * as React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

export default function NoData({ style = {} }) {
  return (
    <View style={style.text}>
      <Text style={style.text}>No Data to Display!</Text>
    </View>
  )
}

NoData.propTypes = {
  style: PropTypes.object,
}
