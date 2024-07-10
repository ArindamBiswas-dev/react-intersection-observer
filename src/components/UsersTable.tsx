import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const UsersTable = () => {
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  const [useres, setUsers] = useState([])
  const tableRef = useRef()
  const [isInView, setIsInView] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        )
        console.log(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    // fetchUserData()
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        // setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
          console.log('user table is in the viewport')
          fetchUserData()
        }
      },
      { threshold: 0.5 }
    )
    if (tableRef && tableRef?.current) {
      observer.observe(tableRef?.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [isInView])

  return (
    <div ref={tableRef} className="bg-slate-100 h-full px-5 py-5 rounded">
      <h2 className="font-medium mb-5">User Table</h2>
      {isInView && !loading ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <Skeleton count={5} baseColor="#e2e8f0" />
      )}
    </div>
  )
}

export default UsersTable
