import { Card } from "@/components/Card";
type Content = {
  title: string
  content: string
  link: string
}

export default function Home() {
  const contents: Content[] = [
    { title: "カードコンポーネント", content: "カードコンポーネント。というかこれ", link: "card" },
    { title: "グリッド", content: "Gridを使ったレイアウト", link: "grid" },
    { title: "テーブルコンポーネント", content: "データテーブルを使ったUI", link: "table" },
    { title: "グラフ", content: "いろんなグラフを作ってみよう", link: "chart" }
  ]

  return (
    <main className="">
      <div className="grid grid-cols-2">
        {contents.map((value, key) => (
          <div key={key} className="m-4">
            <Card
              title={value.title}
              content={value.content}
              link={value.link}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
