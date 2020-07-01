import React, { Component } from 'react'
import MUIDataTable from 'mui-datatables'

const columns = ['time', 'value1', 'value2']

const data = [
  ['12-23-2020', '34', '23'],
  ['12-23-2020', '56', '24'],
  ['12-23-2020', '45', '54'],
  ['12-23-2020', '35', '22'],
  ['12-23-2020', '22', '12'],
  ['12-23-2020', '55', '51'],
  ['12-23-2020', '45', '51']
]

const options = {
  filterType: 'checkbox'
}

const CustomTable = () => {
  return (
    <MUIDataTable
      title={'Employee List'}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default CustomTable
