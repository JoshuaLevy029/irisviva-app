import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

interface LoadingItemProps {}

export default () => {
    const dimensions = useWindowDimensions();

    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                minHeight: 50,
                padding: 16,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                width: dimensions.width - 32,
                marginBottom: 10,
                position: 'relative',
            }}
        >
            <ContentLoader 
                speed={2}
                width={dimensions.width - 32}
                height={40}
                viewBox={`0 0 ${dimensions.width - 32} 40`}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <Circle cx="20" cy="20" r="20" /> 
                <Rect x="54" y="0" rx="5" ry="5" width={dimensions.width/2} height="20" /> 
                <Rect x="53" y="30" rx="5" ry="5" width="80" height="10" />
            </ContentLoader>
        </View>
    );
}