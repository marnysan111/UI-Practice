
type Props = {
    content: string
}

export default function Badge({ content }: Props) {
    return (
        <span>{content}</span>
    )
}