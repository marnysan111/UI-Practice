import { DataCard, Card } from "@/components/Card"

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
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                {contents.map((value, key) => (
                    <div className="col-span-3 m-4" key={key}>
                        <DataCard
                            title={value.title}
                            content={value.content}
                        />
                    </div>

                ))}
            </div>
            <div className="grid grid-cols-12">
                {contents.map((value, key) => (
                    <div key={key} className="col-span-3 m-4">
                        <Card
                            title={value.title}
                            content={value.content}
                            link="/card"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}