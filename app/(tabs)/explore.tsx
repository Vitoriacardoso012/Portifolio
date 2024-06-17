import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {A} from"@expo/html-elements";
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/Logo1.png')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.linkedin.com/in/vitoria-cardoso-04a531314/")}}>
        <Image source={require('@/assets/images/11.png')} style={styles.icon} />
        <A style={styles.text} href='https://www.linkedin.com/in/vitoria-cardoso-04a531314/'>Linkedin</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("mailto:vitoriacardoso.vc61.vc@gmail.com")}}>
        <Image source={require('@/assets/images/22.png')} style={styles.icon} />
        <A style={styles.text} href='mailto:vitoriacardoso.vc61.vc@gmail.com'>Email</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://github.com/Vitoriacardoso012")}}>
        <Image source={require('@/assets/images/33.png')} style={styles.icon} />
        <A style={styles.text} href='https://github.com/Vitoriacardoso012'>Github</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("tel:5518997897123")}}>
        <Image source={require('@/assets/images/44.png')} style={styles.icon} />
        <A style={styles.text} href='tel:5518997897123'>Telefone</A>
        </Pressable>
        
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.instagram.com/vitoriacardosoo.s/")}}>
        <Image source={require('@/assets/images/55.png')} style={styles.icon} />
        <A style={styles.text} href='https://www.instagram.com/vitoriacardosoo.s/'>Instagram</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://x.com/vicardoso__s")}}>
        <Image source={require('@/assets/images/66.png')} style={styles.icon} />
        <A style={styles.text} href='https://x.com/vicardoso__s'>Twiter/X</A>
        </Pressable>



      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    width: 300,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color:'black'
    
  },
});