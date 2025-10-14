import { useEvent, useEventListener } from 'expo';
import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from 'expo-video';
import { Dimensions, StyleSheet, View } from "react-native";

const animation = require("@/assets/videos/animation.mp4");

const AnimationLoading = ({ onFinish }: { onFinish: () => void }) => {
    const dimensions = Dimensions.get('screen');
    const player = useVideoPlayer(animation, player => {
        player.loop = false;
        player.play();
    });
    
    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    useEventListener(player, 'playingChange', ({ isPlaying }) => {
        console.log('isPlaying', isPlaying);
        if (!isPlaying) {
            onFinish();
        }
    });

    return <View style={{ width: dimensions.width, height: dimensions.height, backgroundColor: '#FFFFFF' }}>
        <StatusBar style="light" hidden={true} translucent />
        <VideoView 
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            player={player} 
            nativeControls={false} 
        />
        {/* <Video
            source={require("@/assets/videos/animation.mp4")}
            style={{ width: dimensions.width, height: dimensions.height }}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping={false}
            onPlaybackStatusUpdate={(status) => {
                if (status.isLoaded && status.didJustFinish) {
                    onFinish();
                }
            }}
        /> */}
    </View>
}

export default AnimationLoading;