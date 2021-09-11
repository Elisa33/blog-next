import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="grid grid-cols-4 gap-8 text-black pb-14 sm:grid-cols-3 lg:grid-cols-4 wrapper bg-medium-white dark:bg-black dark:text-light-gray">
		<div className="self-center col-span-4 justify-self-center sm:col-span-3 lg:col-span-1 lg:order-4">
			<Image className="" width={156} height={156} src="/img/logo-xl.jpg" alt="logotipo"/>
		</div>
		<div className="flex flex-col col-span-2 gap-3 sm:col-span-1 lg:col-span-1 lg:order-1" >
			<h3 className="h3">Navegación</h3>
			<a href="" className="link">Item</a>
			<a href="" className="link">Item</a>
			<a href="" className="link">Item</a>
			<a href="" className="link">Item</a>
		</div>
		<div className="flex flex-col col-span-2 gap-3 sm:col-span-1 lg:col-span-1 lg:order-3" >
			<h3 className="h3">About</h3>
			<a href="" className="link">Link</a>
			<a href="" className="link">Link</a>
			<a href="" className="link">Link</a>
			<a href="" className="link">Link</a>
		</div>
		<div className="flex flex-col col-span-4 gap-3 sm:col-span-1 lg:col-span-1 lg:order-2">
			<h3 className="h3" className="hidden sm:block">Social</h3>
			<div className="flex items-center justify-between gap-3 sm:items-start sm:flex-col">
				<a href="" className="flex flex-col items-center gap-2 sm:flex-row">
					<svg className="text-black fill-current dark:text-white" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					<p className="link">Item</p>
				</a>
				<a href="" className="flex flex-col items-center gap-2 sm:flex-row">
					<svg className="text-black fill-current dark:text-white" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					<p className="link">Item</p>
				</a>
				<a href="" className="flex flex-col items-center gap-2 sm:flex-row">
					<svg className="text-black fill-current dark:text-white" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					<p className="link">Item</p>
				</a>
				<a href="" className="flex flex-col items-center gap-2 sm:flex-row">
					<svg className="text-black fill-current dark:text-white" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 4.125a3.75 3.75 0 0 0-3.75 3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h8.25a3.75 3.75 0 0 0 3.75-3.75v-8.25a3.75 3.75 0 0 0-3.75-3.75h-8.25zm-5.25 3.75c0-2.9 2.35-5.25 5.25-5.25h8.25c2.9 0 5.25 2.35 5.25 5.25v8.25c0 2.9-2.35 5.25-5.25 5.25h-8.25a5.25 5.25 0 0 1-5.25-5.25v-8.25z"/><path d="M16.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z"/></svg>
					<p className="link">Item</p>
				</a>
			</div>
		</div>
	</footer>
    )
}
