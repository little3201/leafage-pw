import { useState } from 'react'

import { getAllCategories, getPostsByCategory } from '../lib/api'
import Category from '../types/category'

type Props = {
    categories: Category[]
}

const Category = ({ categories }: Props) => {
    categories.sort((a, b) => a.modifyTime < b.modifyTime ? 1 : -1)
    const [isChecked, setChecked] = useState(false)
    
    return (
        <div className="mx-auto py-8">
                    <h2 className="sr-only">Categories</h2>
                    {isChecked ? <button type='button' onClick={() => setChecked(true)} className='rounded-3xl w-full h-40 bg-gradient-to-r from-green-300 to-lime-300'>
                        <div className='w-full h-full rounded-3xl bg-black bg-opacity-40 flex items-center justify-center'>
                            <div className='text-white text-center'>
                                <h2 className="text-5xl">
                                    <a>Technology</a>
                                </h2>
                                <h4 className='text-xl mt-4'>技术学习和总结，开发中遇到的问题以及解决方法，并深入理解其原理。</h4>
                            </div>
                        </div>
                    </button> : <div className="flex items-center max-w-full overflow-x-scroll space-x-6">
                        {categories.map((category) => (
                            <button type='button' className='flex-shrink-0 rounded-3xl w-64 h-40 bg-gradient-to-r from-green-300 to-lime-300 shadow-sm hover:shadow-lg hover:opacity-80 transition-all duration-200' key={category.id} >
                                <div className='w-full h-full bg-black bg-opacity-40 rounded-3xl flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <h3 className="text-2xl">
                                            <a>{category.categoryName}</a>
                                        </h3>
                                        <p>{category.count}<span className='ml-2'>Posts</span></p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    }
                </div>
    )
}

export default Category

export const getServerSideProps = async () => {
    const categories = await getAllCategories()
    const posts = await getPostsByCategory(0, 12, "")
    return {
        props: { categories, posts },
    }
}
