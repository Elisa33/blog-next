import Image from 'next/image';

export default function PostPrincipal() {
    return (
        <>
				<a className="overflow-hidden rounded-sm sm:rounded-2xl" href="">
					<Image
						className="object-cover w-full"
                        width={328} 
                        height={117}
						alt="blog photo"
						src="/img/photo-l.jpg"
						sizes="70vmin"
						/>
				</a>
				<div className="flex items-center gap-2 text-sm text-gray">
					<Image className="rounded-full" width={24} height={24} src="/img/author.jpg" alt="author article"/>
					<p className="sign">by Agustin Letta</p>
					<p className="text-lg font-bold">&#8226;</p>
					<p className="sign">Feb</p>
				</div>
				<h1 className="h1">Ready to charge more for creative work? Follow this proven process</h1>
				<button className="category">Developers</button>
				<p className="py-1 paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum perferendis nemo nesciunt, doloribus soluta fugit magnam.</p>
				<button className="flex items-center self-start gap-3 p-2 border border-blue">
					<p className="cta">Continue reading</p>
					<svg className="text-black fill-current dark:text-white" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.375C2 8.168 2.168 8 2.375 8h11a.375.375 0 0 1 0 .75h-11A.375.375 0 0 1 2 8.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61 3.61a.375.375 0 0 1 .53 0l4.5 4.5a.375.375 0 0 1 0 .53l-4.5 4.5a.375.375 0 0 1-.53-.53l4.235-4.235L8.61 4.14a.375.375 0 0 1 0-.53z"/></svg>
				</button>
			</>
    )
}
