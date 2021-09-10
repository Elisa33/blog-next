import Image from 'next/image'
export default function Post() {
    return (
        <article className="flex flex-col gap-4 p-8 bg-white rounded-default dark:bg-medium-black">
            <div className="flex items-center justify-between gap-2 text-sm text-gray">
                <div className="flex gap-2">
                    <Image className="w-6 rounded-full" width={24} height={24} src="/img/author.jpg" alt="author article"/>
                    <p className="sign">by Agustin Letta</p>
                </div>
                <button className="category">Developers</button>
            </div>
            <h2 className="h2">Ready to charge more for creative work? Follow this proven process</h2>
            <p className="py-1 paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum perferendis nemo nesciunt, doloribus soluta fugit magnam.</p>
		</article>
    )
}
