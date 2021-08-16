import * as React from 'react'
import PropTypes from 'prop-types'
import { EvilIcons } from '@expo/vector-icons'
import { TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function Input({ leftIconName, onSubmit, ...props }) {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        {leftIconName && (
          <EvilIcons style={styles.icon} name={leftIconName} size={24} color="grey" />
        )}
        <TextInput
          onSubmitEditing={onSubmit}
          style={[styles.input, !leftIconName && { paddingHorizontal: 16 }]}
          {...props}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

Input.propTypes = {
  leftIconName: PropTypes.string,
  onSubmit: PropTypes.func,
}

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 8,
    paddingRight: 3,
  },

  input: {
    width: '100%',
    color: '#333',
    fontSize: 15,
    fontWeight: '300',
    paddingVertical: 6,
  },
  container: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 1,
  },
})
