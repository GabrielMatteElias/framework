"use client"

import Link from 'next/link'
import styles from './index.module.css'
import frameworkLogo from '@/assets/framework-icon.png'
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

export function Header() {
    const [top, setTop] = useState(true)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {

        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)

    }, [top])

    return (
        <header className={` ${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.wrap_header}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <Image
                            width={35}
                            src={frameworkLogo}
                            alt='Logo do site Framework'
                            quality={100}
                            priority
                        />
                    </Link>
                </nav>

                <div className={styles.search} tabindex="0" >
                    <input type='text' />
                    <button className={styles.icon}>
                        <SearchIcon sx={{ width: '20px', color: '#fff' }} />
                    </button>
                </div>

                <div className={styles.header_perfil}>
                    <AccountCircleIcon sx={{ fontSize: '3.2rem', color: 'rgba(106, 106, 106, 0.61)' }} />
                </div>
            </div>

        </header>
    )
}