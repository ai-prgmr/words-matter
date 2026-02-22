// components/mode-toggle.tsx
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()

    // Determine the current theme, falling back to system theme if necessary
    const currentTheme = theme === "system" ? systemTheme : theme

    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark")
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="w-12 h-12 rotate-0 scale-100 transition-all text-red-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-12 w-12 rotate-90 scale-0 transition-all text-white dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}