export default function Tag({ text }: { text: string }) {
    return <span className="finline-block text-xs font-medium tracking-wider uppercase text-purple-600">
        {text}
        </span>
}