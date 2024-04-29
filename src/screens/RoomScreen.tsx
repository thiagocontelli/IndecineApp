import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Button, ImageBackground, StyleSheet, View } from 'react-native';
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Room'>;

type Movie = {
  id: number
  poster: string
}

export function RoomScreen(props: Props) {
  const { params: { roomId } } = props.route

  const [movies, setMovies] = useState<Movie[]>([])

  function inviteToRoom(roomId: string) {

  }

  function onSwipedRight(cardIndex: number) {

  }

  async function getMovies() {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/Movies`)
    const movies = await response.json()
    setMovies(movies)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {movies.length > 0 && (
        <Swiper
          cards={movies}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <ImageBackground source={{ uri: card.poster }} resizeMode="cover" style={styles.poster} />
              </View>
            )
          }}
          onSwipedRight={onSwipedRight}
          disableTopSwipe
          disableBottomSwipe
          backgroundColor="gray"
          stackSize={movies.length} />
      )}

      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <Button onPress={() => inviteToRoom(roomId)} title="Invite" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  poster: {
    flex: 1
  }
})