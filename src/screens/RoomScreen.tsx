import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ImageBackground, Share, StyleSheet, View } from 'react-native';
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Room'>;

type Movie = {
  id: number
  title: string
  poster: string
}

export function RoomScreen(props: Props) {
  const { params: { roomId } } = props.route

  const movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
    }
  ]

  function inviteToRoom(roomId: string) {
    
  }

  function onSwipedRight(cardIndex: number) {

  }

  return (
    <SafeAreaView style={styles.container}>
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
        childrenOnTop
        stackSize={movies.length} />

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
});