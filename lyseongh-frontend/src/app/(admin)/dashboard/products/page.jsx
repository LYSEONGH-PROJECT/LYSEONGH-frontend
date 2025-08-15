import { SearchIcon } from "lucide-react"

const SearchFilter = () => {
    return (
        <div className="bg-white p-2 mx-2 rounded-sm">
            <div className="bg-gray-100 w-[250px] flex gap-x-2 rounded-sm px-2 py-1">
                <SearchIcon color="gray" size={20}/>
                <input type="text" placeholder="Search products..." className="outline-none border-none bg-transparent text-gray-600"/>
            </div>
        </div>
    )
}

const page = () => {
  return (
    <div className="bg-blue-50 h-screen">
        <div className="max-w-7xl mx-auto">
            <SearchFilter />
        </div>
    </div>
  )
}

export default page
