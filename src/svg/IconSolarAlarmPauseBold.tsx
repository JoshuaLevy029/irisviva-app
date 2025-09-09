import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-5 2.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.541c-.184.076-.417.076-.883.076s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .541.541c.076.184.076.417.076.883zm-5 0v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 9 9.966 9 9.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C8 9.801 8 10.034 8 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.541c.184.076.417.076.883.076s.699 0 .883-.076a1 1 0 0 0 .541-.541c.076-.184.076-.417.076-.883" clipRule="evenodd"/></Svg>
);
