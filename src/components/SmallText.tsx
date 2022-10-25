export default ({children, className}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
    return <span className={`inline-block text-lg -translate-y-[40%] ${className}`}>{children}</span>
}