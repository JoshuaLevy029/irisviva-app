import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1LastQuarterMoon0" d="M.24 64c0 35.21 28.54 63.77 63.76 63.77c35.21 0 63.77-28.55 63.77-63.77S99.22.23 64 .23S.24 28.78.24 64"/></Defs><Use fill="#2f2f2f" href="#notoV1LastQuarterMoon0"/><ClipPath id="notoV1LastQuarterMoon1"><Use href="#notoV1LastQuarterMoon0"/></ClipPath><Path fill="#fcc21b" d="M-24.89-17.32H64v158.99h-88.89z" clipPath="url(#notoV1LastQuarterMoon1)"/></Svg>
);
