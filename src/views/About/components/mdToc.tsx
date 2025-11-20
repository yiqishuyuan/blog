export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};
import React from 'react';
type TocProps = {
  headings: HeadingItem[];
};

export default function Toc({ headings }: TocProps) {
  return (
    <div style={{display:"flex",position:'fixed'}}>
      <nav style={{ width: 200 }}>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {headings.map((h) => (
            <li key={h.id} style={{ marginLeft: (h.level - 1) * 16 }}>
              <a href={`#${h.id}`} style={{ textDecoration: 'none', color: '#0366d6' }}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
