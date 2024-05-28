import React from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { AutocompleteModel } from './Autocomplete.model';

const AutocompleteComponent = (props: AutocompleteModel) => {
  const { options,linkUrl,loading,autocompleteProps,multiple} = props;
  const [linkOptions,setOptions] = React.useState(options)
  const [isLoading, setLoading] = React.useState(loading)
  const getOptionsList = (linkurl: any) => {
      setLoading(true)
      // fetch('https://jsonplaceholder.typicode.com/comments')
      fetch(linkurl)
      .then(response => response.json())
      .then((res) => {
        console.log('api result',res)
          // const resultArray = res.map((user: { name: any }) => user.name)
          setOptions(res)
          })
          .catch((error) => {
              console.log("ERROR");
              console.log(error);
          }).finally(() => setLoading(false))
      }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      
      <Autocomplete
        {...autocompleteProps}
        // id="custom-autocomplete-component"
        // disableClearable
        options= {linkOptions}
        loading={isLoading}
        onInputChange={(event, value, reason) => {
          linkUrl?
          getOptionsList(linkUrl):
          undefined
        }}
        onOpen={(event)=>{
          linkUrl?
          getOptionsList(linkUrl):
          undefined
        }}
        
        isOptionEqualToValue={
          autocompleteProps?.isOptionEqualToValue
            ? autocompleteProps.isOptionEqualToValue
            : (option, value) => {
                return value ? option.id === (value?.id ?? value) : false
              }
        }
        getOptionLabel={
          autocompleteProps?.getOptionLabel
            ? autocompleteProps.getOptionLabel
            : (option) => {
                return `${option?.label ?? option}`
              }
        }
        multiple={multiple}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};

export default AutocompleteComponent;
