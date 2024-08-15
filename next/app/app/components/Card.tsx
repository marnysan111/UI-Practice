import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
type Props = {
    title: string
    content: string
    link: string
}

export default function Card({ title, content, link }: Props) {
    return (
        <Link href={link} className='group'>
            <div className="border-2 border-gray-300 rounded-lg break-words p-4 shadow">
                <div className="h-40 border-gray-200 text-2xl font-bold flex items-center justify-center group-hover:scale-125">{title}</div>
            </div>
            <div className="break-words pt-2 pr-2 pl-2 text-md font-medium">
                {content}
                <span className='border rounded-full pl-2 pr-2 items-center justify-center group-hover:bg-blue-700 ml-3'>
                    <ArrowForwardIcon
                        fontSize="small"
                        className='group-hover:text-white'
                    />
                </span>
            </div>
        </Link>
    )
}