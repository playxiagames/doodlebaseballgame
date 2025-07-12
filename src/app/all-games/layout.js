// All Games 页面的元数据配置
export const metadata = {
  title: 'Search All Games - Find Your Perfect Game | Doodle Baseball',
  description: 'Search and discover your perfect game from our complete collection! Use powerful filters to find games by name, category, rating. Over 100+ free online games to explore.',
      keywords: 'search games, find games, all games, game search, free online games, complete collection, game library, browser games, football games, basketball games, doodle baseball',
  openGraph: {
    title: 'Search All Games - Find Your Perfect Game | Doodle Baseball',
    description: 'Search and discover your perfect game from our complete collection! Use powerful filters to find games by name, category, rating.',
    type: 'website',
    url: 'https://doodlebaseballgame.org/all-games/',
    siteName: 'Doodle Baseball',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search All Games - Find Your Perfect Game',
    description: 'Search and discover your perfect game from our complete collection!',
  },
  alternates: {
    canonical: '/all-games/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AllGamesLayout({ children }) {
  return children;
} 