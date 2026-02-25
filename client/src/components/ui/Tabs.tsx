import { LayoutGroup, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface TabItem {
  id: string;
  label: string;
}

interface TabsType {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  tabs: TabItem[];
}

export default function Tabs({ activeTab, setActiveTab, tabs }: TabsType) {
  return (
    <LayoutGroup>
      <div className="relative flex border-b border-primary/20 gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative flex flex-col items-center justify-center pb-2.5 pt-2 cursor-pointer"
          >
            <p
              className={`text-[10px] sm:text-xs font-bold tracking-wider transition-colors ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </p>

            {/* Animated Underline */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-0.5 sm:-bottom-0.75 left-0 right-0 h-0.5 sm:h-0.75 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}