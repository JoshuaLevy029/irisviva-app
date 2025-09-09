import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4-7.954v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66" clipRule="evenodd"/></Svg>
);
