import React, { useMemo, useRef, useState } from "react"
import { Select, Spin } from "antd"
import debounce from "lodash/debounce"
import { AUTOCOMPLETE_API } from '@/app.config'

async function fetchAddressList(apiUrl: any, word: any) {
  return fetch(`${ apiUrl }${word}`)
    .then((response) => response.json())
    .then((res) => { 
      return res?.places?.map((place: any) => ({
        label: `${ place?.Address ? `${ place?.Address ?? '' }, ${ place?.area ?? '' }` : "" }`,
        value: `${ place?.Address ?? "" }`,
        key: `${ place?.uCode ?? "" }`,
        data: place ?? {}
      }))
    })
}

const DebounceSearch = ({ debounceTimeout = 500, onChange, value, placeholder, mode, apiUrl = AUTOCOMPLETE_API, ...props }: any) => {
  const [ fetching, setFetching ] = useState(false)
  const [ options, setOptions ]: any = useState([])
  const fetchRef = useRef(0)
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)
      fetchAddressList(apiUrl, value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }
        setOptions(newOptions)
        setFetching(false)
      })
    }
    return debounce(loadOptions, debounceTimeout)
  }, [ debounceTimeout ])

  const _onChange = (value: any, options: any) => {
    if (value === "None") {
      return onChange({ value: "None", label: "None" })
    }
    if (value === "All") {
      return onChange({ value: "All", label: "All" })
    }

    // Find Selected Option/Options
    let selectedOption
    if (mode === "multiple") {
      selectedOption = options.filter((o: any) => value.includes(o.value))
    } else {
      selectedOption = options?.find((o: any) => o.value === value?.value) ?? {
        value: "All",
        label: "All"
      }
    }
    return onChange(selectedOption)
  }

  return (
    <Select
      labelInValue
      filterOption={ false }
      onSearch={ debounceFetcher }
      notFoundContent={ fetching ? <Spin size="small" /> : null }
      placeholder={ placeholder }
      onChange={ (value: any) => _onChange(value, options) }
      showSearch={ true }
      { ...props }
      options={options}
    /> 
  )
}

export default DebounceSearch