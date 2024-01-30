import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <div className={poppins.className}>
    <Component {...pageProps} />
  </div>;
}
