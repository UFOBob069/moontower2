import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#FFE17D] to-[#FFD700]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Image
              alt="MoonTower Business Logo"
              width={200}
              height={200}
              className="mx-auto mb-8"
              src="/moontower-logo.jpg"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MoonTower Business Podcast
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Exploring the Austin business landscape through engaging conversations with entrepreneurs, executives, and innovators.
            </p>
            <Link 
              href="#latest-episodes" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Listen to Latest Episode
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Podcast</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  The MoonTower Business Podcast stands at the intersection of innovation and entrepreneurship, delivering unparalleled insights from the heart of Texas&apos; most dynamic business ecosystem. Through in-depth conversations with industry titans, disruptive innovators, and thought leaders, we explore the cutting-edge developments shaping the future of business and technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  With a rapidly growing audience across multiple platforms and listeners in over 50 countries, we&apos;ve become a trusted voice in the business podcast landscape. Our episodes have featured Fortune 500 executives, successful entrepreneurs, and innovative startups, providing actionable insights and behind-the-scenes perspectives on building and scaling successful enterprises.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Host</h3>
                <p className="text-gray-600 leading-relaxed">
                  Joey O&apos;Bell is a seasoned attorney, entrepreneur, and podcast host, specializing in corporate law, business strategy, and litigation. As the founder of Vineyard Sun and the host of Moontower Business Podcast, he brings a passion for business, innovation, and insightful conversations with industry leaders. With a strong legal background and a commitment to entrepreneurship, Joey continues to make an impact in law, business, and media.
                </p>
              </div>
              <div className="pt-8 flex justify-center">
                <Link 
                  href="mailto:marse.obell@yahoo.com; david.eagan@gmail.com"
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
              <div className="pt-8 flex flex-col items-center">
                <Image 
                  alt="Host Joseph O'Bell breaking ground on Starbase, Tx with Elon Musk" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg" 
                  src="/spacex.jpg" 
                />
                <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
                  Host Joseph O&apos;Bell breaking ground on Starbase, Tx with Elon Musk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listen Now Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-20">Listen Now</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-16">
              <Link 
                href="https://open.spotify.com/show/1ffGDEnDolncAj4xA753TA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-white transition-all duration-300 hover:scale-110 hover:text-[#FFD700]"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-24 h-24 mb-4">
                  <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
                </svg>
                <span className="text-lg font-medium whitespace-nowrap">Spotify</span>
              </Link>
              <Link 
                href="https://podcasts.apple.com/id1507993317" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-white transition-all duration-300 hover:scale-110 hover:text-[#FFD700]"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="w-24 h-24 mb-4">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                <span className="text-lg font-medium whitespace-nowrap">Apple Podcasts</span>
              </Link>
              <Link 
                href="https://www.youtube.com/@moontowerbusinesspodcast9156" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-white transition-all duration-300 hover:scale-110 hover:text-[#FFD700]"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-24 h-24 mb-4">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
                <span className="text-lg font-medium whitespace-nowrap">YouTube</span>
              </Link>
              <Link 
                href="https://anchor.fm/s/140e55d8/podcast/rss" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-white transition-all duration-300 hover:scale-110 hover:text-[#FFD700]"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-24 h-24 mb-4">
                  <path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path>
                </svg>
                <span className="text-lg font-medium whitespace-nowrap">RSS Feed</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section id="latest-episodes" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-16">Latest Episodes</h2>
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-3xl p-12">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://open.spotify.com/embed/show/1ffGDEnDolncAj4xA753TA" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="encrypted-media" 
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The voices behind MoonTower Business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Joseph O'Bell */}
            <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/60">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center">
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative rounded-full overflow-hidden ring-2 ring-[#FFD700]/60 group-hover:ring-[#FFD700] transition-all">
                    <Image alt="Joseph O'Bell" width={160} height={160} className="object-cover" src="/joey.jpg" priority />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700] mb-2 group-hover:scale-105 transition-transform">Joseph O&apos;Bell</h3>
                <p className="text-gray-300 font-medium mb-4">Host & Executive Producer</p>
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  An attorney and entrepreneur bringing unique perspectives on both legal and business aspects of entrepreneurship. General Counsel for American Metals Recovery and Recycling Inc. and Multiband Global.
                </p>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/in/joseph-o-bell-2451621b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>
                  <Link href="https://x.com/NY_TX_Lawyer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* David Eagan */}
            <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/60">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center">
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative rounded-full overflow-hidden ring-2 ring-[#FFD700]/60 group-hover:ring-[#FFD700] transition-all">
                    <Image alt="David Eagan" width={160} height={160} className="object-cover" src="/david.jpg" priority />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700] mb-2 group-hover:scale-105 transition-transform">David Eagan</h3>
                <p className="text-gray-300 font-medium mb-4">Co-Founder & Producer</p>
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  Senior Executive with 16+ years of experience in Commercial Operations & Strategic Leadership. Proven track record of driving financial performance and innovation in tech, e-commerce, and financial services sectors.
                </p>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/in/davidroberteagan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>
                  <Link href="https://x.com/Eagan218" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Aaron Moises */}
            <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/60">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center">
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative rounded-full overflow-hidden ring-2 ring-[#FFD700]/60 group-hover:ring-[#FFD700] transition-all">
                    <Image alt="Aaron Moises" width={160} height={160} className="object-cover" src="/aaron.jpg" priority />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700] mb-2 group-hover:scale-105 transition-transform">Aaron Moises</h3>
                <p className="text-gray-300 font-medium mb-4">Editor & Producer</p>
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  Skilled audio producer and editor bringing professional polish to each episode. Ensures high-quality production standards and engaging content delivery for our listeners.
                </p>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/in/aaron-moises/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>
                  <Link href="https://twitter.com/aaronmoises" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Featured On The Podcast</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image alt="Featured Company 1" width={150} height={90} className="object-contain" src="/logo1.jpg" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image alt="Featured Company 2" width={150} height={90} className="object-contain" src="/logo2.jpg" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image alt="Featured Company 3" width={150} height={90} className="object-contain" src="/logo3.jpg" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image alt="Featured Company 4" width={150} height={90} className="object-contain" src="/logo4.jpg" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image alt="Featured Company 5" width={150} height={90} className="object-contain" src="/logo5.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link target="_blank" rel="noopener noreferrer" href="https://bitcoin.org/bitcoin.pdf" className="group">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-800/80 hover:translate-y-[-4px]">
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700] group-hover:text-[#FFE17D]">Bitcoin Initiatives</h3>
                <p className="text-gray-300">Exploring the intersection of cryptocurrency and business in Austin&apos;s growing tech scene.</p>
                <div className="mt-4 inline-flex items-center text-[#FFD700] group-hover:translate-x-1 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://vineyardsun.com" className="group">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-800/80 hover:translate-y-[-4px]">
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700] group-hover:text-[#FFE17D]">Vineyard Sun</h3>
                <p className="text-gray-300">A lifestyle brand that offers unique sunglasses designed for wine enthusiasts, launched in the spring of 2017.</p>
                <div className="mt-4 inline-flex items-center text-[#FFD700] group-hover:translate-x-1 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://eaganventures.com" className="group">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-800/80 hover:translate-y-[-4px]">
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700] group-hover:text-[#FFE17D]">Eagan Ventures LLC</h3>
                <p className="text-gray-300">Strategic investment and business development firm focused on emerging technologies and innovative startups.</p>
                <div className="mt-4 inline-flex items-center text-[#FFD700] group-hover:translate-x-1 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-16">MoonTower Shop</h2>
          <div className="max-w-4xl mx-auto">
            <Link target="_blank" rel="noopener noreferrer" href="https://vineyardsun.com/products/premium-icahn-happiness-is-positive-cashflow-decorative-pillow" className="block group">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/60">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image alt="Premium Icahn Positive Cash Flow Pillow" width={500} height={500} className="object-cover w-full h-full" src="/pillow.jpg" priority />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors">Premium Icahn Positive Cash Flow Pillow</h3>
                    <div className="flex gap-3 items-baseline">
                      <span className="text-2xl font-bold text-[#FFD700]">$39.00</span>
                      <span className="text-lg text-gray-400 line-through">$49.00</span>
                      <span className="text-sm text-[#FFD700] font-medium">Sale</span>
                    </div>
                <p className="text-gray-300">Add a stylish and inspiring touch to your space with our &quot;Positive Cash Flow&quot; pillow.</p>
                <p className="text-gray-400 text-sm">Featuring the phrase &quot;Happiness is Positive Cash Flow&quot; embroidered in orange on a navy blue pillow, it&apos;s a great reminder of financial success and the value of a balanced life.</p>
                    <div className="inline-flex items-center text-[#FFD700] font-medium group-hover:translate-x-1 transition-transform">
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link href="https://twitter.com/2018Tower" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-8 h-8">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/moontower2018/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-8 h-8">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/channel/UCEt5Wrs-C1WAWRXchTxTOeg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-8 h-8">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/MoontowerBusinessPodcast2020/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-8 h-8">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
