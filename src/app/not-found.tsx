import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background text-foreground px-6 text-center">
      <div className="relative w-full max-w-md aspect-square mb-8">
        {/* Light mode image */}
        <Image 
          src="/404_light.png" 
          alt="404 Not Found" 
          fill
          className="object-contain dark:hidden"
          priority 
        />
        {/* Dark mode image */}
        <Image 
          src="/404_dark.png" 
          alt="404 Not Found" 
          fill
          className="object-contain hidden dark:block"
          priority 
        />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Checkmate.</h1>
      <p className="text-lg text-muted-foreground max-w-lg mb-8">
        Looks like you've moved off the board. The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
        Back to the game
      </Link>
    </div>
  );
}
