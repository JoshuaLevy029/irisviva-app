import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m2.652-11.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.061l-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clipRule="evenodd"/></Svg>
);
