import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '极速部署',
    emoji: '🚀',
    description: (
      <>
        几分钟内即可完成安装配置。支持 Docker 一键部署，
        让您专注于记录美好，而不是繁琐的环境搭建。
      </>
    ),
  },
  {
    title: '安全存储',
    emoji: '🔒',
    description: (
      <>
        您的照片，完全由您掌控。支持多种后端存储配置，
        私有化部署确保数据隐私安全，无惧泄露风险。
      </>
    ),
  },
  {
    title: '便捷分享',
    emoji: '✨',
    description: (
      <>
        快速生成分享链接，轻松将美好瞬间传递给亲朋好友。
        无论是家人相册还是摄影作品集，都能优雅展示。
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

