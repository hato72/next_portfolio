import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a> */}
            <Link href="https://github.com/hato72" legacyBehavior>
              <a className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            </Link>
            <Link href="https://hato72.github.io/portfolio/service.html" legacyBehavior>
              <a className="text-muted-foreground hover:text-primary transition-colors">ポートフォリオ</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
