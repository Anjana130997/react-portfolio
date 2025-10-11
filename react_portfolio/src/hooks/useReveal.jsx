import { useEffect } from 'react' 
export default function useReveal() {
     useEffect(() => { 
        const obs = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active') }) }, { threshold: 0.12 }) 
            document.querySelectorAll('.reveal').forEach(el => obs.observe(el)) 
        return () => obs.disconnect() }, []) }