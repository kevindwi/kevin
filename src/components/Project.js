'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import AnimateOnScroll from '../utils/AnimateOnScroll'

export default function Project({ content, className = '' }) {
	const router = useRouter();

  return (
		<section id="projectSection" className={"scroll-mt-28 pb-16 " + className }>
			<h1 className="mb-6 text-3xl font-semibold leading-none tracking-tight text-zinc-200 md:text-4xl">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 pb-1">
				{ content && content?.map((items, i) => {
					return (
						<AnimateOnScroll key={i} children={
							<div className="relative max-w-sm h-80 group">
								<Link href="#">
									<img className="h-full w-full object-cover rounded-lg brightness-95 transition-all duration-300 cursor-pointer group-hover:brightness-25" src={items.image} alt="" />
									<div className="absolute px-4 text-zinc-200 opacity-0 group-hover:opacity-100 duration-300 inset-x-0 bottom-4">
										<h5 className="font-semibold text-lg">{items.title}</h5>
										<p className="text-sm mb-3">{items.description}</p>
										<div className="flex space-x-2">
											{ items.live_view &&
												<button role="button" onClick={() => router.push('https://github.com/kevindwi')} className="inline-flex text-zinc-200 bg-blue-600/50 backdrop-blur-sm hover:bg-blue-700/80 font-medium rounded-full text-normal px-5 py-2 text-center">
													Live view
													<svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
														<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
													</svg>
												</button>
											}
											{ items.github &&
												<button role="button" onClick={() => router.push('https://github.com/kevindwi')} className="text-zinc-200 bg-blue-600/50 backdrop-blur-sm hover:bg-blue-700/80 font-medium rounded-full p-2 text-center">
													<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
													<span className="sr-only">GitHub account</span>
												</button>
											}
										</div>
									</div>
								</Link>
							</div>
						}/>
					)
				})}
			</div>
		</section>
  )
}
