import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h2"/><Path fill={color} d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"/><Circle cx="14" cy="9" r="5" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M12 9a2 2 0 1 0 2-2"/><Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 9.5V11"/></G></Svg>
);
