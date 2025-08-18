import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fff" d="M81.67 61.25c4.09-3.93 6.51-9.25 6.51-15.38c0-12.98-10.75-22.41-25.57-22.41c-14.81 0-25.56 9.43-25.56 22.41c0 6.13 2.42 11.45 6.51 15.38c-5.8 4.45-9.32 11.08-9.32 18.88c0 14.41 11.93 24.87 28.38 24.87S91 94.54 91 80.13c0-7.81-3.52-14.43-9.33-18.88m-19.06-6c-.26 0-.51.02-.76.03c-5.4-.34-9.27-4.17-9.27-9.41c0-5.49 4.22-9.48 10.03-9.48c5.82 0 10.04 3.98 10.04 9.48c0 5.24-3.86 9.07-9.27 9.41c-.26-.01-.5-.03-.77-.03m0 14.35c6.47 0 11.15 4.43 11.15 10.53c0 6.09-4.68 10.52-11.15 10.52c-6.45 0-11.13-4.42-11.13-10.52S56.16 69.6 62.61 69.6"/></Svg>
);
