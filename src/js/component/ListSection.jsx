import React from "react"

/** Converts children elems. in a todo-list row */
const ListSection = ({ children }) => (
    <div className="list-item">
        { children }
    </div>
)

export default ListSection