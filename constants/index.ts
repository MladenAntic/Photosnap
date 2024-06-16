import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export const navItems = [
  {
    title: "Stories",
    href: "/stories",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

const stories = [
  {
    background: "/mountains.png",
    publishedDate: "April 16th 2024",
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    background: "/cityscapes.png",
    publishedDate: "April 14th 2024",
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    background: "/voyage.png",
    publishedDate: "April 11th 2024",
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    background: "/architecturals.png",
    publishedDate: "April 9th 2024",
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
  {
    background: "/world-tour.png",
    publishedDate: "April 7th 2024",
    title: "World Tour 2024",
    author: "by Timothy Wagner",
  },
  {
    background: "/corners.png",
    publishedDate: "April 3rd 2024",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
  },
  {
    background: "/king-africa.png",
    publishedDate: "March 29th 2024",
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
  },
  {
    background: "/trip-nowhere.png",
    publishedDate: "March 21st 2024",
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
  },
  {
    background: "/rage-sea.png",
    publishedDate: "March 19th 2024",
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
  },
  {
    background: "/running-free.png",
    publishedDate: "March 16th 2024",
    title: "Running Free",
    author: "by Michelle",
  },
  {
    background: "/waves.png",
    publishedDate: "March 11th 2024",
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
  },
  {
    background: "/calm-waters.png",
    publishedDate: "March 9th 2024",
    title: "Calm Waters",
    author: "by Samantha Brooke",
  },
  {
    background: "/milky-way.png",
    publishedDate: "March 5th 2024",
    title: "The Milky Way",
    author: "by Benjamin Cruz",
  },
  {
    background: "/dark-forest.png",
    publishedDate: "March 4th 2024",
    title: "Night at The Dark Forest",
    author: "by Mohammed Abdul",
  },
  {
    background: "/somwarpet.png",
    publishedDate: "March 1st 2024",
    title: "Somwarpet's Beauty",
    author: "by Michelle",
  },
  {
    background: "/land-of-dreams.png",
    publishedDate: "February 25th 2024",
    title: "Land of Dreams",
    author: "by William Malcolm",
  },
];

const features = [
  {
    image: "/responsive.svg",
    title: "100% Responsive",
    description:
      "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    image: "/no-limits.svg",
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    image: "/embed.svg",
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
  {
    image: "/custom-domain.svg",
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    image: "/boost.svg",
    title: "Boost Your Exposure",
    description:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    image: "/drag-drop.svg",
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to make it look good.",
  },
];

const socialLinks = [
  {
    Icon: FaFacebookSquare,
    href: "https://www.facebook.com",
    className: "facebook",
  },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com",
    className: "youtube",
  },
  {
    Icon: FaTwitter,
    href: "https://www.twitter.com",
    className: "twitter",
  },
  {
    Icon: FaPinterest,
    href: "https://www.pinterest.com",
    className: "pinterest",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com",
    className: "instagram",
  },
];

const plans = [
  {
    height: "h-[407px]",
    title: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    textColor: "text-black",
    priceMonthly: "$19.00",
    priceYearly: "$190.00",
    bgColor: "bg-mediumgrey",
    titleColor: "text-black",
    priceColor: "text-black",
    btnColor: "bg-black",
    btnTextColor: "text-white",
  },
  {
    height: "h-[470px]",
    title: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    textColor: "text-white",
    priceMonthly: "$39.00",
    priceYearly: "$390.00",
    bgColor: "bg-black",
    titleColor: "text-white",
    priceColor: "text-white",
    btnColor: "bg-white",
    btnTextColor: "text-black",
  },
  {
    height: "h-[407px]",
    title: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    textColor: "text-black",
    priceMonthly: "$99.00",
    priceYearly: "$990.00",
    bgColor: "bg-mediumgrey",
    titleColor: "text-black",
    priceColor: "text-black",
    btnColor: "bg-black",
    btnTextColor: "text-white",
  },
];

const tableData = [
  {
    rowTitle: "Unlimited Story Posting",
    column1: true,
    column2: true,
    column3: true,
  },
  {
    rowTitle: "Unlimited Photo Upload",
    column1: true,
    column2: true,
    column3: true,
  },
  {
    rowTitle: "Embedding custom content",
    column1: false,
    column2: true,
    column3: true,
  },
  {
    rowTitle: "Customize Metadata",
    column1: false,
    column2: true,
    column3: true,
  },
  {
    rowTitle: "Advanced Metrics",
    column1: false,
    column2: false,
    column3: true,
  },
  {
    rowTitle: "Photo Downloads",
    column1: false,
    column2: false,
    column3: true,
  },
  {
    rowTitle: "Search Engine Indexing",
    column1: false,
    column2: false,
    column3: true,
  },
  {
    rowTitle: "Custom Analytics",
    column1: false,
    column2: false,
    column3: true,
  },
];

export { stories, features, socialLinks, plans, tableData };
