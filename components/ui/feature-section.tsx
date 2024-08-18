import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconDiscount,
  IconEaseInOut,
  IconGlobe,
  IconHeart,
  IconHeartHandshake,
  IconHelp,
  IconLanguage,
  IconPlaneDeparture,
  IconRouteAltLeft,
  IconSettings,
  IconShieldCheck,
  IconTerminal2,
  IconWorld,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    
        const features = [
          {
            title: "Explore the World",
            description:
              "Discover hidden gems and famous landmarks across the globe with personalized travel itineraries.",
            icon: <IconWorld />,
          },
          {
            title: "Hassle-Free Booking",
            description:
              "Easily book flights, hotels, and tours with our user-friendly platform.",
            icon: <IconPlaneDeparture />,
          },
          {
            title: "Affordable Travel Deals",
            description:
              "Enjoy exclusive discounts and offers on flights, hotels, and vacation packages.",
            icon: <IconDiscount />,
          },
          {
            title: "24/7 Travel Support",
            description: "Our travel experts are available around the clock to assist you.",
            icon: <IconHeartHandshake/>,
          },
          {
            title: "Multi-Language Support",
            description:
              "Communicate with ease as our platform supports multiple languages.",
            icon: <IconLanguage />,
          },
          {
            title: "Safe and Secure",
            description:
              "Travel with peace of mind, knowing your safety and security are our top priorities.",
            icon: <IconShieldCheck />,
          },
          {
            title: "Customizable Packages",
            description:
              "Tailor your travel experience to match your preferences and budget.",
            icon: <IconSettings/>,
          },
          {
            title: "Worldwide Destinations",
            description: "From bustling cities to serene beaches, we offer it all.",
            icon: <IconGlobe />,
          },
        ];
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark-border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark-border-neutral-800",
        index < 4 && "lg:border-b dark-border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark-from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark-from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark-text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark-bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark-text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark-text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
