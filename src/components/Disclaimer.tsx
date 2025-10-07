import themeConfig from "@/config/theme.config"
import React from "react"
import { ScrollView } from "react-native"
import { Dialog, DialogContentProps, DialogProps, DialogScrollAreaProps } from "react-native-paper"
import Button, { ButtonProps } from "./Button"
import Typography, { TypographyProps } from "./Typography"

export interface DisclaimerProps {
    open: boolean
    hasTitle?: boolean
    title?: string | React.ReactNode
    titleProps?: TypographyProps
    content: string | React.ReactNode
    hasActions?: boolean
    actions: ({
        onAction?: () => void
        text: string | React.ReactNode
    } & Omit<ButtonProps, 'title'|'onPress'|'children'>)[]
    onClose?: () => void
    closeText?: string | React.ReactNode
    closeProps?: Omit<ButtonProps, 'title'|'onPress'|'children'>
    style?: DialogProps['style']
    sx?: DialogProps['style']
    scrollable?: boolean
    dialogProps?: Omit<DialogContentProps, 'children'> | Omit<DialogScrollAreaProps, 'children'>
}

export default function Disclaimer (props: DisclaimerProps) {
    const { open, hasTitle = true, title, titleProps = {}, content = '', hasActions = true, actions = [], onClose = () => {}, closeText = '', closeProps = {}, sx ={}, style = {}, scrollable = false, dialogProps = {} } = props;
    const { style: dialogStyle = {}, ...restDialogStyle } = dialogProps as DialogContentProps | DialogScrollAreaProps;

    const RenderAction = ({ action }: { action: DisclaimerProps['actions'][number] }) => {
        const { onAction, text, ...restButton } = action

        if (text && typeof text === 'string') {
            return (
                <Button onPress={onAction} title={text} {...restButton} />
            )
        }

        return (
            <Button onPress={onAction} {...restButton}>
                {text}
            </Button>
        )
    }

    return (
        <Dialog visible={open} onDismiss={onClose} style={{ backgroundColor: themeConfig.colors.background, ...(style as any), ...(sx as any) }}>
            {hasTitle && (
                <React.Fragment>
                    {title ? (
                        <Dialog.Title>
                            {typeof title === 'string' ? (
                                <Typography fontSize='h3' fontWeight='semibold' color='primary' {...titleProps}>{title}</Typography>
                            ) : title}
                        </Dialog.Title>
                    ) : (
                        <Dialog.Title>
                            ''
                        </Dialog.Title>
                    )}
                </React.Fragment>
            )}

            {scrollable ? (
                <Dialog.ScrollArea style={{ borderWidth: 0, borderColor: 'transparent', ...(dialogStyle as any) }} {...restDialogStyle}>
                    <ScrollView style={{ padding: 10, borderWidth: 0, borderColor: 'transparent' }}>
                        {typeof content === 'string' ? (
                            <Typography color='black'>{content}</Typography>
                        ) : content}
                    </ScrollView>
                </Dialog.ScrollArea>
            ) : (
                <Dialog.Content style={{ ...(dialogStyle as any) }} {...restDialogStyle}>
                    {typeof content === 'string' ? (
                        <Typography color='black'>{content}</Typography>
                    ) : content}
                </Dialog.Content>
            )}


            {hasActions && <Dialog.Actions>
                {typeof closeText === 'string' ? (
                    <Button onPress={onClose} title={closeText} {...closeProps} />
                ) : (
                    <Button onPress={onClose} {...closeProps}>
                        {closeText}
                    </Button>
                )}

                {actions.map((action, index) => <RenderAction key={`action-disclaimer-${index}`} action={action} />)}
            </Dialog.Actions>}
        </Dialog>
    )
}

export type useDisclaimerProps = DisclaimerProps & { openDisclaimer: (props: DisclaimerProps) => void; closeDisclaimer: () => void; }

export const useDisclaimer = (): useDisclaimerProps => {
    const [open, setOpen] = React.useState(false)
    const [hasTitle, setHasTitle] = React.useState<DisclaimerProps['hasTitle']>(true)
    const [title, setTitle] = React.useState<DisclaimerProps['title']>('')
    const [titleProps, setTitleProps] = React.useState<DisclaimerProps['titleProps']>({})
    const [content, setContent] = React.useState<DisclaimerProps['content']>('')
    const [hasActions, setHasActions] = React.useState<DisclaimerProps['hasActions']>(true)
    const [actions, setActions] = React.useState<DisclaimerProps['actions']>([])
    const [onClose, setOnClose] = React.useState<DisclaimerProps['onClose']>(() => {})
    const [closeText, setCloseText] = React.useState<DisclaimerProps['closeText']>('')
    const [closeProps, setCloseProps] = React.useState<DisclaimerProps['closeProps']>({})
    const [sx, setSx] = React.useState<DisclaimerProps['sx']>({})
    const [style, setStyle] = React.useState<DisclaimerProps['style']>({})
    const [scrollable, setScrollable] = React.useState<DisclaimerProps['scrollable']>(false)
    const [dialogProps, setDialogProps] = React.useState<DisclaimerProps['dialogProps']>({})

    const openDisclaimer = React.useCallback((props: DisclaimerProps) => {
        setOpen(true)
        setHasTitle(props.hasTitle ?? true)
        setTitle(props.title ?? '')
        setTitleProps(props.titleProps ?? {})
        setContent(props.content ?? '')
        setHasActions(props.hasActions ?? true)
        setActions(props.actions ?? [])
        setOnClose(() => props.onClose ?? (() => {}))
        setCloseText(props.closeText ?? '')
        setCloseProps(props.closeProps ?? {})
        setSx(props.sx ?? {})
        setStyle(props.style ?? {})
        setScrollable(props.scrollable ?? false)
        setDialogProps(props.dialogProps ?? {})
    }, [])

    const closeDisclaimer = React.useCallback(() => {
        setOpen(false)
        setHasTitle(true)
        setTitle('')
        setTitleProps({})
        setContent('')
        setHasActions(true)
        setActions([])
        setOnClose(() => {})
        setCloseText('')
        setCloseProps({})
        setSx({})
        setStyle({})
        setScrollable(false)
        setDialogProps({})
    }, [])

    return { openDisclaimer, closeDisclaimer, open, hasTitle, title, titleProps, content, actions, onClose, closeText, closeProps, sx, style, scrollable, dialogProps }
}