import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Image src="/404.png" alt="404 Not Found" width={400} height={400} priority />
      <h1 className="text-2xl font-bold mt-4">Page Not Found</h1>
      <p className="mt-2">Oops! The page you are looking for doesn't exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition">
        Go Home
      </Link>
    </div>
  );
}
