import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#fcc21b"><Path d="M71.926 83.696v40.31h-16.86v-40.31z"/><Path d="M83.65 111.532H43.34v-16.86h40.31zM63.5 4.68c-22.57 0-40.87 18.3-40.87 40.87s18.3 40.87 40.87 40.87s40.87-18.3 40.87-40.87S86.07 4.68 63.5 4.68m0 64.89c-13.26 0-24.02-10.75-24.02-24.02c0-13.26 10.75-24.02 24.02-24.02s24.02 10.75 24.02 24.02c0 13.26-10.76 24.02-24.02 24.02"/></G></Svg>
);
