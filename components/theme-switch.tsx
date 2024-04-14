'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('light')
    return (
        <button type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="theme_button" className="w-10 h-10 rounded-full hover:bg-green-50 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center transition-colors duration-200">
            {theme === 'dark' ? <SunIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
                : <MoonIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-300" aria-hidden="true" />
            }
        </button>
    )
}