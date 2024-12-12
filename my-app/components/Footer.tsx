import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Emergency</h3>
            <p className="text-2xl font-bold text-purple-400">1-800-123-4567</p>
          </div>
          <FooterLinks
            title="Resources"
            links={[
              { href: "#", text: "Find Help" },
              { href: "#", text: "Prevention Guide" },
              { href: "#", text: "Support Groups" },
            ]}
          />
          <FooterLinks
            title="Information"
            links={[
              { href: "#", text: "About Us" },
              { href: "#", text: "Contact" },
              { href: "#", text: "Privacy Policy" },
            ]}
          />
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h3>
            <p className="mb-4">
              Stay updated with our latest resources and support information.
            </p>
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 DrugAware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface Link {
  href: string;
  text: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

function FooterLinks({ title, links } : FooterLinksProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="hover:text-purple-400" href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
