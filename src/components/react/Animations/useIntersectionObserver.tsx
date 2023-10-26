import { useEffect, useState } from 'react'

export default function useIntersectionObserver(ref, options) {
	const [isIntersecting, setIntersecting] = useState(false)
	const [hasIntersected, setHasIntersected] = useState(false) 

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasIntersected) {
				setIntersecting(true)
				setHasIntersected(true) 
			}
		}, options)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ref, options, hasIntersected])

	return isIntersecting
}
