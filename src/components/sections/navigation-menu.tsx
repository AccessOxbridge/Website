"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const ASSETS = {
  vantage: {
    s: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-s-dark-1.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-s-light-2.png" 
    },
    coupe: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-coupe-dark-3.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-coupe-light-4.png" 
    },
    roadster: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-roadster-dark-5.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vantage-roadster-light-6.png" 
    }
  },
  db12: {
    s: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-s-dark-alt-2-7.jpg", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-s-light-alt-2-8.jpg" 
    },
    coupe: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-couple-dark-9.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-couple-light-10.png" 
    },
    volante: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-volante-dark-11.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12-volante-light-12.png" 
    },
    anniv: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12volante60th-dark-13.jpg", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/db12volante60th-light-14.jpg" 
    }
  },
  vanquish: {
    base: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanquish-darker-16.jpg", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanquish-night-background-15.jpg" 
    }, 
    volante: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanq-volante-dark-final-17.jpg", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanq-volante-light-final-18.jpg" 
    },
    anniv: {
         dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanquishvolante60th-dark-19.jpg",
         light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/vanquishvolante60th-light-20.jpg"
    }
  },
  dbx: {
    s: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/dbx-s-dark-21.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/dbx-s-light-22.png" 
    },
    v707: { 
      dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/dbx707-dark-23.png", 
      light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/dbx707-light-24.png" 
    }
  },
  valhalla: {
    base: {
        dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/tga-desk-still-new-25.jpg",
        light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/tga-desk-still-new-25.jpg"
    }
  }
};

type MenuItem = {
  id: string;
  label: string;
  type: 'link' | 'folder' | 'product';
  children?: MenuItem[];
  assets?: { dark: string; light: string };
  links?: { explore: string; configure: string };
};

const MENU_DATA: MenuItem[] = [
    {
        id: 'models',
        label: 'Models',
        type: 'folder',
        children: [
            {
                id: 'models_vantage',
                label: 'Vantage',
                type: 'folder',
                children: [
                    { id: 'vantage_s', label: 'Vantage S', type: 'product', assets: ASSETS.vantage.s, links: { explore: '/en/models/vantage-s', configure: '#' } },
                    { id: 'vantage_coupe', label: 'Vantage', type: 'product', assets: ASSETS.vantage.coupe, links: { explore: '/en/models/vantage', configure: '#' } },
                    { id: 'vantage_roadster', label: 'Vantage Roadster', type: 'product', assets: ASSETS.vantage.roadster, links: { explore: '/en/models/vantage-roadster', configure: '#' } },
                ]
            },
            {
                id: 'models_db12',
                label: 'DB12',
                type: 'folder',
                children: [
                    { id: 'db12_s', label: 'DB12 S', type: 'product', assets: ASSETS.db12.s, links: { explore: '/en/models/db12-s', configure: '#' } },
                    { id: 'db12_coupe', label: 'DB12', type: 'product', assets: ASSETS.db12.coupe, links: { explore: '/en/models/db12', configure: '#' } },
                    { id: 'db12_volante', label: 'DB12 Volante', type: 'product', assets: ASSETS.db12.volante, links: { explore: '/en/models/db12-volante', configure: '#' } },
                    { id: 'db12_anniv', label: 'DB12 Volante: 60th Anniversary Edition', type: 'product', assets: ASSETS.db12.anniv, links: { explore: '/en/models/db12-anniv', configure: '#' } },
                ]
            },
            {
                id: 'models_vanquish',
                label: 'Vanquish',
                type: 'folder',
                children: [
                    { id: 'vanquish_base', label: 'Vanquish', type: 'product', assets: ASSETS.vanquish.base, links: { explore: '/en/models/vanquish', configure: '#' } },
                    { id: 'vanquish_volante', label: 'Vanquish Volante', type: 'product', assets: ASSETS.vanquish.volante, links: { explore: '/en/models/vanquish-volante', configure: '#' } },
                    { id: 'vanquish_anniv', label: 'Vanquish Volante: 60th Anniversary Edition', type: 'product', assets: ASSETS.vanquish.anniv, links: { explore: '/en/models/vanquish-anniv', configure: '#' } },
                ]
            },
            {
                id: 'models_dbx',
                label: 'DBX',
                type: 'folder',
                children: [
                    { id: 'dbx_s', label: 'DBX S', type: 'product', assets: ASSETS.dbx.s, links: { explore: '/en/models/dbx-s', configure: '#' } },
                    { id: 'dbx_707', label: 'DBX707', type: 'product', assets: ASSETS.dbx.v707, links: { explore: '/en/models/dbx707', configure: '#' } },
                ]
            },
            {
                id: 'models_valhalla',
                label: 'Valhalla',
                type: 'folder',
                children: [
                    { id: 'valhalla_base', label: 'Valhalla', type: 'product', assets: ASSETS.valhalla.base, links: { explore: '/en/models/valhalla', configure: '#' } },
                ]
            }
        ]
    },
    { id: 'our_world', label: 'Our World', type: 'link' },
    { id: 'ownership', label: 'Ownership', type: 'link' },
    { id: 'f1_team', label: 'F1® Team', type: 'link' },
    { id: 'store', label: 'Store', type: 'link' },
];

