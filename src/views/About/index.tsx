import React, { useEffect,useState } from 'react';
import { EnvironmentOutlined, QqOutlined, GithubOutlined, WechatOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';
import MarkdownRenderer from './components/mdPage';

const About = () => {
  const md = `
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

\`\`\`js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
\`\`\`

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

\`\`\`js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
\`\`\`
`;
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  useEffect(() => {
    console.log('目录:', toc);
  }, [toc]);
  return (

    <div className="about-us">
      <div className="about-container" style={{ width: '100%', display: 'flex' }}>
        <div className="about-grid-1" style={{ width: '400px' }}>
          {/* 个人 */}
          <div
            className="personal-detail"
            style={{
              width: '100%',
              height: '400px',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              padding: '16px',
              boxSizing: 'border-box',
            }}
          >
            <div className="personal-image">
              <img
                src="https://avatars.githubusercontent.com/u/109205530?v=4"
                alt="Profile"
                style={{ width: '70px', height: '70px', margin: '0 auto' }}
              />
            </div>
            <div className="nickname" style={{ width: '100%' }}>
              <span
                style={{
                  width: '100px',
                  height: '35px',
                  margin: '0 auto',
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '25px',
                }}
              >
                lily
              </span>
            </div>
            <div
              className="location"
              style={{ width: '200px', height: '20px', margin: '0 auto', textAlign: 'center' }}
            >
              <span>
                <EnvironmentOutlined />
              </span>
              <span>Chengdu, China</span>
            </div>
            <Divider orientation="left"></Divider>
            {/* 联系 */}
            <div
              className="contact"
              style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}
            >
              <div className="email">
                <a
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '40px',
                  }}
                  target="_blank"
                  title="email"
                >
                  <QqOutlined />
                </a>
              </div>
              <div className="github">
                <a
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '40px',
                  }}
                  target="_blank"
                  title="github"
                >
                  <GithubOutlined />
                </a>
              </div>
              <div className="github">
                <a
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '40px',
                  }}
                  target="_blank"
                  title="微信"
                >
                  <WechatOutlined />
                </a>
              </div>
              <div className="github">
                <a
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '40px',
                  }}
                  target="_blank"
                  title="github"
                >
                  <WechatOutlined />
                </a>
              </div>
            </div>
          </div>
          {/* 合作伙伴 */}
          <div
            className="partner"
            style={{
              width: '400px',
            }}
          >
            <Divider orientation="left">合作伙伴</Divider>
            <ul style={{ width: '100%', display: 'flex' }}>
              <li style={{ width: '40px', height: '40px' }}>
                <img
                  src="https://avatars.githubusercontent.com/u/109205530?v=4"
                  alt="Profile"
                  style={{ width: '40px', height: '40px', marginRight: '8px', display: 'block' }}
                />
              </li>
              <li>
                <img
                  src="https://avatars.githubusercontent.com/u/109205530?v=4"
                  alt="Profile"
                  style={{ width: '40px', height: '40px', marginRight: '8px' }}
                />
              </li>
              <li>
                <img
                  src="https://avatars.githubusercontent.com/u/109205530?v=4"
                  alt="Profile"
                  style={{ width: '40px', height: '40px', marginRight: '8px' }}
                />
              </li>
              <li>
                <img
                  src="https://avatars.githubusercontent.com/u/109205530?v=4"
                  alt="Profile"
                  style={{ width: '40px', height: '40px' }}
                />
              </li>
            </ul>
          </div>
          {/* 相关标签 */}
          <div
            className="tags"
            style={{
              width: '400px',
            }}
          >
            <Divider orientation="left">标签库</Divider>
            <Flex gap="8px 8px" wrap>
              <Tag color="magenta">算法</Tag>
              <Tag color="red">vue</Tag>
              <Tag color="volcano">react</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </Flex>
          </div>
        </div>
        <div className="about-grid-2" style={{ width: '700px' }}>
          <div className="about-content">
            {/* 此处使用md或者文章渲染 */}
            <MarkdownRenderer content={md} onHeadings={(list)=>setToc(list)} />;
            <div>
              <p> 喜欢这篇文章/网站？打赏/订阅一下网站吧！</p>
            </div>
          </div>
        </div>
        <div className="about-grid-3">

        </div>
      </div>
    </div>
  );
};
export default About;
