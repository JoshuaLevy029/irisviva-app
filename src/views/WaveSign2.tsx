import bgEye from "@/constants/bgEye"
import { useWindowDimensions, View } from "react-native"
import Svg, { ClipPath, Defs, G, Image, Path, Use } from "react-native-svg"
import { Image as RNImage } from "react-native"
import Logo from '@/assets/images/icon-white.png'

export default () => {
    const dimension = useWindowDimensions()
    
    // Use the window width to ensure the SVG fills the full width of the screen
    return (
        <View style={{ width: '100%', position: 'relative' }}>
            <Svg
                width={dimension.width + 20}
                height={(dimension.width + 20) * (142.97 / 276.37)} // maintain aspect ratio
                viewBox="0 0 276.37 142.97"
                style={{
                    overflow: 'visible',
                }}
            >
                <Defs></Defs>
                <Path fill="#3D566B" d="M0,69.46c0,0,41.7,60.08,86.94,60.08s69.27-22.62,105.32-22.62s53.01,36.05,84.11,36.05V0H0 V69.46z"/>
            </Svg>

            <Svg
                width={dimension.width + 20}
                height={(dimension.width + 20) * (142.97 / 276.37)} // maintain aspect ratio
                viewBox="0 0 276.37 142.97"
                style={{
                    overflow: 'visible',
                    position: 'absolute',
                    top: -20
                }}
            >
                <Defs></Defs>
                <Path fill="#214566" d="M276.37,69.46c0,0-41.7,60.08-86.94,60.08c-45.24,0-69.27-22.62-105.32-22.62 S31.1,142.97,0,142.97V0h276.37V69.46z"/>
            </Svg>

            <Svg
                width={dimension.width + 20}
                height={(dimension.width + 20) * (142.97 / 276.37)} // maintain aspect ratio
                viewBox="0 0 276.37 142.97"
                style={{
                    overflow: 'visible',
                    position: 'absolute',
                    top: -35
                }}
            >
                <Defs></Defs>
                <Path fill="#082543" d="M0,69.46c0,0,41.7,60.08,86.94,60.08c45.24,0,69.27-22.62,105.32-22.62s53.01,36.05,84.11,36.05 V0H0V69.46z"/>
            </Svg>

            <RNImage 
                source={Logo} 
                style={{ 
                    position: 'absolute', 
                    width: 90, 
                    height: 70.85, 
                    top: '30%', 
                    left: '50%',
                    transform: [{ translateX: -(90 * .5) }, { translateY: -(70.85 * .3) }] 
                }} 
            />
        </View>
    )
}