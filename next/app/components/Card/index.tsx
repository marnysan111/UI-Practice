import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type CardProps = {
    title: string
    content: string
    link: string
}

export type DataCardProps = {
    title: string
    content: string
}

export const Card = (props: CardProps) => {
    return (
        <Link href={props.link} className='group'>
            <div className="border-2 border-gray-300 rounded-lg break-words shadow">
                <div className="h-48 text-2xl font-bold flex items-center justify-center group-hover:scale-125">
                    {props.title}
                </div>
            </div>
            <div className="break-words pt-2 pr-2 pl-2 text-md font-medium">
                {props.content}
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

export const DataCard = (props: DataCardProps) => {
    return (
        <div className="border-2 border-gray-300 rounded-lg break-words shadow">
            <div className="h-40 border-b-2 text-2xl font-bold flex items-center justify-center">
                {props.title}
            </div>
            <div className="break-words p-3 flex justify-center ">
                {props.content}
            </div>
        </div>
    )
}
