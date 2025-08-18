import React from "react"
import { ScrollView, ViewProps } from "react-native"
import Button, { ButtonProps } from "./Button"

export type TabsProps<T=string> = {
    vertical?: boolean
    buttonProps?: ButtonProps
    options: {
        value: T
        label: string | React.ReactNode
    }[]
    activeTab: T
    setActiveTab: (tab: any) => void
    sx?: ViewProps['style']
} & ViewProps

export default function Tabs (props: TabsProps) {
    const { vertical = false, style = {}, sx = {}, buttonProps, activeTab, setActiveTab, options, ...restViewProps } = props
    const { style: buttonStyle = {}, sx: buttonSx = {}, ...restButtonProps } = buttonProps ?? {} as ButtonProps

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexDirection: vertical ? 'column' : 'row',
                ...(typeof style === 'object' && !Array.isArray(style) ? style : {}),
                ...(typeof sx === 'object' && !Array.isArray(sx) ? sx : {}),
            }}
            {...restViewProps}
        >
            {options.map((tab, index) => (
                <Button 
                    key={`tab-${tab.value}`} 
                    variant={activeTab === tab.value ? 'contained' : 'outlined'} 
                    size='small' 
                    title={tab.label} 
                    onPress={() => setActiveTab(tab.value)} 
                    sx={{ 
                        ...(index < options.length - 1 && vertical === false && { marginRight: 8 }),
                        ...(index < options.length - 1 && vertical === true && { marginBottom: 8 }),
                        ...(typeof buttonStyle === 'object' && !Array.isArray(buttonStyle) ? buttonStyle : {}),
                        ...(typeof buttonSx === 'object' && !Array.isArray(buttonSx) ? buttonSx : {}),
                    }} 
                    {...restButtonProps} 
                />
            ))}
        </ScrollView>
    )
}