export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navStack, setNavStack] = useState<MenuItem[]>([{ id: 'root', label: 'Menu', type: 'folder', children: MENU_DATA }]);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleOpenMenu = () => {
        setIsOpen(true);
        setNavStack([{ id: 'root', label: 'Menu', type: 'folder', children: MENU_DATA }]);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
        // Reset stack after a short delay for animation if needed, but instant is fine for now
        setTimeout(() => setNavStack([{ id: 'root', label: 'Menu', type: 'folder', children: MENU_DATA }]), 300);
    };

    const pushStack = (item: MenuItem) => {
        setDirection('forward');
        setNavStack(prev => [...prev, item]);
    };

    const popStack = () => {
        if (navStack.length <= 1) return;
        setDirection('backward');
        setNavStack(prev => prev.slice(0, -1));
    };

    const currentItem = navStack[navStack.length - 1];

    return (
        <div className="font-primary dark">
            {/* Global Header */}
            <header className={`fixed top-0 left-0 right-0 z-[1002] transition-colors duration-300 ${scrolled || isOpen ? 'bg-[#1a1a1a]' : 'bg-transparent text-white'}`}>
                <div className="container mx-auto px-4 lg:px-10 h-[80px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button 
                            className="p-2 text-white hover:text-[#1b8a7a] transition-colors"
                            onClick={isOpen ? handleCloseMenu : handleOpenMenu}
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>

                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2" aria-label="Aston Martin Home">
                        {/* Simple SVG Logo Placeholder as actual SVG code is too long, using text or finding logo asset if available. 
                            Using a simple text/icon representation as per instructions "Do NOT write custom SVG code... unless appropriate". 
                            Since I don't have the logo asset, I will use a Lucide icon or simple text as placeholder if allowed, 
                            but the prompt wants pixel perfect. The screenshots show the wings logo.
                            The HTML structure uses an <svg><use></use></svg>. I'll skip complex SVG drawing and assume logo is there or use text.
                            Actually, I'll use a text representation styled to look like a placeholder for the logo.
                        */}
                       <span className="sr-only">Aston Martin</span>
                       <div className="w-[180px] h-[40px] flex items-center justify-center">
                            {/* Wings Logo Placeholer shape using CSS roughly if needed, otherwise just text */}
                           <svg viewBox="0 0 260 60" className="h-full w-auto fill-current text-white">
                                <path d="M25.5 28.5L84 28.5L96.5 13.5L130 9L163.5 13.5L176 28.5L234.5 28.5C234.5 28.5 248 29 253 34C258.125 39.125 259 47 259 47C259 47 259 50 256.5 50.5C254 51 251.5 50 251.5 50L241.5 44L177.5 44L165 49L130 54L95 49L82.5 44L18.5 44L8.5 50C8.5 50 6 51 3.5 50.5C1 50 1 47 1 47C1 47 1.875 39.125 7 34C12 29 25.5 28.5 25.5 28.5ZM130 16.5L100 28.5L160 28.5L130 16.5ZM130 49L158 41L102 41L130 49Z" />
                           </svg>
                       </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-4">
                        <Link 
                            href="#" 
                            className="px-6 py-2 text-sm font-semibold text-white border border-[#4a4a4a] hover:bg-[#2d2d2d] hover:border-[#5a5a5a] transition-all uppercase tracking-wide"
                        >
                            Configure
                        </Link>
                        <Link 
                            href="#"
                            className="px-6 py-2 text-sm font-semibold text-white border border-[#4a4a4a] hover:bg-[#2d2d2d] hover:border-[#5a5a5a] transition-all uppercase tracking-wide"
                        >
                            Enquire
                        </Link>
                    </div>
                </div>
            </header>

            {/* Navigation Overlay */}
            <div 
                className={`fixed inset-0 z-[1000] bg-[#1a1a1a] pt-[80px] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="container mx-auto px-4 lg:px-10 h-full flex flex-col">
                    {/* Menu Controls */}
                    <div className="flex items-center h-16 py-4 opacity-100 transition-opacity duration-300">
                        {navStack.length > 1 && (
                            <button 
                                onClick={popStack}
                                className="flex items-center text-white hover:text-[#1b8a7a] transition-colors uppercase tracking-widest text-sm font-medium group"
                            >
                                <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back
                            </button>
                        )}
                        {navStack.length > 1 && (
                            <span className="ml-auto text-[#a0a0a0] text-sm uppercase tracking-widest border-b border-transparent">
                                {currentItem.label}
                            </span>
                        )}
                    </div>

                    {/* Menu Content Area */}
                    <div className="relative flex-1 overflow-hidden w-full h-full">
                        {/* We render just the current level, potentially with transition. 
                            For simplicity in this clone, we just swap content. 
                        */}
                        <div 
                            key={currentItem.id}
                            className="w-full h-full overflow-y-auto pb-20 fade-in-section"
                        >
                             <ul className={`grid gap-4 ${hasProducts(currentItem) ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'flex flex-col' }`}>
                                {currentItem.children?.map((item) => (
                                    <li key={item.id} className="w-full">
                                        {item.type === 'product' ? (
                                            <ProductCard item={item} />
                                        ) : (
                                            <button
                                                onClick={() => item.children ? pushStack(item) : console.log("Navigate to", item.id)}
                                                className="w-full flex items-center justify-between py-6 border-b border-[#2d2d2d] group text-left"
                                            >
                                                <span className="text-2xl lg:text-3xl font-light text-white group-hover:text-[#1b8a7a] transition-colors">
                                                    {item.label}
                                                </span>
                                                {item.children && (
                                                    <ChevronRight className="w-6 h-6 text-[#1b8a7a] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                )}
                                            </button>
                                        )}
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Custom Styles for animations and overrides */}
            <style jsx global>{`
                .fade-in-section {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(${direction === 'forward' ? '20px' : '-20px'}); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}

function hasProducts(item: MenuItem) {
    return item.children?.some(child => child.type === 'product');
}

function ProductCard({ item }: { item: MenuItem }) {
    if (!item.assets) return null;

    return (
        <div className="group relative flex flex-col pt-4 pb-8 border-b border-[#2d2d2d] md:border-none md:p-6 transition-colors hover:bg-[#1f1f1f]">
            {/* Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 rounded-sm bg-[#0f0f0f]">
                {/* Default Dark Image */}
                <Image
                    src={item.assets.dark}
                    alt={`${item.label} - Dark View`}
                    fill
                    className="object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover Light Image */}
                <Image
                    src={item.assets.light}
                    alt={`${item.label} - Light View`}
                    fill
                    className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-xl md:text-2xl text-white font-medium tracking-wide">
                    {item.label}
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 w-full">
                    {item.links?.explore && (
                        <Link 
                            href={item.links.explore} 
                            className="flex items-center text-[#1b8a7a] text-sm uppercase tracking-widest font-semibold hover:text-white transition-colors group/link"
                        >
                            <span className="mr-2">Explore</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    )}
                    {item.links?.configure && (
                        <Link 
                            href={item.links.configure} 
                            className="flex items-center text-[#1b8a7a] text-sm uppercase tracking-widest font-semibold hover:text-white transition-colors group/link"
                        >
                            <span className="mr-2">Configure</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}