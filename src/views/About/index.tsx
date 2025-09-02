import React from 'react';

const About = () => {
    return (
        <div style={{ maxWidth: 700, margin: '40px auto', padding: '32px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
            <h1 style={{ fontSize: '2.2rem', marginBottom: 16 }}>关于我</h1>
            <p style={{ fontSize: '1.15rem', marginBottom: 24 }}>
                大家好，我是 Lily，一名热爱技术与生活的前端开发者。喜欢用代码记录思考、分享成长，也热衷于探索新技术和设计美学。
            </p>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 12 }}>创建博客的目的</h2>
            <ul style={{ fontSize: '1.08rem', marginBottom: 24, paddingLeft: 24 }}>
                <li>记录学习过程与心得，帮助自己持续成长。</li>
                <li>分享前端开发、技术实践与生活感悟，结识更多志同道合的朋友。</li>
                <li>整理常用知识点，方便自己和他人查阅。</li>
                <li>希望通过博客，激励更多人勇敢表达和持续学习。</li>
            </ul>
            <p style={{ fontSize: '1.08rem', color: '#666' }}>
                感谢你的访问和关注，欢迎留言交流，也欢迎一起进步！
            </p>
        </div>
    );
};
export default About