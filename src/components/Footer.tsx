import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { departments } from '@/data/departments';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
              RioShop
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Premium tech for the modern mover. Built for bold movement, designed with precision and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Departments</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {departments.map((dept) => (
                <li key={dept.slug}>
                  <Link to={`/department/${dept.slug}`} className="hover:text-accent transition-colors">
                    {dept.icon} {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/wishlist" className="hover:text-accent transition-colors">My Wishlist</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@rioshop.com" className="hover:text-accent transition-colors">support@rioshop.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Tech Street<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} RioShop. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/faq" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
