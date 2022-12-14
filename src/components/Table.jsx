import React from "react"
import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"

const Table = ()=> {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Completed",
      selector: (row) => (row.completed ? "Yes" : "No"),
    },
  ]

  useEffect(() => {
    fetchTableData()
  }, [])

  async function fetchTableData() {
    setLoading(true)
    const URL = "https://jsonplaceholder.typicode.com/todos"
    const response = await fetch(URL)

    const users = await response.json()
    setData(users)
    setLoading(false)
  }

  return (
    <div style={{ margin: "20px" }}>
      <button className="list">Add to List</button>
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}
export default Table