import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { RootStackParamList } from "../../App";
import * as signalR from '@microsoft/signalr'
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: Props) {
  const connection = new signalR
    .HubConnectionBuilder()
    .withUrl(`http://localhost:5161/MovieHub`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .withHubProtocol(new signalR.JsonHubProtocol())
    .configureLogging(signalR.LogLevel.Information)
    .build();

  useEffect(() => {
    connection
      .start()
      .then(() => console.log("Connection started"))
  }, [])

  return (
    <Text>Home screen</Text>
  )
}