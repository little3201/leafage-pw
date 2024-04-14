export default function TagList({ tags }: { tags: string[] }) {
    return (<div className="flex flex-row space-x-3 my-4">
        {tags.map(tag => (
            <span key={tag} className="finline-block text-xs font-medium tracking-wider uppercase text-purple-600">{tag}</span>))}
    </div>)
}