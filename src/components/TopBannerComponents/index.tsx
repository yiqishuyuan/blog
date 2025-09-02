import React, { useState, useEffect } from 'react';
import BannerComponentsCss from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import type { MenuProps, AutoCompleteProps } from 'antd';
import { Menu, AutoComplete, Input } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '首页',
    key: '/index',
  },
  {
    label: '文章/任务',
    key: '/index/article',
  },
  {
    label: '信息库',
    key: '/informationLibrary',
  },
  {
    label: '产品',
    key: '/product',
    children: [
      {
        type: 'group',
        label: '前端',
        children: [
          { label: 'PAI', key: '/PAI' },
          { label: '图书库', key: 'setting:2' },
          { label: '信息库', key: 'setting:3' },
        ],
      },
      {
        type: 'group',
        label: '后端',
        children: [
          { label: 'Option 3', key: 'setting:5' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
      {
        type: 'group',
        label: '小程序',
        children: [
          { label: 'Option 3', key: 'setting:7' },
          { label: 'Option 4', key: 'setting:8' },
        ],
      },
    ],
  },
  {
    key: '/index/calender',
    label: '日历',
  },
  {
    key: '/index/statistics',
    label: '网站统计',
  },
  {
    key: '/index/sponsorship',
    label: '捐赠',
  },
  {
    key: '/index/about',
    label: '关于我',
  },
];

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

function LayoutBanner(): React.JSX.Element {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [current, setCurrent] = useState('mail');
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };
  // 监听
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true); // 向下滚动 -> 隐藏
      } else {
        setHidden(false); // 向上滚动 -> 显示
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    
      <div className={`${BannerComponentsCss['layout-banner']} ${hidden ? BannerComponentsCss.hidden : ""}`}>
        {/* 左 */}
        <div className={BannerComponentsCss['layout-image']}>
          <img src="/public/favicon.jpg" alt="我的网站" className={BannerComponentsCss['img']} />
        </div>
        {/* 中 */}
        <div className="layout-list">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              height: '70px',
              lineHeight: '70px',
              borderBottom: 'none',
              width: '600px',
            }}
          />
        </div>
        {/* 搜索 */}
        <div className="search">
          <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="对全局信息检索......" enterButton />
          </AutoComplete>
        </div>
        {/* 注册 */}
        <div className={BannerComponentsCss['layout-other']}>
          <span>登录</span>
          <span>注册</span>
        </div>
      </div>
  );
}
const searchResult = (query: string) =>
  Array.from({ length: getRandomInt(5) })
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on
              <a
                href={`https://www.google.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
export default LayoutBanner;
