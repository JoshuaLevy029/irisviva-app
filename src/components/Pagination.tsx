import { TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from "react-native"
import Icon from "./Icon"
import themeConfig from "@/config/theme.config"
import Typography, { TypographyProps } from "./Typography"
import React from "react"

export type PaginationProps = {
    page: number
    last: number
    onPage: (page: number) => void
    containerProps?: ViewProps
    arrowsProps?: TouchableOpacityProps
    arrows?: {
        previous: boolean
        next: boolean
        first: boolean
        last: boolean
    }
    icons?: {
        previous: React.ReactNode
        next: React.ReactNode
        first: React.ReactNode
        last: React.ReactNode
    }
    pageProps?: TouchableOpacityProps
    pageTextProps?: TypographyProps
}

export default function Pagination (props: PaginationProps) {
    const { page, last, onPage, containerProps, arrowsProps, arrows, pageProps, pageTextProps, icons } = props
    const { style: containerStyle = {} as any, ...restContainerProps } = containerProps ?? {} as ViewProps
    const { style: arrowsStyle = {} as any, ...restArrowsProps } = arrowsProps ?? {} as TouchableOpacityProps
    const { style: pageStyle = {} as any, ...restPageProps } = pageProps ?? {} as TouchableOpacityProps
    const { style: pageTextStyle = {} as any, sx: pageTextSx = {} as any, ...restPageTextProps } = pageTextProps ?? {} as TypographyProps

    const showButton = (button: 'previous' | 'next' | 'first' | 'last') => {
        if (arrows) {
            return arrows[button] === undefined ? true : arrows[button]
        }

        return true
    }
    
    return (
        <View 
            style={{ 
                width: '100%', 
                backgroundColor: 'white',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                borderRadius: 20, 
                paddingVertical: 6, 
                paddingHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                ...containerStyle
            }} 
            {...restContainerProps}
        >
          {showButton('first') && <TouchableOpacity
            onPress={() => onPage(1)}
            disabled={page === 1}
            style={{
              minWidth: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: 'transparent',
              opacity: page === 1 ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              ...arrowsStyle,
            }}
            {...restArrowsProps}
          >
            {icons?.first ?? <Icon name="IconSolarDoubleAltArrowLeftLinear" size={20} color={themeConfig.colors.gray.A700} />}
          </TouchableOpacity>}
          
          {showButton('previous') && <TouchableOpacity
            onPress={() => onPage(page > 1 ? (page - 1) : 1)}
            disabled={page === 1}
            style={{
              minWidth: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: 'transparent',
              opacity: page === 1 ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              ...arrowsStyle,
            }}
            {...restArrowsProps}
          >
            {icons?.previous ?? <Icon name='IconSolarAltArrowLeftLinear' size={20} color={themeConfig.colors.gray.A700} />}
          </TouchableOpacity>}

          {/* Page numbers */}
          {(() => {
            const pageNumbers = [];
            const current = page;
            
            // Show only the current page and its nearest neighbors (up to 2 before and after)
            let startPage = Math.max(1, current - 2);
            let endPage = Math.min(last, current + 2);

            // If on the first page, show first two neighbors (1,2,3)
            if (current === 1) {
              startPage = 1;
              endPage = Math.min(last, 3);
            }
            // If on the last page, show last two neighbors (last-2, last-1, last)
            else if (current === last) {
              startPage = Math.max(1, last - 2);
              endPage = last;
            }
            // If on the second page, show 1,2,3
            else if (current > 1 && current < last) {
              startPage = 1;
              endPage = Math.min(last, 3);
            }

            for (let i = startPage; i <= endPage; i++) {
              const isActive = i === current;
              pageNumbers.push(
                <TouchableOpacity
                  key={i}
                  onPress={() => onPage(i)}
                  style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: 32,
                    backgroundColor: isActive ? themeConfig.colors.main['A900'] : 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...pageStyle,
                    ...restPageProps,
                  }}
                >
                  <Typography
                    sx={{
                      color: isActive ? 'white' : themeConfig.colors.gray.A700,
                      fontWeight: isActive ? 'bold' : 'normal',
                      fontSize: 14,
                      ...pageTextStyle,
                      ...pageTextSx,
                    }}
                    {...restPageTextProps}
                  >
                    {i.toString()}
                  </Typography>
                </TouchableOpacity>
              );
            }
            
            return pageNumbers;
          })()}

          {showButton('next') && <TouchableOpacity
            onPress={() => onPage(page < last ? (page + 1) : last)}
            disabled={page === last}
            style={{
              minWidth: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: 'transparent',
              opacity: page === last ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              ...arrowsStyle,
            }}
            {...restArrowsProps}
          >
            {icons?.next ?? <Icon name='IconSolarAltArrowRightLinear' size={20} color={themeConfig.colors.gray.A700} />}
          </TouchableOpacity>}
          
          {showButton('last') && <TouchableOpacity
            onPress={() => onPage(last)}
            disabled={page === last}
            style={{
              minWidth: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: 'transparent',
              opacity: page === last ? 0.5 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              ...arrowsStyle,
            }}
            {...restArrowsProps}
          >
            {icons?.last ?? <Icon name="IconSolarDoubleAltArrowRightLinear" size={20} color={themeConfig.colors.gray.A700} />}
          </TouchableOpacity>}
        </View>
    )
}