'use client'

import { useState } from "react"

type Dictionary<T = any> = { [key: string]: T };

type Props = {
    items: Dictionary[]
}

export default function Table({ items }: Props) {
    const keys = Object.keys(items[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState("5");

    const startIndex = (currentPage - 1) * (itemsPerPage === "all" ? 0 : parseInt(itemsPerPage));
    const totalPage = itemsPerPage === "all" ? 1 : Math.ceil(items.length / parseInt(itemsPerPage));

    const setPageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(e.target.value)
        setCurrentPage(1)
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }
    return (
        <table className="w-full border text-left reactive overflow-x-auto">
            <thead>
                <tr className="border-b">
                    {keys.map((key) => (
                        <td className="px-6 py-4 font-medium" key={key}>{key}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.slice(startIndex, itemsPerPage === "all" ? items.length : startIndex + parseInt(itemsPerPage)).map((value, index) => (
                    <tr className="bg-white border-b hover:bg-gray-100" key={index}>
                        {keys.map((key) => (
                            <td className="px-6 py-3 text-gray-900 whitespace-nowrap" key={key}>{value[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="bg-white border-b">
                    <td colSpan={keys.length} className="py-2">
                        <select
                            value={itemsPerPage}
                            onChange={setPageSize}
                            className="p-2.5 m-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="all">ALL</option>
                        </select>
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`mx-1 px-3 py-1 border rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
