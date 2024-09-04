import { DataCard } from "@/components/Card"

type Content = {
    title: string
    content: string
}

export default function CardPage() {
    const contents: Content[] = [
        { title: "hoge1", content: "カードコンポーネント" },
        { title: "hoge2", content: "カードコンポーネント" },
        { title: "hoge3", content: "カードコンポーネント" },
        { title: "hoge4", content: "カードコンポーネント" }
    ]
    return (
        <>
            <div className="grid grid-cols-6">
                {contents.map((value, key) => (
                    <div key={key} className="m-4">
                        <DataCard
                            title={value.title}
                            content={value.content}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}