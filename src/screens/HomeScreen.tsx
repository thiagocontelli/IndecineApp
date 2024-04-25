import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { RootStackParamList } from "../../App";
import { MovieHubContext, MovieHubContextProvider } from "../contexts/MovieHubContext";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: Props) {
  const c = useContext(MovieHubContext)
  
  const [username, setUsername] = useState('')

  useEffect(() => {
    c.connection.on('JoinRoomSucceded', (roomId: string) => {
      props.navigation.navigate('Room', { roomId })
    })

    c.connection.on('JoinRoomFailed', (errorMessage: string) => {
      Alert.alert('Error', errorMessage)
    })
  }, [])
  
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, gap: 32 }}>
      <TextInput placeholder="Enter your username..." value={username} onChangeText={setUsername} />
      <Button onPress={() => c.joinRoom(username)} title="Join room" />
    </View>
  )
}