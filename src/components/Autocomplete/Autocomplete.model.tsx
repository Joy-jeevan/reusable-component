import {  AutocompleteProps } from "@mui/material";


type AutoDefault = {
  id: string | number // must keep id in case of keepObject
  label: string
}

export interface AutocompleteModel<
Value = AutoDefault | string | any,
Multiple extends boolean | undefined = boolean | undefined,
DisableClearable extends boolean | undefined = boolean | undefined,
FreeSolo extends boolean | undefined = boolean | undefined
>{
    // Array of available options for the Autocomplete
    autocompleteProps?: Omit<
      AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
      'name' | 'options' | 'loading' | 'renderInput'
    >
    options: string[],
    loading?:boolean,
    linkUrl?:string,
    multiple?: Multiple
}  