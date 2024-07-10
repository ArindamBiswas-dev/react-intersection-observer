import './App.css'
import UsersTable from './components/UsersTable'

function App() {
  return (
    <main>
      <h1 className="text-2xl font-medium text-center">
        Optimize page loading speed with Intersection Observer API with React
      </h1>
      <p className="italic text-sm text-gray-600 mt-5 mb-10 text-center">
        Open to the network tab to see the network calls and scroll to bottom
      </p>
      <div className="flex flex-col gap-y-5">
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
        <UsersTable />
      </div>
    </main>
  )
}

export default App
