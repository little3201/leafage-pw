import { Suspense } from 'react'

import TagList from '@/app/ui/tag-list'

export default async function Page() {

    return (
        <Suspense>
            <div className='flex space-x-24'>
                <TagList tags={['1. get starter', '2. install']} />
                <div>
                    Content
                </div>
            </div>
        </Suspense>
    )
}