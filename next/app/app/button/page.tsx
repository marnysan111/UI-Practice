'use client'
import { Button } from "@/components/Button";

export default function ButtonPage() {
    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
        <div className="container mx-auto">
            Button
            <Button
                size="md"
                variant="outline"
                onClick={handleClick}
            >ボタン</Button>

            {/* pagesで'use client'使ってるからなんかダメ */}
        </div>
    )
}