import Image from 'next/image'
import Layout from "../../components/Layout"
import Resultado from "../../components/Resultado"

export default function Resultados() {
    return (
        <Layout title='Articulo'>
        <section class="grid-cols-12 gap-8 lg:grid">
			{/* <!-- Search --> */}
			<div class="hidden w-full px-2 mt-6 border-b lg:col-start-3 lg:col-span-8 lg:flex items-center justify-between h-9 text-light-black focus-within:text-gray border-gray">
				 <input type="text" name="search" id="search" placeholder="Developers" class="pb-4 text-lg bg-transparent placeholder-gray"/>
				<Image width={20} height={20} src="/img/svg/glass.svg" class=" w-5 h-5 pointer-events-none" />

		   </div>
               
			{/* <!-- Results --> */}
			<div class="flex flex-col gap-6 mt-5 lg:col-start-3 lg:col-span-7">
			
				<h3 class="text-lg text-black dark:text-white">Resultados</h3>
				
                <Resultado/>
				
				
				<div class="flex items-center self-center max-w-xs gap-4">
					<div class="tag">Anterior</div>
					<button class="text-gray hover:text-blue">1</button>
					<button class="text-gray hover:text-blue">2</button>
					<button class="text-gray hover:text-blue">3</button>
					<button class="text-gray hover:text-blue">4</button>
					<div class="tag">Siguiente</div>
				</div>
			</div>
		</section>

		{/* <!-- Subscription --> */}
		<div class="flex flex-col justify-center gap-5 py-10 text-center">
			<h2 class="h2">Suscribite para enterarte de todo</h2>
			<div class="self-center lg:w-1/3 paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellendus incidunt eum numquam.</div>
			<button class="self-center px-8 py-2 text-white s rounded-xs bg-blue hover:shadow-md">
				<p class="">Suscribirse</p>
			</button>
		</div>
		<div class="w-full py-8 border-t border-medium-gray"></div>
        </Layout>
    )
}
