import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About of leafage",
}

export default function DocLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <div>Catelog</div>
            </div>
            <div className="grow overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}