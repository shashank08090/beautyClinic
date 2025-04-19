import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-cormorant font-semibold mb-4">Luminous</h2>
          <p className="text-muted-foreground">
            Premium beauty clinic providing exceptional skincare treatments and services.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-base mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services#laser" className="text-muted-foreground hover:text-primary transition-colors">
                Laser Treatments
              </Link>
            </li>
            <li>
              <Link href="/services#facials" className="text-muted-foreground hover:text-primary transition-colors">
                Facials
              </Link>
            </li>
            <li>
              <Link href="/services#dark-spots" className="text-muted-foreground hover:text-primary transition-colors">
                Dark Spot Reduction
              </Link>
            </li>
            <li>
              <Link href="/services#skin-care" className="text-muted-foreground hover:text-primary transition-colors">
                Advanced Skin Care
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base mb-4">Contact Us</h3>
          <address className="not-italic text-muted-foreground">
            <p>123 Beauty Lane</p>
            <p>New York, NY 10001</p>
            <p className="mt-2">
              <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                (212) 555-1234
              </a>
            </p>
            <p>
              <a href="mailto:info@luminous.com" className="hover:text-primary transition-colors">
                info@luminous.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="container mt-8">
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luminous Beauty Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}