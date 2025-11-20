import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect, useRef } from 'react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
// GitHub Markdown 样式
import 'github-markdown-css/github-markdown.css';
import { rehypeCollectHeadings } from './rehypeCollectHeadings';
type MarkdownViewerProps = {
  content: string;
  onHeadings?: (list: { id: string; text: string; level: number }[]) => void;
};
type CodeProps = {
  inline?: boolean; 
  className?: string;
  children?: React.ReactNode;
};

export default function MarkdownViewer({ content, onHeadings }: MarkdownViewerProps) {
  const [copied, setCopied] = useState(false);
  const tocRef = useRef([]);
  const [prevContent, setPrevContent] = useState<string>('');
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
  }, []);
  useEffect(() => {
    // ⚡ 只有内容变化才更新
    if (content !== prevContent && onHeadings && tocRef.current.length > 0) {
      onHeadings(tocRef.current);
      setPrevContent(content); // 记录已经处理过的内容
    }
  }, [content, onHeadings, prevContent]);
  return (
    <div className="markdown-body" style={{ padding: 20 }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'prepend' }], // 可选，给标题加锚点
          [rehypeCollectHeadings, (list:any) => (tocRef.current = list)],
        ]}
        components={{
          code({ inline, className, children, ...props }: CodeProps) {
            const codeText = String(children).replace(/\n$/, '');

            if (!inline) {
              // 检测语言 lang-xxxx
              const match = /language-(\w+)/.exec(className || '');
              const lang = match ? match[1] : 'plaintext';

              // highlight.js 渲染
              const highlighted = hljs.highlight(codeText, {
                language: lang,
              }).value;

              return (
                <div className="code-block-wrapper" style={{ position: 'relative' }}>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(codeText)}
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 10,
                      background: '#3f3f3f',
                      color: '#ccccccff',
                      border: 'none',
                      padding: '4px 8px',
                      fontSize: '12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    {copied ? '已复制!' : '复制'}
                  </button>

                  <pre>
                    <code
                      className={`hljs language-${lang}`}
                      dangerouslySetInnerHTML={{ __html: highlighted }}
                      {...props}
                    />
                  </pre>
                </div>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
