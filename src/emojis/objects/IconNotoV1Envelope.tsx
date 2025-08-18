import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#fcc21b" fillRule="evenodd" clipRule="evenodd"><Path d="M20.97 50.92v45.02h86.06V50.92L64 72.31z"/><Path d="M20.97 32.06v11.98L64 65.43l43.03-21.39V32.06z"/></G></Svg>
);
