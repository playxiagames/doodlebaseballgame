'use client';

import { Suspense } from 'react';
import { GameGrid } from './GameCard';
import { GameGridSkeleton } from './Skeleton';

// 游戏网格的骨架屏
const GameGridSuspense = ({ children, gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", skeletonCount = 6 }) => (
  <Suspense fallback={<GameGridSkeleton count={skeletonCount} gridCols={gridCols} />}>
    {children}
  </Suspense>
);

// 懒加载的游戏区域组件
const LazyGameSection = ({ 
  googleGames,
  popularGames,
  basketballGames,
  moreGames,
  allGamesCount
}) => {
  return (
    <>
      {/* Amazing Baseball Games Collection - 展示 Google Games */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-left">
            ⚾ Amazing Baseball Games Collection
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {googleGames.length} games
          </span>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            ⚾ Experience the ultimate baseball gaming collection! From classic Doodle Baseball to various sports games with unique challenges and fun gameplay.
          </p>
        </div>
        <GameGridSuspense>
          <GameGrid games={googleGames} />
        </GameGridSuspense>
      </div>

      {/* Popular Games Grid */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-left">🔥 Trending Now</h2>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 mb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            📈 The most popular games right now - see what everyone else is playing!
          </p>
        </div>
        <GameGridSuspense>
          <GameGrid games={popularGames} />
        </GameGridSuspense>
      </div>

      {/* Category Previews - 引导用户探索更多分类 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">🎯 Explore More Game Categories</h2>
        
        {/* Football Games Preview */}
        {googleGames.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">⚽ Football Games Collection</h3>
              <a 
                href="/category/football-games/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                View All Football Games →
              </a>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ⚽ Experience the beautiful game with realistic physics and competitive gameplay!
              </p>
            </div>
            <GameGridSuspense gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <GameGrid games={googleGames} gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" />
            </GameGridSuspense>
          </div>
        )}

        {/* Basketball Games Preview */}
        {basketballGames.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🏀 Basketball Games Collection</h3>
              <a 
                href="/category/basketball-games/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                View All Basketball Games →
              </a>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 mb-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                🏀 Master precision shooting and competitive basketball action!
              </p>
            </div>
            <GameGridSuspense gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <GameGrid games={basketballGames} gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" />
            </GameGridSuspense>
          </div>
        )}


      </div>

      {/* More Games Discovery Section */}
      {moreGames.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-left">🎲 Discover More Games</h2>
            <a 
              href="/all-games/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              🔍 Search All Games →
            </a>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-3 mb-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              🔍 Looking for something specific? Visit our <strong>All Games</strong> page to search by name, browse by category, or filter by rating. Over {allGamesCount}+ games to explore!
            </p>
          </div>
          <GameGridSuspense gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" skeletonCount={12}>
            <GameGrid games={moreGames} gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" />
          </GameGridSuspense>
        </div>
      )}

      {/* SEO Content Section - 主要H1标签 */}
      <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-left">
          Play Doodle Baseball - Free Online Baseball Game
        </h2>
        
        <div className="prose prose-lg max-w-none text-left">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome to the ultimate <strong>doodle baseball</strong> online experience! Our platform brings you the most addictive and entertaining <strong>doodle baseball</strong> game directly in your browser - completely free and with no downloads required. This amazing <strong>doodle baseball</strong> game has captured the hearts of millions of players worldwide with its simple yet engaging gameplay mechanics.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Doodle baseball</strong> represents the perfect blend of classic American pastime and modern gaming innovation. When you play <strong>doodle baseball</strong>, you'll discover why this game has become such a phenomenon among casual gamers and sports enthusiasts alike. The beauty of <strong>doodle baseball</strong> lies in its accessibility - anyone can pick up and play, yet mastering the game requires skill, timing, and strategic thinking.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left">⚾ Why Choose Our Doodle Baseball Game?</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our <strong>doodle baseball</strong> platform offers the most comprehensive and enjoyable baseball gaming experience available online. Unlike other baseball games that require complex controls or extensive tutorials, <strong>doodle baseball</strong> welcomes players of all skill levels. The intuitive gameplay means you can start enjoying <strong>doodle baseball</strong> immediately, while the progressive difficulty ensures long-term engagement and challenge.
          </p>
          
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li><strong>Instant Access:</strong> Play doodle baseball immediately with no downloads or installations</li>
            <li><strong>Cross-Platform:</strong> Enjoy doodle baseball on any device - phones, tablets, or computers</li>
            <li><strong>Free Forever:</strong> Our doodle baseball game is completely free with no hidden costs</li>
            <li><strong>Regular Updates:</strong> We continuously improve the doodle baseball experience</li>
            <li><strong>Safe Gaming:</strong> Play doodle baseball in a secure, family-friendly environment</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left">🎮 Doodle Baseball Game Features</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            What makes our <strong>doodle baseball</strong> game stand out from other online baseball games? The answer lies in the carefully crafted gameplay mechanics that make <strong>doodle baseball</strong> both accessible and deeply engaging. Each element of <strong>doodle baseball</strong> has been designed to provide maximum entertainment value while maintaining the authentic spirit of America's favorite pastime.
          </p>
          
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li><strong>Simple Controls:</strong> Master doodle baseball with easy-to-learn, one-click gameplay</li>
            <li><strong>Progressive Difficulty:</strong> Doodle baseball challenges grow as your skills improve</li>
            <li><strong>Realistic Physics:</strong> Experience authentic ball movement in doodle baseball</li>
            <li><strong>Multiple Game Modes:</strong> Enjoy various doodle baseball scenarios and challenges</li>
            <li><strong>Achievement System:</strong> Unlock special rewards as you excel at doodle baseball</li>
            <li><strong>Statistics Tracking:</strong> Monitor your doodle baseball performance and improvement</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left">🏆 Master the Art of Doodle Baseball</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Becoming proficient at <strong>doodle baseball</strong> requires understanding both the fundamentals and advanced strategies. While <strong>doodle baseball</strong> appears simple on the surface, experienced players know that timing, patience, and strategic thinking separate good players from great ones. Our <strong>doodle baseball</strong> game rewards both quick reflexes and thoughtful decision-making.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The key to <strong>doodle baseball</strong> success lies in mastering the timing mechanics. Each pitch in <strong>doodle baseball</strong> requires careful consideration of speed, trajectory, and optimal contact point. As you progress through different levels of <strong>doodle baseball</strong>, you'll encounter varying pitch types and defensive configurations that will test your adaptability and skill development.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-left">🌟 Join the Doodle Baseball Community</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Doodle baseball</strong> isn't just a game - it's a global community of players who share a passion for baseball and casual gaming. When you play <strong>doodle baseball</strong> on our platform, you're joining millions of players who have discovered the joy and excitement that only <strong>doodle baseball</strong> can provide. Share your high scores, compete with friends, and see how your <strong>doodle baseball</strong> skills measure against players worldwide.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ready to step up to the plate? Click the play button above and experience why <strong>doodle baseball</strong> has become the most beloved online baseball game. Whether you're a baseball fan, casual gamer, or someone looking for quick entertainment, <strong>doodle baseball</strong> delivers an unmatched gaming experience that will keep you coming back for more home runs and perfect games.
          </p>
        </div>
      </div>
    </>
  );
};

export default LazyGameSection; 