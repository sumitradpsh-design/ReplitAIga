import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-primary-foreground">
              BharatRoots
            </h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Connecting Indian artisans and farmers with conscious consumers worldwide. 
              Every purchase supports traditional crafts and sustainable farming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Community", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-background/70 hover:text-primary-foreground transition-colors cursor-pointer" data-testid={`link-footer-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li data-testid="text-contact-email">support@bharatroots.in</li>
              <li data-testid="text-contact-phone">+91 98765 43210</li>
              <li data-testid="text-contact-address">
                Mumbai, Maharashtra
                <br />
                India
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: SiFacebook, label: "Facebook", testId: "link-facebook" },
                { Icon: SiInstagram, label: "Instagram", testId: "link-instagram" },
                { Icon: SiX, label: "X (Twitter)", testId: "link-twitter" },
                { Icon: SiYoutube, label: "YouTube", testId: "link-youtube" },
              ].map(({ Icon, label, testId }) => (
                <button
                  key={label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
                  aria-label={label}
                  data-testid={testId}
                  onClick={() => console.log(`Navigate to ${label}`)}
                >
                  <Icon className="w-5 h-5 text-background" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 BharatRoots. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="text-sm text-background/60 hover:text-primary-foreground transition-colors cursor-pointer" data-testid="link-privacy">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-background/60 hover:text-primary-foreground transition-colors cursor-pointer" data-testid="link-terms">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
