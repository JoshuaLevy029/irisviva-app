import bgEye from "@/constants/bgEye"
import { useWindowDimensions, View } from "react-native"
import Svg, { ClipPath, Defs, G, Image, Path, Use } from "react-native-svg"
import { Image as RNImage } from "react-native"
import Logo from '@/assets/images/logo-white.png'

export default () => {
    const dimension = useWindowDimensions()
    
    // Use the window width to ensure the SVG fills the full width of the screen
    return (
        <View style={{ width: '100%', position: 'relative' }}>
            <Svg
                width={dimension.width + 20}
                height={(dimension.width + 20) * (287.68 / 276.37)} // maintain aspect ratio
                viewBox="0 0 276.37 287.68"
                style={{
                    overflow: 'visible',
                }}
            >
                <Defs></Defs>
                <Path fill="#3D566B" d="M0,214.17c0,0,41.7,60.08,86.94,60.08s69.27-22.62,105.32-22.62s53.01,36.05,84.11,36.05V0H0 V214.17z"/>
            </Svg>

            <Svg
                width={dimension.width + 20}
                height={(dimension.width + 20) * (287.68 / 276.37)} // maintain aspect ratio
                viewBox="0 0 276.37 287.68"
                style={{
                    overflow: 'visible',
                    position: 'absolute',
                    top: -20
                }}
            >
                <Defs></Defs>
                <Path fill="#214566" d="M276.37,214.17c0,0-41.7,60.08-86.94,60.08c-45.24,0-69.27-22.62-105.32-22.62 S31.1,287.68,0,287.68V0h276.37V214.17z"/>
            </Svg>
            
            <View style={{ position: 'absolute', top: -40 }}>
                <View style={{ width: '100%', position: 'relative' }}>
                    <Svg
                        width={dimension.width + 20}
                        height={(dimension.width + 20) * (287.68 / 276.37)} // maintain aspect ratio
                        viewBox="0 0 276.37 287.68"
                        style={{
                            overflow: 'visible',
                        }}
                    >
                        <Defs></Defs>
                        <Path fill="#082543" d="M0,214.17c0,0,41.7,60.08,86.94,60.08c45.24,0,69.27-22.62,105.32-22.62s53.01,36.05,84.11,36.05 V0H0V214.17z"/>
                    </Svg>

                    <Svg
                        width={dimension.width + 20}
                        height={(dimension.width + 20) * (497.84 / 277.86)} // maintain aspect ratio
                        viewBox="0 0 277.86 497.84"
                        style={{
                            overflow: 'visible',
                            position: 'absolute',
                            top: -(287.68 / 2) + 20,
                            opacity: 0.3
                        }}
                    >
                        <G class="st0">
                            <Defs>
                                <Path id="XMLID_1_" d="M0.74,300.79c0,0,41.7,60.08,86.94,60.08c45.24,0,69.27-22.62,105.32-22.62 s53.01,36.05,84.11,36.05V86.62H0.74V300.79z"/>
                            </Defs>
                            <ClipPath id="XMLID_2_">
                                <Use xlinkHref="#XMLID_1_" />
                            </ClipPath>
                            <G style={{ clipPath: 'url(#XMLID_2_)' }}>
                                <Image width="1536" height="2752" xlinkHref={bgEye} transform="matrix(0.1809 0 0 0.1809 0 0)"></Image>
                            </G>
                        </G>
                    </Svg>
                </View>
            </View>

            <RNImage 
                source={Logo} 
                style={{ 
                    position: 'absolute', 
                    width: 130, 
                    height: 136.5, 
                    top: '50%', 
                    left: '50%',
                    transform: [{ translateX: -65 }, { translateY: -68.25 }] 
                }} 
            />
        </View>
    )
}