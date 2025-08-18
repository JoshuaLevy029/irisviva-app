import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#fcc21b" fillRule="evenodd" clipRule="evenodd"><Path d="M14.85 69.89v51.42h98.3V69.89L64 94.33z"/><Path d="M14.85 48.36v13.68L64 86.47l49.15-24.43V48.36z"/></G><Path fill="#ed6c30" d="M63.85 62.28L40.24 30.06h14.73V0h17.62v30.06h14.88z"/></Svg>
);
