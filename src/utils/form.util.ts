import { DateTime } from "luxon"
import { ChangeEvent } from "react"
import { useStateType } from "../../global"

export default ({ single = false }: { single?: boolean }) => {
    return {
        onChange: (setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (event: ChangeEvent<HTMLInputElement>) => {
            setStore((prev: any) => ({ ...prev, [event.target.name]: event.target.value }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [event.target.name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        },
        /* onSelect: (setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (event: SelectChangeEvent<unknown>) => {
            setStore((prev: any) => ({ ...prev, [event.target.name]: event.target.value }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [event.target.name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        }, */
        onDate: (name: string,setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (value: DateTime|null, context: any) => {
            setStore((prev: any) => ({ ...prev, [name]: value?.toFormat('yyyy-MM-dd') ?? null }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        },
        onTime: (name: string,setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (value: DateTime|null, context: any) => {
            setStore((prev: any) => ({ ...prev, [name]: value?.toFormat('HH:mm:ss') ?? null }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        },
        onDatetime: (name: string,setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (value: DateTime|null, context: any) => {
            setStore((prev: any) => ({ ...prev, [name]: value?.toFormat('yyyy-MM-dd HH:mm:ss') ?? null }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        },
        onCheck: (setStore: useStateType<any>, setErrors: useStateType<any> | undefined = undefined, additionalFunction: (() => void) | undefined = undefined) => (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
            setStore((prev: any) => ({ ...prev, [event.target.name]: checked }))

            if (setErrors !== undefined) {
                setErrors((prev: any) => ({ ...prev, [event.target.name]: null }))
            }

            if (additionalFunction !== undefined) {
                additionalFunction()
            }
        },
    }
}