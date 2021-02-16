export function CardHeading({children}) {
    return (
        <div className="justify-center">
            <p className="text-2xl mx-5 py-3 font-title">{children}</p>  
            <svg viewBox="50 0 200 1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%"/>
            </svg>
        </div>
    )
}

export function CardSubHeading({children}) {
    return (
        <>
            <p className="mx-5 py-2 text-xl">{children}</p>  
        </>
    )
}

export function CardText({children}) {
    return (
        <>
            <p className="p-4 md:px-6">{children}</p>  
        </>
    )
}

export function Paragraph({children}) {
    return (
        <>
            <p className="text-lg p-6">{children}</p>
        </>
    )
}