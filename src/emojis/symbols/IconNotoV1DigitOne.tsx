import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fff" d="m47.33 46.63l7.51-2.15V85.7h-5.79c-.62 0-1.11.5-1.11 1.11v14.09c0 .62.49 1.11 1.11 1.11h29.93c.61 0 1.1-.49 1.1-1.11V86.8c0-.61-.49-1.11-1.1-1.11h-5.79V25.35c0-.34-.16-.66-.42-.86c-.26-.21-.6-.3-.93-.22l-25.05 5.38c-.5.11-.87.56-.87 1.08v14.84c0 .35.16.68.44.89c.28.2.64.27.97.17"/></Svg>
);
