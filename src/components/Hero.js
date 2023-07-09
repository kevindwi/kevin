
export default function Hero({ content }) {
	const items = content[0]; 
	// console.log(content)
  return (
		<>
			{ content.length > 0  &&
				<section id="aboutSection" className="flex flex-col justify-center scroll-mt-28 py-48 md:py-64 text-center">
					<h1 className="mb-2 text-4xl leading-none tracking-tight text-white md:text-5xl">Hi, i{"'"}m <span className="font-bold">{items.name}</span> </h1>
					<h5 className="mb-4 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 dark:text-zinc-300">{items.role}</h5>
					<p className="mb-6 text-lg font-normal text-zinc-500 lg:text-xl sm:px-24 dark:text-zinc-400">{items.description}</p>

					<div>
						{/*<h5 className="mb-2 text-xl leading-none tracking-tight text-white md:text-2xl">Here are some stack i{"'"}ve been working with</h5>*/}
					</div>
				</section>
			}
		</>
  )
}
