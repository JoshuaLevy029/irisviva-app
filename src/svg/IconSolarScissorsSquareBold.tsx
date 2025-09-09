import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16.38 5.353a.75.75 0 0 0-1.026.268L12 11.346L8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45l-1.111 1.899a2.66 2.66 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55s1.204 2.55 2.625 2.55c.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.65 2.65 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55s-1.204-2.55-2.625-2.55c-.873 0-1.664.42-2.144 1.078l-1.112-1.898l3.778-6.45a.75.75 0 0 0-.268-1.027" clipRule="evenodd"/></Svg>
);
