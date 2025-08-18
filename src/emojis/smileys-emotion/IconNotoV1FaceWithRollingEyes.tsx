import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fcc21b" d="M63.8 9.5c-62.5 0-64 70.1-64 83.9c0 13.9 28.7 25.1 64 25.1s64-11.2 64-25.1c0-13.8-1.5-83.9-64-83.9"/><Path fill="#2f2f2f" d="M75.6 94.8h-24c-1.6 0-2.9-1.5-2.9-3.3s1.3-3.3 2.9-3.3h24c1.6 0 2.9 1.5 2.9 3.3s-1.3 3.3-2.9 3.3"/><Ellipse cx="87.4" cy="58.8" fill="#fff" rx="16.6" ry="16.3"/><Defs><Ellipse id="notoV1FaceWithRollingEyes0" cx="87.4" cy="58.8" rx="16.6" ry="16.3"/></Defs><ClipPath id="notoV1FaceWithRollingEyes1"><Use href="#notoV1FaceWithRollingEyes0"/></ClipPath><Circle cx="83.5" cy="47" r="7.9" fill="#2f2f2f" clipPath="url(#notoV1FaceWithRollingEyes1)"/><Ellipse cx="40.6" cy="58.8" fill="#fff" rx="16.6" ry="16.3"/><Defs><Ellipse id="notoV1FaceWithRollingEyes2" cx="40.6" cy="58.8" rx="16.6" ry="16.3"/></Defs><ClipPath id="notoV1FaceWithRollingEyes3"><Use href="#notoV1FaceWithRollingEyes2"/></ClipPath><Circle cx="36.7" cy="47" r="7.9" fill="#2f2f2f" clipPath="url(#notoV1FaceWithRollingEyes3)"/><Path fill="#fcc21b" d="M23.6 72h34.2v8.7H23.6zm46.6 0h34.2v8.7H70.2z"/></Svg>
);
