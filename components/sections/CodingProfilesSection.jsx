"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";
import { codingProfiles } from "../../lib/data/codingProfiles";

function CodingProfileCard({ profile, index }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "leetcode":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        );
      case "codeforces":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm-4.5 0c0 .828.672 1.5 1.5 1.5h3c.828 0 1.5-.672 1.5-1.5v-3c0-.828.672-1.5 1.5-1.5h3c.828 0 1.5-.672 1.5-1.5v-3c0-.828.672-1.5 1.5-1.5h3c.828 0 1.5-.672 1.5-1.5V7.5c0-.828-.672-1.5-1.5-1.5h-3c-.828 0-1.5.672-1.5 1.5v3c0 .828-.672 1.5-1.5 1.5h-3z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.572 0-.283-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 0.969 1.838 2.807 1.304 3.492 0.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.522.122-3.176 0 0 1.008-.322 3.301 1.23a9.587 9.587 0 0 1 2.851-.412c0.942-.142 1.944-.212 2.917-.212s1.974.07 2.917.212c1.098-0.554 2.306-0.802 3.301-1.23 0.186-1.654 0.247-3.176 0.122-3.176 0.686-1.218 2.076-2.129 4.019-2.991 1.215-0.865 2.155-0.058 2.514 0.233 0.242-1.404 0.518-2.948 0.518-5.953 0-4.148-3.371-7.525-7.525-7.525C17.373 0.373 12 0.373 12 0z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.619H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zm12.542 0h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.619h-3.55v-2.38h-.046c-.477.9-1.637 1.85-3.37 1.85-3.601 0-4.267-2.37-4.267-5.455V9h3.577v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ transformOrigin: "center center" }}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          filter: 'blur(1px)',
        }}
      />
      {/* Icon */}
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600/20">
          {getIcon(profile.icon)}
        </div>
        {/* Platform Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {profile.platform}
        </h3>
        {/* Username/Handle */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
          @{profile.username}
        </p>
        {/* Stats */}
        <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
          {platformStats(profile.platform, profile.stats)}
        </div>
        {/* Profile Button */}
        <div className="mt-6">
          <Button
            variant="outline"
            size="sm"
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to render platform-specific stats
function platformStats(platform, stats) {
  switch (platform) {
    case "LeetCode":
      return (
        <>
          <span>Problems Solved: {stats.solved}</span>
          <span>Global Ranking: #{stats.ranking.toLocaleString()}</span>
          <span>Contests: {stats.contests}</span>
          <span>Rating: {stats.rating}</span>
        </>
      );
    case "Codeforces":
      return (
        <>
          <span>Problems Solved: {stats.solved}</span>
          <span>Rank: {stats.ranking}</span>
          <span>Contests: {stats.contests}</span>
          <span>Rating: {stats.rating}</span>
        </>
      );
    case "GitHub":
      return (
        <>
          <span>Repositories: {stats.repositories}</span>
          <span>Contributions: {stats.contributions}</span>
          <span>Stars: {stats.stars}</span>
          <span>Followers: {stats.followers}</span>
        </>
      );
    case "LinkedIn":
      return (
        <>
          <span>Connections: {stats.connections}</span>
          <span>Followers: {stats.followers}</span>
          <span>Profile Views: {stats.views}</span>
          <span>Posts: {stats.posts}</span>
        </>
      );
    default:
      return <span>Stats unavailable</span>;
  }
}

export default function CodingProfilesSection() {
  return (
    <SectionWrapper id="coding" className="bg-white/50 dark:bg-gray-950/50 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[250px] bg-blue-500/4 dark:bg-blue-500/8 rounded-full blur-2xl transform-gpu" />
      </div>

      <SectionHeader
        title="Coding Profiles"
        subtitle="My presence across competitive programming platforms"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {codingProfiles.map((profile, index) => (
          <CodingProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}