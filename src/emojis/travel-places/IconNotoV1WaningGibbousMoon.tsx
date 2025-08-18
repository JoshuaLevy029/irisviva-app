import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1WaningGibbousMoon0" d="M.23 64c0 35.22 28.54 63.77 63.77 63.77c35.21 0 63.77-28.54 63.77-63.77C127.77 28.79 99.22.23 64 .23S.23 28.79.23 64"/></Defs><Use fill="#2f2f2f" href="#notoV1WaningGibbousMoon0"/><ClipPath id="notoV1WaningGibbousMoon1"><Use href="#notoV1WaningGibbousMoon0"/></ClipPath><Path fill="#fcc21b" d="M-14.84 64c0 35.22 25.82 63.77 57.69 63.77c31.85 0 57.68-28.54 57.68-63.77C100.53 28.79 74.7.23 42.85.23C10.98.23-14.84 28.79-14.84 64" clipPath="url(#notoV1WaningGibbousMoon1)"/></Svg>
);
