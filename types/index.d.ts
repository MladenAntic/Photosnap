export interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
}

export interface BannerProps {
  title: string;
  description: string;
  btnText: string;
  btnTextColor: string;
  bgColor: string;
  textColor: string;
  textColorOpacity: string;
  bgImage: string;
  translateX: string;
  reverse?: boolean;
  button?: boolean
}

export interface MainCTAProps {
  text: string;
  btnTextColor: string;
}

export interface StoryCardProps {
  background: string;
  publishedDate?: string;
  title: string;
  author: string;
  index: number;
}

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export interface FooterLinkProps {
  text: string;
  link: string;
}

export interface PlanProps {
  height: string;
  title: string;
  description: string;
  textColor: string;
  priceMonthly: string;
  priceYearly: string;
  bgColor: string;
  titleColor: string;
  priceColor: string;
  btnColor: string;
  btnTextColor: string
  yearly: boolean;
}

export interface TableRowsProps {
  rowTitle: string;
  column1: boolean;
  column2: boolean;
  column3: boolean;
}