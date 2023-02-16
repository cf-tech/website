export default function MainLayout({ children }) {
    return (
        <>
            <main>
                <div className="tile bg-sky-600 col-span-6 md:col-span-10 lg:col-span-16 grid-rows-6 md:rows-10 lg:rows-16">
                    <h1 className="tile-marker text-4xl">CF Technologies</h1>
                </div>
                <div>{children}</div>
            </main>
        </>
    )
}