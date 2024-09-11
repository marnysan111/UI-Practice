import { DataCard } from "@/components/Card"

export default function GridPage() {
    const contents: string[] = [
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge",
        "hoge"
    ]
    return (
        <div className="container mx-auto">
            <div className="bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500">
                コンテンツ
            </div>
            <div className="grid grid-cols-12">

                <div className="hidden xl:block xl:col-span-2">
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="サブコンテンツ"
                        />
                    </div>
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="サブコンテンツ"
                        />
                    </div>
                </div>
                {/* メインコンテンツ */}
                <div className="col-span-12 xl:col-span-8">
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="メインコンテンツ"
                        />
                    </div>
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="メインコンテンツ"
                        />
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <div className="m-2">
                                <DataCard
                                    title="hoge"
                                    content="メインコンテンツ"
                                />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="m-2">
                                <DataCard
                                    title="hoge"
                                    content="メインコンテンツ"
                                />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="m-2">
                                <DataCard
                                    title="hoge"
                                    content="メインコンテンツ"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block xl:col-span-2">
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="サブコンテンツ"
                        />
                    </div>
                    <div className="m-2">
                        <DataCard
                            title="hoge"
                            content="サブコンテンツ"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}