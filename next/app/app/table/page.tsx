import Table from "@/components/Table"

type Product = {
    name: string;
    price: number;
    quantity: number;
    category: string;
};

const products: Product[] = [
    { name: "ノートパソコン", price: 99999, quantity: 10, category: "電子機器" },
    { name: "ヘッドホン", price: 19999, quantity: 50, category: "アクセサリー" },
    { name: "コーヒーメーカー", price: 7999, quantity: 20, category: "家電" },
    { name: "スマートフォン", price: 69999, quantity: 15, category: "電子機器" },
    { name: "オフィスチェア", price: 12999, quantity: 5, category: "家具" },
    { name: "ウォーターボトル", price: 1999, quantity: 100, category: "アクセサリー" },
    { name: "テレビ", price: 59999, quantity: 8, category: "電子機器" },
    { name: "デジタルカメラ", price: 49999, quantity: 12, category: "電子機器" },
    { name: "エアフライヤー", price: 12999, quantity: 30, category: "家電" },
    { name: "ブレンダー", price: 6999, quantity: 25, category: "家電" },
];


export default function TablePage() {
    return (
        <main>
            <div className="grid grid-cols-1 m-4">
                <h1>Table Page</h1>
                <Table
                    items={products}
                />
            </div>
        </main>
    )
}