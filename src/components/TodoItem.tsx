type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
}

export default function TodoItem({id, title, complete} : TodoItemProps) {
    return <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer"/> 
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through">{title}</label>
    </li>
}

// peer is a class in tailwind
// also like this "class="peer" in js