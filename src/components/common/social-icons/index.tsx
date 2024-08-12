import {
  Calendly,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Mastodon,
  Reddit,
  Telegram,
  Threads,
  Twitter,
  Whatsapp,
  X,
  Youtube,
} from './icons';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  whatsapp: Whatsapp,
  telegram: Telegram,
  threads: Threads,
  instagram: Instagram,
  reddit: Reddit,
  calendly: Calendly,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href?: string | undefined;
  size?: number;
  color?: string;
};

const SocialIcon = ({
  kind,
  href,
  size = 8,
  color = 'white',
}: SocialIconProps) => {
  const SocialSvg = components[kind];

  return (
    <>
      {kind === 'mail' && !href ? (
        <>
          <span className='sr-only'>{kind}</span>
          <SocialSvg
            className={`cursor-pointer fill-current dark:text-${color} hover:text-primary-500  dark:hover:text-primary-400 h-${size} w-${size}`}
          />
        </>
      ) : (
        <a
          className='text-sm text-gray-500 transition hover:text-gray-600'
          target='_blank'
          rel='noopener noreferrer'
          href={href}>
          <span className='sr-only'>{kind}</span>
          <SocialSvg
            className={`fill-current hover:text-primary-500 dark:hover:text-primary-400 h-${size} w-${size} dark:text-${color}`}
          />
        </a>
      )}
    </>
  );
};

export default SocialIcon;
