import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="py-12 border-t border-outline-variant/30 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-primary tracking-tight">
            YP<span className="text-on-background">.dev</span>
          </div>
          
          <div className="text-on-background/40 text-sm">
            © {new Date().getFullYear()} Yogesh Patil. All rights reserved.
          </div>
          
          <div className="text-on-background/40 text-sm">
            Built with <span className="text-on-background font-medium">Next.js</span> & <span className="text-on-background font-medium">Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
