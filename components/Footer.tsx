import Link from 'next/link';

export default function Footer() {
    const email_address = "hello@wordsmatter.in";
    const phone_number = "+91 1234567890";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/case-studies" },
        { name: "Journal", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-background-light dark:bg-background-dark py-12 px-6 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Location */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Location</h4>
                        <address className="not-italic text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Gurgaon<br />
                            Somewhere<br />
                            Address
                        </address>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:text-right">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contact</h4>
                        <a className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href={`mailto:${email_address}`}>{email_address}</a>
                        <a className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mt-1" href={`tel:${phone_number.replace(/\s+/g, '')}`}>{phone_number}</a>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} Words Matter.
                    </div>
                </div>
            </div>
        </footer>
    );
}
