'use client';

import { useState, useEffect } from 'react';
import { Category, Dancer } from './types';
import { categoryGroups } from './data/mockData';
import DancerCard from './components/DancerCard';
import WelcomeExperience from './components/WelcomeExperience';
import NominationModal from './components/NominationModal';
import { FaChevronLeft, FaChevronRight, FaTrophy, FaUsers, FaHeart, FaBars, FaStar, FaGlobe } from 'react-icons/fa';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import { poppins } from './fonts';

interface Vote {
  categoryId: string;
  dancerId: string;
}

interface VotingState {
  votes: Vote[];
  hasVoted: Record<string, boolean>;
  votedDancers: Record<string, string[]>;
}

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [showNominationModal, setShowNominationModal] = useState(false);
  const [votingState, setVotingState] = useState<VotingState>({
    votes: [],
    hasVoted: {},
    votedDancers: {}
  });

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  useEffect(() => {
    const savedVotes = localStorage.getItem('danceAwardVotes');
    if (savedVotes) {
      const parsed = JSON.parse(savedVotes);
      setVotingState(parsed);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  const currentCategory = categoryGroups[selectedGroupIndex].categories[currentCategoryIndex];
  const mockCategories = categoryGroups.flatMap(group => group.categories);

  const handleVote = (dancerId: string) => {
    const categoryVotes = votingState.votedDancers[currentCategory.id] || [];
    
    if (categoryVotes.includes(dancerId)) {
      return;
    }

    if (categoryVotes.length >= 3) {
      return;
    }

    const newVote: Vote = { categoryId: currentCategory.id, dancerId };
    const updatedVotedDancers = {
      ...votingState.votedDancers,
      [currentCategory.id]: [...categoryVotes, dancerId]
    };

    const newVotingState = {
      votes: [...votingState.votes, newVote],
      hasVoted: {
        ...votingState.hasVoted,
        [currentCategory.id]: updatedVotedDancers[currentCategory.id].length === 3
      },
      votedDancers: updatedVotedDancers
    };

    setVotingState(newVotingState);
    localStorage.setItem('danceAwardVotes', JSON.stringify(newVotingState));

    // Auto-advance to next category when current is complete
    if (updatedVotedDancers[currentCategory.id].length === 3 && currentCategoryIndex < mockCategories.length - 1) {
      setTimeout(() => {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
      }, 1000);
    }
  };

  const getTotalProgress = () => {
    const completedCategories = Object.values(votingState.hasVoted).filter(Boolean).length;
    return (completedCategories / mockCategories.length) * 100;
  };

  const getCurrentCategoryProgress = () => {
    const categoryVotes = votingState.votedDancers[currentCategory.id] || [];
    return (categoryVotes.length / 3) * 100;
  };

  const goToNextCategory = () => {
    if (currentCategoryIndex < categoryGroups[selectedGroupIndex].categories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const goToPrevCategory = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showWelcome && <WelcomeExperience isOpen={showWelcome} onComplete={handleWelcomeComplete} />}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Enhanced Premium Header */}
        <motion.header 
          className="p-6 md:p-8 mb-8 md:mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-50"></div>
          <div className="flex items-center justify-between relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <h1 className={`text-6xl md:text-7xl text-gold tracking-tight mb-1 md:mb-2 font-bold ${poppins.className}`}>
                KA
              </h1>
            </motion.div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <Button 
                  onClick={() => setShowNominationModal(true)}
                  className="bg-gold text-black btn-micro-hover px-4 md:px-8 py-2 md:py-3 text-sm md:text-base mobile-touch-feedback"
                >
                  <span className="hidden sm:inline">Nominate</span>
                  <span className="sm:hidden">+</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gold/70 hover:text-gold p-2 md:p-3 mobile-touch-feedback"
                >
                  <FaBars className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Category Group Tabs */}
        <div className="flex justify-center mb-8">
          {categoryGroups.map((group, index) => (
            <motion.button
              key={group.name}
              onClick={() => setSelectedGroupIndex(index)}
              className={`px-4 py-2 text-lg font-semibold rounded-full transition-colors duration-300 ${
                selectedGroupIndex === index ? 'bg-gold text-black' : 'text-gold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {group.name}
            </motion.button>
          ))}
        </div>

        {/* Ultra-Modern Voting Interface */}
        <motion.div
          className="bg-black/50 p-6 md:p-12 max-w-8xl mx-auto rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          role="main"
          aria-label="Voting interface for dance awards"
        >
          {/* Enhanced Category Header */}
          <div className="text-center mb-12">
            <motion.div 
              key={currentCategory.id}
              className="flex items-center justify-center space-x-4 mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-4xl opacity-80">{currentCategory.icon}</span>
              <div>
                <h2 className="text-3xl text-white mb-1" style={{ fontWeight: 100, letterSpacing: '-0.03em' }}>{currentCategory.name}</h2>
                <p className="text-base text-white/70" style={{ fontWeight: 200 }}>{currentCategory.description}</p>
              </div>
            </motion.div>
            
            {/* Progress System */}
            <div className="space-y-4">
              {/* Enhanced Progress Dots */}
              <div className="flex items-center justify-center space-x-3" role="progressbar" aria-label={`Category progress: ${currentCategoryIndex + 1} of ${categoryGroups[selectedGroupIndex].categories.length}`}>
                {categoryGroups[selectedGroupIndex].categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setCurrentCategoryIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-1 focus:ring-offset-black ${
                      index === currentCategoryIndex 
                        ? 'bg-white scale-150 shadow-lg shadow-white/30' 
                        : votingState.hasVoted[category.id]
                        ? 'bg-white/70 scale-110 hover:bg-white/80'
                        : 'bg-white/25 hover:bg-white/40'
                    }`}
                    whileHover={{ scale: index === currentCategoryIndex ? 1.5 : 1.3 }}
                    whileTap={{ scale: index === currentCategoryIndex ? 1.4 : 1.1 }}
                    aria-label={`Go to ${category.name} category`}
                    aria-current={index === currentCategoryIndex ? 'step' : undefined}
                  />
                ))}
              </div>

              {/* Category Progress Info */}
              <div className="bg-white/5 border border-white/15 rounded-full px-6 py-3 inline-flex items-center space-x-4 text-sm backdrop-blur-sm">
                <span className="text-gray-400" style={{ fontWeight: 100 }}>
                  Category {currentCategoryIndex + 1} of {categoryGroups[selectedGroupIndex].categories.length}
                </span>
                <div className="w-px h-4 bg-white/25"></div>
                <span style={{ fontWeight: 200, color: '#ffffff' }}>
                  {(votingState.votedDancers[currentCategory.id] || []).length}/3 votes
                </span>
                <div className="w-px h-4 bg-white/25"></div>
                <span className="text-gray-400" style={{ fontWeight: 100 }}>
                  {Math.round(getTotalProgress())}% complete
                </span>
              </div>

              {/* Visual Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="bg-gold/15 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-gold/90 to-gold rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${getCurrentCategoryProgress()}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex justify-between items-center mb-10">
            <motion.div
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goToPrevCategory}
                disabled={currentCategoryIndex === 0}
                className="group text-gold/60 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed flex items-center space-x-3 bg-gold/5 hover:bg-gold/10 backdrop-blur-sm border border-gold/15 hover:border-gold/30 rounded-xl px-6 py-3 transition-all duration-300"
              >
                <motion.div
                  animate={{ x: currentCategoryIndex === 0 ? 0 : [-1, 0] }}
                  transition={{ duration: 0.3, repeat: currentCategoryIndex === 0 ? 0 : Infinity, repeatType: "reverse" }}
                >
                  <FaChevronLeft className="w-4 h-4" />
                </motion.div>
                <span className="text-sm" style={{ fontWeight: 200 }}>Previous</span>
              </Button>
            </motion.div>

            {/* Category indicator with smooth transitions */}
            <motion.div 
              className="flex items-center space-x-2 bg-gold/8 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2"
              key={currentCategoryIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {currentCategory.icon}
              </motion.span>
              <span className="text-sm text-white/80" style={{ fontWeight: 200 }}>
                {currentCategoryIndex + 1} of {categoryGroups[selectedGroupIndex].categories.length}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goToNextCategory}
                disabled={currentCategoryIndex === categoryGroups[selectedGroupIndex].categories.length - 1}
                className="group text-gold/60 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed flex items-center space-x-3 bg-gold/5 hover:bg-gold/10 backdrop-blur-sm border border-gold/15 hover:border-gold/30 rounded-xl px-6 py-3 transition-all duration-300"
              >
                <span className="text-sm" style={{ fontWeight: 200 }}>Next</span>
                <motion.div
                  animate={{ x: currentCategoryIndex === categoryGroups[selectedGroupIndex].categories.length - 1 ? 0 : [1, 0] }}
                  transition={{ duration: 0.3, repeat: currentCategoryIndex === categoryGroups[selectedGroupIndex].categories.length - 1 ? 0 : Infinity, repeatType: "reverse" }}
                >
                  <FaChevronRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile-Optimized Dancers Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentCategory.id}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 md:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {[...currentCategory.dancers].sort((a, b) => {
                const aSelected = (votingState.votedDancers[currentCategory.id] || []).includes(a.id);
                const bSelected = (votingState.votedDancers[currentCategory.id] || []).includes(b.id);
                if (aSelected && !bSelected) return -1;
                if (!aSelected && bSelected) return 1;
                return 0;
              }).map((dancer, index) => {
                const categoryVotes = votingState.votedDancers[currentCategory.id] || [];
                const isSelected = categoryVotes.includes(dancer.id);
                const hasVotedInCategory = votingState.hasVoted[currentCategory.id];
                const votePosition = isSelected ? categoryVotes.indexOf(dancer.id) + 1 : null;

                return (
                  <motion.div
                    key={dancer.id}
                    initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: 45 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.08,
                      type: "spring",
                      bounce: 0.3,
                      ease: "easeOut"
                    }}
                    className="relative bg-transparent hover:bg-gold/4 border border-gold/8 hover:border-gold/25 rounded-2xl transition-all duration-400 group perspective-1000"
                    whileHover={{ 
                      scale: hasVotedInCategory && !isSelected ? 1 : 1.03,
                      y: hasVotedInCategory && !isSelected ? 0 : -4,
                      rotateY: hasVotedInCategory && !isSelected ? 0 : 2,
                      transition: { type: "spring", bounce: 0.4, duration: 0.3 }
                    }}
                  >
                    {/* Vote position indicator */}
                    {votePosition && (
                      <motion.div 
                        className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-black rounded-full flex items-center justify-center text-xs font-bold shadow-xl border-2 border-black z-20"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring", 
                          bounce: 0.8, 
                          delay: 0.2,
                          duration: 0.6 
                        }}
                      >
                        {votePosition}
                      </motion.div>
                    )}
                    
                    <DancerCard
                      dancer={dancer}
                      isSelected={isSelected}
                      hasVoted={hasVotedInCategory}
                      onVote={handleVote}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Category Complete Message */}
          {votingState.hasVoted[currentCategory.id] && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            >
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-base text-white" style={{ fontWeight: 200, letterSpacing: '-0.01em' }}>
                  Category Complete! Moving to next...
                </span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Who We Are Section */}
        <motion.section 
          id="who-we-are"
          className="mt-24 mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className={`text-4xl md:text-5xl font-light text-white text-center mb-12 ${poppins.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGlobe className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Global Community</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Connecting dancers across Malaysia, Singapore, Thailand, and India in a celebration of Kizomba culture and artistry.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Passion Driven</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Born from our love for the dance, we celebrate the artists, DJs, and community builders who make magic happen on every floor.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaTrophy className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Excellence</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Recognizing outstanding talent, dedication, and the spirit that elevates our dance community to new heights.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                The Kuala Lumpur Kizz Awards celebrate the vibrant tapestry of our dance community, 
                honoring those who inspire, teach, and bring joy to dance floors across Southeast Asia.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Footer */}
        <motion.footer 
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-6 bg-gold/5 backdrop-blur-sm border border-gold/10 rounded-full px-8 py-4"
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <span className="text-sm text-gray-400" style={{ fontWeight: 200, letterSpacing: '-0.01em' }}>Dance Community</span>
            <div className="w-1 h-1 bg-gold/40 rounded-full"></div>
            <span className="text-sm text-gray-400" style={{ fontWeight: 200, letterSpacing: '-0.01em' }}>Powered by Passion</span>
            <div className="w-1 h-1 bg-gold/40 rounded-full"></div>
            <span className="text-sm text-gray-400" style={{ fontWeight: 200, letterSpacing: '-0.01em' }}>Built for Connection</span>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-xs text-gray-600"
            style={{ fontWeight: 100, letterSpacing: '-0.005em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
Kuala Lumpur Kizz Awards 2025 • Celebrating Excellence
          </motion.p>
        </motion.footer>
      </div>

      {/* Nomination Modal */}
      <NominationModal 
        isOpen={showNominationModal}
        onClose={() => setShowNominationModal(false)}
      />
    </div>
  );
}