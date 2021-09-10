import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {

    const [menu, setMenu] = useState(false)

    const handleClick = ()=>{
        setMenu(!menu)
    }
    return (
        
	<header className="fixed z-10 w-full text-sm text-black bg-medium-white dark:bg-black dark:text-light-gray" id="top">
        {/* Mobile Menú */}
        <div className="xl:hidden">
            <div className="flex items-center justify-between p-4">
                <Link href="/">
                    <a className="hidden xl:block" >
                        <Image 
                        src='/img/logotipo.png'
                        width={328}
                        height={203}
                        alt="" />
                    </a>
                </Link>            
                <div className="items-center justify-center focus:outline-none " onClick={handleClick} aria-expanded="false">
                    <span className="sr-only">Abrir menú</span>
                    {menu ? 
                     
                    <Image className="hidden w-9 h-9" width={40} height={40} src="/img/svg/close.svg" alt="icono cerrar menu"></Image> :
                    <Image  className="block w-10 h-10" width={40} height={40} src="/img/svg/menu.svg" alt="icono abrir menu"></Image>
                }
                </div>

				<label htmlFor="search" className="flex items-center justify-between px-5 rounded-lg h-9 text-md text-light-black focus-within:text-gray bg-light-white w-72">
					 <input type="text" name="search" id="search" placeholder="Buscar" className="bg-light-white"></input>
					<Image src="/img/svg/glass.svg" width={20} height={20} className="w-5 h-5 transform pointer-events-none " />
			   </label>

            </div>
            {menu && 
            <div className="absolute z-20 flex flex-col justify-between w-full min-h-screen gap-4 p-6 sm:w-96 bg-medium-white xl:hidden dark:bg-black">
                <nav className="flex flex-col justify-start gap-4">
					<a className="nav-link" href="/">Home</a>
					<div className="relative flex flex-col dropdown">
						<div className="flex items-center">
						  <span className="nav-link">Dropdown</span>
						  <svg className="w-8 h-4 fill-current text-gray dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
						</div>
						<div className="absolute flex-col items-start hidden w-full gap-2 p-2 pt-2 mt-5 divide-y dropdown-menu bg-medium-white dark:bg-black rounded-xs divide-gray">
							  <a className="pt-2 nav-link" href="#">Item 01</a>
							  <a className="pt-2 nav-link" href="#">Item 02</a>
							  <a className="pt-2 nav-link" href="#">Item 03</a>
						</div>
					  </div>
					<a className="nav-link" href="/item">Item</a>
					<a className="nav-link" href="/item">Item</a>
				</nav>
				<div className="flex flex-col justify-start gap-3 pb-20 text-sm">
					{/* Dark mode toggle */}
					<div className="self-start">
						<input type="checkbox" className="hidden checkbox" id="chk" />
						<label className="flex items-center justify-start gap-2 px-4 py-1 duration-500 ease-in-out bg-white rounded-full cursor-pointer hover:bg-blue h-9 label group" for="chk">
							<svg id="dark-mode-svg" className="text-black fill-current group-hover:text-white" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 4.125c.207 0 .375.168.375.375v3a.375.375 0 0 1-.75 0v-3c0-.207.168-.375.375-.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.625 6c0-.207.168-.375.375-.375h3a.375.375 0 0 1 0 .75h-3A.375.375 0 0 1 11.625 6zM10.5 1.625c.207 0 .375.168.375.375v2a.375.375 0 0 1-.75 0V2c0-.207.168-.375.375-.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 3c0-.207.168-.375.375-.375h2a.375.375 0 0 1 0 .75h-2A.375.375 0 0 1 9.125 3zM6.35 2.6a.375.375 0 0 1 .467.47 5.377 5.377 0 0 0 6.611 6.613.374.374 0 0 1 .474.256c.02.07.019.143-.002.211A6.126 6.126 0 1 1 6.35 2.6zm-.398.93a5.376 5.376 0 1 0 7.019 7.018A6.128 6.128 0 0 1 5.95 3.53z"/></svg>
							<span id="dark-mode-span" className="text-black group-hover:text-white">Dark</span>
						</label>
					</div>
					<button className="self-start p-2 text-white rounded-sm bg-blue hover:shadow-md">Suscribirse</button>
				</div>
            </div>}
        </div>
        {/* Desktop Menu */}
        <div className="items-center justify-between hidden h-16 gap-8 xl:flex wrapper">
            <div className="flex items-center gap-8 text-sm ">
				<Link href="/"><a ><Image src="/img/logotipo.png" width={80} height={33} alt="logotipo"></Image></a></Link>
				<nav className="gap-6 text-sm tracking-widest text-gray mobile-menu xl:flex">
					<a className="nav-link" href="/">Home</a>
					<a className="nav-link" href="/categorias">Categorías</a>
					<div className="relative flex flex-col dropdown">
						<button className="flex items-center">
						  <span className="nav-link">Dropdown</span>
						  <svg className="w-8 h-4 fill-current text-gray dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
						</button>
						<div className="absolute flex-col items-start hidden gap-2 px-4 py-2 mt-5 divide-y dropdown-menu bg-medium-white dark:bg-black rounded-xs divide-gray">
							<a className="pt-2 nav-link" href="#">Item 01</a>
							<a className="pt-2 nav-link" href="#">Item 02</a>
							<a className="pt-2 nav-link" href="#">Item 03</a>
						</div>
					  </div>
					  
					<a className="nav-link" href="/item">Item</a>
					<a className="nav-link" href="/item">Item</a>
				</nav>
				<label htmlFor="search" className="flex items-center justify-between px-5 rounded-lg h-9 text-md text-light-black focus-within:text-gray bg-light-white w-72">
					 <input type="text" name="search" id="search" placeholder="Buscar" className="bg-light-white"/>
					<Image src="/img/svg/glass.svg" width={20} height={20} className="w-5 h-5 transform pointer-events-none " />
			   </label>
			</div>
			<div className="flex items-center gap-8 text-sm">
				{/* Dark mode toggle */}
				<div>
					<input type="checkbox" className="hidden checkbox" id="chk" />
					<label className="flex items-center justify-between gap-2 px-2 py-1 duration-500 ease-in-out bg-white rounded-full cursor-pointer hover:bg-blue h-9 label group" for="chk">
						<svg id="dark-mode-svg" className="text-black fill-current group-hover:text-white" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 4.125c.207 0 .375.168.375.375v3a.375.375 0 0 1-.75 0v-3c0-.207.168-.375.375-.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.625 6c0-.207.168-.375.375-.375h3a.375.375 0 0 1 0 .75h-3A.375.375 0 0 1 11.625 6zM10.5 1.625c.207 0 .375.168.375.375v2a.375.375 0 0 1-.75 0V2c0-.207.168-.375.375-.375z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 3c0-.207.168-.375.375-.375h2a.375.375 0 0 1 0 .75h-2A.375.375 0 0 1 9.125 3zM6.35 2.6a.375.375 0 0 1 .467.47 5.377 5.377 0 0 0 6.611 6.613.374.374 0 0 1 .474.256c.02.07.019.143-.002.211A6.126 6.126 0 1 1 6.35 2.6zm-.398.93a5.376 5.376 0 1 0 7.019 7.018A6.128 6.128 0 0 1 5.95 3.53z"/></svg>
						<span id="dark-mode-span" className="text-black group-hover:text-white">Dark</span>
					</label>
				</div>
				<button className="p-2 text-white rounded-sm h-9 bg-blue hover:shadow-md">Suscribirse</button>
			</div>
        </div>
    </header>
      
    )
}
