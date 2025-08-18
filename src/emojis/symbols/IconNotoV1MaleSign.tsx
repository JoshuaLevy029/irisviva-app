import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#fcc21b"><Path d="M119.175 9.018v41.26h-16.42V9.018z"/><Path d="M119.278 25.432h-41.26V9.012h41.26z"/><Path d="M110.389 29.414L78.873 60.93l-11.61-11.61l31.515-31.516z"/><Path d="M77.49 50.7c-15.96-15.96-41.84-15.96-57.8 0s-15.96 41.84 0 57.8s41.84 15.96 57.8 0s15.96-41.84 0-57.8M31.61 96.58c-9.38-9.38-9.38-24.58 0-33.96s24.58-9.38 33.96 0s9.38 24.58 0 33.96c-9.37 9.38-24.58 9.38-33.96 0"/></G></Svg>
);
