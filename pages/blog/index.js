import PostPrincipal from '../../components/PostPrincipal'
import PostSecundario from '../../components/PostSecundario'
import Post from '../../components/Post'
import Layout from '../../components/Layout'

export default function index() {
    return (
        <Layout>
            <section className="grid-cols-12 gap-8 lg:grid">
                <article className="flex flex-col gap-6 lg:col-span-7">

                    <PostPrincipal/>
                </article>
                <aside className="flex flex-col gap-6 lg:col-span-5">
                    <PostSecundario/>
                    <PostSecundario/>
                </aside>
            </section>

            <section className="grid-cols-12 gap-8 mb-8 lg:grid">
			<div className="flex flex-col col-span-7 gap-5">
				{/* <!-- Last post --> */}
				<div className="flex gap-4 pt-8">
					<h2 className="h2">Últimos artículos</h2>
					<a className="text-blue" href="">Ver todas</a>
				</div>
				{/* <!-- Others post --> */}
				
				<Post/>
				<Post/>
				<Post/>
				<div className="flex items-center self-center max-w-xs gap-4">
					<div className="tag">Anterior</div>
					<button className="text-gray hover:text-blue">1</button>
					<button className="text-gray hover:text-blue">2</button>
					<button className="text-gray hover:text-blue">3</button>
					<button className="text-gray hover:text-blue">4</button>
					<div className="tag">Siguiente</div>
				</div>
			</div>

			<div className="flex flex-col gap-5 lg:col-span-5">
				{/* <!-- Tags --> */}
				<div className="hidden lg:block">
					<h2 className="pt-6 h2">Categorías</h2>
					<div className="flex flex-wrap gap-4 my-4">
						<button className="tag">Developers</button>
						<button className="tag">Designers</button>
						<button className="tag">Testers</button>
						<button className="tag">Managers</button>
						<button className="tag">Analyst</button>
						<button className="tag">Managers</button>
						<button className="tag">Designers</button>
						<button className="tag">Developers</button>
					</div>
				</div>
				{/* <!-- Advertising --> */}
				<div className="hidden w-full h-72 rounded-2xl bg-medium-gray lg:block"></div>
				{/* <!-- Subscription --> */}
				<div className="flex-col hidden gap-4 lg:flex">
					<h2 className="h2">Suscribite</h2>
					<div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repellendus incidunt eum numquam.</div>
					<div className="flex items-center gap-4 py-3">
						<input type="text" className="flex justify-start w-full px-4 py-2 bg-white rounded-full" placeholder="Email"/>
						<button className="w-full py-2 text-white rounded-sm bg-blue hover:shadow-md">
							<p className="">Recibir noticias :)</p>
						</button>
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
