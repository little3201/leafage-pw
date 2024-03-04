import { Suspense } from 'react';

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <Suspense>
            <div className='py-16 sm:py-28 lg:py-32'>
                posts
            </div>
        </Suspense>
    )
}