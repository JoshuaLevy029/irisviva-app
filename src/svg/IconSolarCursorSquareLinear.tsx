import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" strokeLinejoin="round" d="m14.859 16.5l-2.461-2.461l-.752.751c-.77.77-1.154 1.154-1.568 1.064c-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58s1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978s-.294.798-1.064 1.568l-.751.752l2.46 2.461c.256.255.383.382.442.524a.77.77 0 0 1 0 .593c-.059.142-.186.27-.441.524c-.255.255-.382.382-.524.441a.77.77 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441"/><Path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></G></Svg>
);
