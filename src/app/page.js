'use client';

import { Suspense, lazy } from 'react';
import Layout from '../components/Layout';
import GamePlayer from '../components/GamePlayer';
import { SidebarGameList } from '../components/GameCard';
import { GameDescription } from '../components/Layout';

// 懒加载非首屏组件以减少初始bundle大小
const GameGrid = lazy(() => import('../components/GameCard').then(module => ({ default: module.GameGrid })));

// 懒加载用于非首屏内容的组件
const LazyGameSection = lazy(() => import('../components/LazyGameSection'));
import { 
  getGameById, 
  getHomepageConfig,
  getSidebarRecommendedGames,
  getFeaturedGames,
  getPopularGames, 
  getGamesByCategory,
  getCategoryPreviewGames,
  getAllCategories,
  getMoreGamesForHomepage,
  getAllGames
} from '../utils/gameData';

// 主页的 metadata 在 layout.js 中处理，因为这是客户端组件

export default function HomePage() {
  const homepageConfig = getHomepageConfig();
  const mainGame = getGameById(homepageConfig?.mainGame);
  
  // 错误处理
  if (!mainGame) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎮 Doodle Baseball
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Play Doodle Baseball online for free! Hit home runs and enjoy the ultimate baseball game experience with simple controls and addictive gameplay.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">Loading game data...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // 获取各种游戏数据
  const sidebarGames = getSidebarRecommendedGames(mainGame.id, 7);
  const footballGames = getGamesByCategory('football-games'); // 完整的 Google Games 列表作为核心产品
  const popularGames = getPopularGames();
  const allGames = getAllGames(); // 用于获取游戏总数
  
  // 获取分类预览游戏
  const categories = getAllCategories();
  const basketballGames = getGamesByCategory('basketball-games'); // Basketball Games

  // 收集已展示的游戏ID，用于排除重复
  const displayedGameIds = [
    mainGame.id,
    ...sidebarGames.map(g => g.id),
    ...footballGames.map(g => g.id),
    ...popularGames.map(g => g.id),
    ...basketballGames.map(g => g.id)
  ];

  // 获取更多游戏，排除已展示的
  const moreGames = getMoreGamesForHomepage(displayedGameIds, 12);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          
          {/* Main Game Player */}
          <div className="lg:col-span-3">
            <GamePlayer game={mainGame} priority={true} />
          </div>

          {/* Sidebar - Optimized Recommendations */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <SidebarGameList 
                games={sidebarGames} 
                title="🎯 Recommended For You" 
              />
            </div>
          </div>
        </div>

        {/* 懒加载的非首屏游戏内容区域 */}
        <Suspense fallback={
          <div className="mt-8 space-y-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <LazyGameSection
            googleGames={footballGames}
            popularGames={popularGames}
            basketballGames={basketballGames}
            moreGames={moreGames}
            allGamesCount={allGames.length}
          />
        </Suspense>
      </div>
    </Layout>
  );
} 