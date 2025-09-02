import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

/**
 * Hook: 检测滚动方向
 * @param threshold 距离阈值，避免微小抖动
 * @returns scrollDir
 */
export function useScrollDirection(threshold: number = 0): ScrollDirection {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    console.log('上一位置', lastScrollY);
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      console.log('当前一位置', currentScrollY);
      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        // 小于阈值，不更新
        return;
      }

      if (currentScrollY > lastScrollY) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [threshold]);

  return scrollDir;
}
