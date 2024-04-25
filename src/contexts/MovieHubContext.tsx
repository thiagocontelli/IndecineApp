import * as signalR from '@microsoft/signalr';
import { ReactNode, createContext, useEffect } from "react";
import uuid from 'react-native-uuid';

interface IMovieHubContext {
  connection: signalR.HubConnection
  joinRoom(username: string): Promise<void>
}

export const MovieHubContext = createContext({} as IMovieHubContext)

export function MovieHubContextProvider({ children }: { children: ReactNode }) {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.EXPO_PUBLIC_API_URL}/MovieHub`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build();

  async function joinRoom(username: string) {
    if (!username.trim()) return
    const room = uuid.v4().toString()
    await connection.invoke('JoinRoom', { username, room })
  }

  useEffect(() => {
    connection
      .start()
      .then(() => console.log("Connection started"))
      .catch(error => console.log('Connection failed: ', error))
  }, [])

  return (
    <MovieHubContext.Provider
      value={{
        connection,
        joinRoom
      }}
    >
      {children}
    </MovieHubContext.Provider>
  )
}