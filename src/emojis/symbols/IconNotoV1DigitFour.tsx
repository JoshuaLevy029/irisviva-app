import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fff" d="M92.92 73.42H80.09V26.4c0-.18-.05-.33-.12-.47c0-.01 0-.03-.01-.04c-.01-.02-.04-.04-.05-.06c-.08-.11-.17-.21-.28-.29c-.04-.03-.07-.06-.11-.08c-.15-.08-.32-.13-.5-.13H62.64c-.17 0-.32.05-.47.12c-.04.02-.08.05-.12.08c-.1.07-.18.14-.26.24c-.02.02-.05.03-.06.06l-31.18 48.1c-.01.02-.01.05-.02.07c-.07.13-.12.27-.14.42c0 .02-.01.05-.01.08v13.18c0 .6.48 1.08 1.07 1.08h30.09v13.17c0 .6.49 1.08 1.09 1.08H79c.6 0 1.08-.48 1.08-1.08V88.75h12.83c.59 0 1.08-.48 1.08-1.08V74.5c.01-.59-.48-1.08-1.07-1.08M61.55 55.31v18.11H49.82z"/></Svg>
);
