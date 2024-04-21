import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FAB } from '@rneui/themed';

type TodoProps = {
  title: string
  isActive: boolean
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  active: {
    backgroundColor: "#7EC8E3",
  },
  complete: {
    backgroundColor: "#808080",
  }
})

const ListItem = (props: TodoProps) => {
  return (
    <View style={props.isActive ? styles.active : styles.complete}>
      <Text style={{ fontSize: 42 }}>{props.title}</Text>
      <FAB
        title="完了"
        placement="right"
        icon={{ name: 'add', color: 'white' }}
        color="green"
      />
    </View>
  )
}

export default ListItem;