import { FilterProps } from "@/types/filter"
import { ChangeEvent } from "react"
import { useStateType } from "../../global"

export function onPage<Filter = FilterProps>(event: ChangeEvent<unknown>, page: number, setFilters: useStateType<Filter>): void {
  setFilters((prev: any) => ({ ...prev, page: page }))
}