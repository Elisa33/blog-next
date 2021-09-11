import Layout from "../../components/Layout"
import Image from 'next/image'
import Link from 'next/link'

export default function Articulo() {
    return (
        <Layout title='Articulo'>
            <section className="grid-cols-12 gap-8 lg:grid">
			{/* <!-- Principal post --> */}
			<div className="flex flex-col gap-6 lg:col-start-3 lg:col-span-8">
				<Link href="">
                    <a className="w-full overflow-hidden rounded-sm sm:rounded-2xl" >
                        <Image
                            className="w-full"
                            width={774}
                            height={480}
                            alt="blog photo"
                            src="/img/photo-xl.jpg"
                            sizes="70vmin"
                            />
                    </a>
                </Link>
				<div className="flex items-center gap-2 text-sm text-gray">
					<Image width={24}
                            height={24} className="w-6 rounded-full" src="/img/author.jpg" alt="author article"/>
					<p className="sign">by Agustin Letta</p>
					<p className="font-bold">&#8226;</p>
					<p className="sign">Feb</p>
				</div>
				<h1 className="h1">Ready to charge more for creative work? Follow this proven process</h1>
				<button className="category">Developers</button>
				{/* <!-- Resumen --> */}
				<p className="py-1 paragraph lg:hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolorum explicabo voluptatem. Illum reiciendis repellendus distinctio perspiciatis...
				</p>
			</div>
			{/* <!-- Index --> */}
			<div className="flex flex-col col-span-2 col-start-1 gap-2 my-4">
				<h3 className="dark:text-light-gray">Indice</h3>
				<button className="p-2 text-left border rounded-md border-light-blue text-blue hover:bg-light-blue hover:text-medium-black dark:border-blue dark:hover:text-white dark:hover:bg-blue">Introduccion</button>
				<button className="p-2 text-left border rounded-md border-light-blue text-blue hover:bg-light-blue hover:text-medium-black dark:border-blue dark:hover:text-white dark:hover:bg-blue">Subitulo1</button>
				<button className="p-2 text-left border rounded-md border-light-blue text-blue hover:bg-light-blue hover:text-medium-black dark:border-blue dark:hover:text-white dark:hover:bg-blue">Subtitulo2</button>
			</div>
			{/* <!-- Content --> */}
			<div className="flex flex-col col-span-7 gap-4 my-4">
				<p className="py-1 paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolorum explicabo voluptatem. Illum reiciendis repellendus distinctio perspiciatis, repudiandae, laboriosam asperiores earum praesentium delectus maxime aliquam! Quo maxime quia quos.
				</p>
				<p className="paragraph">Illo molestiae quidem recusandae mollitia blanditiis perferendis, odio omnis placeat dignissimos maiores rem vitae explicabo tempore doloribus fugit dolorem debitis aliquid corrupti inventore nisi? Quam officia iste consequatur quis minima!</p>
				<p className="paragraph">Animi vero error quos harum nesciunt tempora nobis dolorem, repellat exercitationem, nihil neque expedita fugit adipisci, veniam eos. Delectus labore dignissimos dolorem quasi culpa animi optio minus fugiat harum eligendi!</p>
				<h2 className="text-lg text-black">Subtitulo 1</h2>
				<Image width={673} height={417}className="hidden lg:block rounded-2xl" src="/img/subtitle-img.jpg" alt=""/>
				<p className="py-1 paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolorum explicabo voluptatem. Illum reiciendis repellendus distinctio perspiciatis, repudiandae, laboriosam asperiores earum praesentium delectus maxime aliquam! Quo maxime quia quos.
				</p>
				<p className="paragraph">Illo molestiae quidem recusandae mollitia blanditiis perferendis, odio omnis placeat dignissimos maiores rem vitae explicabo tempore doloribus fugit dolorem debitis aliquid corrupti inventore nisi? Quam officia iste consequatur quis minima!</p>
				<p className="paragraph">Animi vero error quos harum nesciunt tempora nobis dolorem, repellat exercitationem, nihil neque expedita fugit adipisci, veniam eos. Delectus labore dignissimos dolorem quasi culpa animi optio minus fugiat harum eligendi!</p>
				<h2 className="text-lg text-black">Subtitulo 2</h2>
				<p className="py-1 paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolorum explicabo voluptatem. Illum reiciendis repellendus distinctio perspiciatis, repudiandae, laboriosam asperiores earum praesentium delectus maxime aliquam! Quo maxime quia quos.
				</p>
				<p className="paragraph">Illo molestiae quidem recusandae mollitia blanditiis perferendis, odio omnis placeat dignissimos maiores rem vitae explicabo tempore doloribus fugit dolorem debitis aliquid corrupti inventore nisi? Quam officia iste consequatur quis minima!</p>
				<p className="paragraph">Animi vero error quos harum nesciunt tempora nobis dolorem, repellat exercitationem, nihil neque expedita fugit adipisci, veniam eos. Delectus labore dignissimos dolorem quasi culpa animi optio minus fugiat harum eligendi!</p>

			</div>
			{/* <!-- Subscription --> */}
			<div className="flex flex-col col-span-3 gap-4 my-4">
				<div className="flex items-center justify-between gap-3 p-4 bg-white rounded-xs lg:order-last">
					<a href="" className="flex flex-col items-center sm:flex-row">
						<svg className="fill-current text-blue" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					</a>
					<a href="" className="flex flex-col items-center sm:flex-row">
						<svg className="fill-current text-blue" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					</a>
					<a href="" className="flex flex-col items-center sm:flex-row">
						<svg className="fill-current text-blue" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					</a>
					<a href="" className="flex flex-col items-center sm:flex-row">
						<svg className="fill-current text-blue" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					</a>
				</div>
				<div className="flex-col justify-center hidden gap-4 text-center lg:text-left lg:flex">
					<h2 className="h2">Suscribite <span className="lg:hidden">para enterarte de todo</span></h2>
					<div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>			
					<a className="self-center px-8 py-2 text-white lg:hidden s rounded-xs bg-blue hover:shadow-md lg:w-10 lg:h-10">
						<p >Suscribirse</p>
					</a>
					<div className="flex items-center gap-2">
						<input className="w-40 h-8 px-4 py-2 bg-white rounded-full hidde lg:inline-block" placeholder="Email" type="text"/>
						<a href="" className="flex items-center self-start w-8 h-8 gap-3 p-2 rounded-xs bg-blue hover:shadow-md">
							<svg className="text-white fill-current dark:text-white" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.375C2 8.168 2.168 8 2.375 8h11a.375.375 0 0 1 0 .75h-11A.375.375 0 0 1 2 8.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61 3.61a.375.375 0 0 1 .53 0l4.5 4.5a.375.375 0 0 1 0 .53l-4.5 4.5a.375.375 0 0 1-.53-.53l4.235-4.235L8.61 4.14a.375.375 0 0 1 0-.53z"/></svg>
						</a>
					</div>
					
				</div>
			</div>
		</section>
		
		{/* <!-- Subscription --> */}
		<div className="flex flex-col justify-center gap-5 py-10 text-center">
			<h2 className="h2">Suscribite para enterarte de todo</h2>
			<div className="self-center lg:w-1/3 paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellendus incidunt eum numquam.</div>
			<button className="self-center px-8 py-2 text-white s rounded-xs bg-blue hover:shadow-md">
				<p className="">Suscribirse</p>
			</button>
		</div>
		<div className="w-full py-8 border-t border-medium-gray"></div>
            
            
        </Layout>
    )
}
