import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-surface/20">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-6">
          <Link
            href="https://github.com/IsuruIndrajith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-surface/20 text-cream/60 rounded-lg hover:bg-accent/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-.423-1.08-.03-1.053.03-1.053.477.07 0.726 1.087 0.726 1.087 1.07 1.684 2.514 1.197 3.124.915.24-.718.938-1.21 1.66-1.211.207-.192.794-.13 1.003-.077.96-1.41 3.61-2.41 4.753-2.41 1.165-.192 2.234-.404 3.17-.556-.104-.454-.402-.763-.716-.763-.238-.192-.58-.743-.238-.916 0-.203.074-.416.123-.574a2.158 2.158 0 0 0-.123-.574c0-.203.074-.416.123-.574a2.158 2.158 0 0 0-.123-.574C7.014 8.55 5.415 6.007 5.415 6.007c-.413-.285-.1.82.1.82.496 0.03 1.012.343 1.012.343l1.957 1.368c.19.134.258.33.258.682 0 .492-.17.892-.422 1.138-.252.246-.552.398-.886.398-.29 0-.584-.092-.804-.275l-.005-.003c-.22-.184-.424-.375-.637-.575A2.156 2.156 0 0 0 2.01 2.523c-.147-.577.01-1.17.432-1.614.422-.445 1.001-.65 1.643-.65.642 0 1.221.204 1.643.65.422.444 1.031 1.037 1.643 1.614.378.202.78.407 1.173.575A2.156 2.156 0 0 0 12 4.275c1.06 0 2.121.193 3.045.575.393-.168.795-.373 1.173-.575A2.156 2.156 0 0 0 21.99 2.523c-.147-.577.01-1.17.432-1.614.422-.445 1.001-.65 1.643-.65.642 0 1.221.204 1.643.65.422.445 1.012.343 1.012.343l1.957 1.368c.19.134.258.33.258.682 0 .492-.17.892-.422 1.138-.252.246-.552.398-.886.398-.29 0-.584-.092-.804-.275a1.453 1.453 0 0 0-.804-.275 1.453 1.453 0 0 0-.804-.275 1.453 1.453 0 0 0-.584-.092C19.99 2.53 18.39 5.073 17.984 5.566c-.22.184-.424.375-.637.575A2.156 2.156 0 0 1 19.99 7.477c.147.577-.01 1.17-.432-1.614-.422.445-1.001.65-1.643.65-.642 0-1.221.204-1.643-.65-.422-.445-1.012-.343-1.012-.343l-1.957-1.368c-.19-.134-.258-.33-.258-.682 0-.492.17-.892.422-1.138.252-.246.552-.398.886-.398.29 0 .584.092 .804 .275a1.453 1.453 0 0 1 .804 .275 1.453 1.453 0 0 1 .584 .092c.29 0 .584 .092 .804 .275a1.453 1.453 0 0 1 .804 .275 1.453 1.453 0 0 1 .584 .092z"></path>
            </svg>
            <span className="ml-2">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/isuru-edirisinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-surface/20 text-cream/60 rounded-lg hover:bg-accent/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.927-2.063-2.07s.919-2.07 2.063-2.07c1.144 0 2.063.927 2.063 2.07s-.919 2.07-2.063 2.07zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.228 24 24 23.226 24 22.271V1.729C24 .774 23.228 0 22.225 0z"/>
            </svg>
            <span className="ml-2">LinkedIn</span>
          </Link>
          <Link
            href="mailto:isuruindrajith680@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-surface/20 text-cream/60 rounded-lg hover:bg-accent/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M20.4 4a2.4 2.4 0 0 0-2.4-2.4H5.6a2.4 2.4 0 0 0-2.4 2.4v12.2a2.4 2.4 0 0 0 2.4 2.4h8.6a2.4 2.4 0 0 0 2.4-2.4V4zM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg>
            <span className="ml-2">Email</span>
          </Link>
        </div>
        <p className="text-sm text-cream/60 mb-2">
          Built with Next.js, deployed via GitHub Actions to Vercel
          <br />
          <a href="https://github.com/IsuruIndrajith/my-portfolio" className="text-accent hover:text-accent/80">
            Source code on GitHub
          </a>
        </p>
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} Isuru Edirisinghe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}