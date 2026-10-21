import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const Twitter = ({size=24}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({size=24}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Youtube = ({size=24}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>;
const Linkedin = ({size=24}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const footerLinks = [
	{
		label: 'Product',
		links: [
			{ title: 'Performance Ads', href: '/services#performance-marketing' },
			{ title: 'Local SEO', href: '/services#local-seo-mastery' },
			{ title: 'Influencer Networks', href: '/services#influencer-creator-networks' },
			{ title: 'Cinematic Production', href: '/services#production-house-collaborations' },
			{ title: 'Consultation', href: '/contact' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Case Studies', href: '/#case-studies' },
			{ title: 'Testimonials', href: '/#testimonials' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Careers', href: '/contact' },
		],
	},
	{
		label: 'Solutions',
		links: [
			{ title: 'Retail Walk-ins', href: '/services#footfall-engineering' },
			{ title: 'Movie Promotions', href: '/services#digital-buzz-trend-creation' },
			{ title: 'Franchise Growth', href: '/services#hyper-local-ad-targeting' },
			{ title: 'Brand Identity', href: '/about' },
			{ title: 'Local Dominance', href: '/services#local-seo-mastery' },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#350c32] to-[#0d030d] px-6 pt-20 pb-0 flex flex-col items-center">
			<div className="w-full max-w-[1200px] mx-auto grid gap-12 xl:grid-cols-2">
				{/* Left side */}
				<AnimatedContainer className="flex flex-col">
					<Link to="/" className="flex items-center gap-[10px] mb-6">
						<img src="/navlogo.png" alt="Vidhara Logo" className="h-[32px] w-auto" />
						<span className="text-[24px] tracking-tight font-semibold text-white wordmark">VIDHARA</span>
					</Link>
					
					<p className="text-[#cbc2cc] max-w-[360px] text-[15px] leading-[1.6] mb-8">
						For brands who want full access to hyper-local strategies, guided campaigns, and unlimited growth in regional markets.
					</p>
					
					<div className="flex gap-5 mb-12 text-[#cbc2cc]">
						<a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
						<a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
						<a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
						<a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
					</div>
					
					<div className="text-[#674965] text-[13px] mt-auto font-medium flex flex-col gap-1.5">
						<p>© {new Date().getFullYear()} Vidhara. All Rights Reserved</p>
					</div>
				</AnimatedContainer>

				{/* Right side - Links */}
				<div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:mt-0 xl:justify-items-end">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div>
								<h3 className="text-[15px] font-semibold text-white mb-6 tracking-wide">{section.label}</h3>
								<ul className="text-[#cbc2cc] space-y-4 text-[14px]">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												to={link.href}
												className="hover:text-white transition-all duration-300 block"
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>

			{/* Giant Text */}
			<div className="w-full flex justify-center overflow-hidden mt-[60px] opacity-[0.04] pointer-events-none select-none relative top-[10%]">
				<h1 className="text-[18vw] font-black tracking-[-0.04em] leading-[0.75] text-white whitespace-nowrap uppercase">vidhara</h1>
			</div>
		</footer>
	);
}

function AnimatedContainer({ className, delay = 0.1, children }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
