import React, { useState } from 'react'
import {
  FlatList,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'
import ListItem from './ListItem'

type TodoTask = {
  id: number
  title: string
  isActive: boolean
}

const Todo = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState(Array<TodoTask>())
  return (
    <>
      <View>
        <Text>Add new task here!</Text>
        <TextInput
          placeholder="新規タスク名"
          value={taskTitle}
          onChangeText={text => {
            setTaskTitle(text)
          }}
        ></TextInput>
        <Button
          title="新規タスクを追加"
          onPress={() => {
            let task: TodoTask = {
              id: tasks.length + 1,
              title: taskTitle,
              isActive: true,
            }
            let newTasks = tasks.concat([])
            newTasks.push(task)
            setTasks(newTasks)
            setTaskTitle('')
          }}
        ></Button>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem title={item.title} isActive={item.isActive} />
        )}
        keyExtractor={item => item.id + ''}
      />
    </>
  )
}

export default Todo
