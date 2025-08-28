'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dancer } from '../types';
import { Heart, MapPin, Check, Plus, Star, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from './ui/tooltip';

interface DancerCardProps {
  dancer: Dancer;
  isSelected: boolean;
  hasVoted: boolean;
  onVote: (dancerId: string) => void;
}

export default function DancerCard({ dancer, isSelected, hasVoted, onVote }: DancerCardProps) {
  const handleClick = () => {
    if (!hasVoted) {
      onVote(dancer.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !hasVoted) {
      e.preventDefault();
      onVote(dancer.id);
    }
  };

  return (
    <motion.div 
      className={`group relative overflow-hidden cursor-pointer mobile-touch-feedback focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-2xl ${
        hasVoted && !isSelected ? 'opacity-60' : ''
      } ${!hasVoted ? 'btn-micro-hover' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={hasVoted ? -1 : 0}
      role="button"
      aria-label={`${isSelected ? 'Selected' : 'Vote for'} ${dancer.name} from ${dancer.city}. ${dancer.description}`}
      aria-pressed={isSelected}
      aria-disabled={hasVoted}
      whileHover={{ 
        scale: hasVoted && !isSelected ? 1 : 1.02,
        y: hasVoted && !isSelected ? 0 : -2,
        rotateY: hasVoted && !isSelected ? 0 : 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.3 }
      }}
      whileTap={{ 
        scale: hasVoted ? 1 : 0.96,
        transition: { type: "spring", bounce: 0.4, duration: 0.15 }
      }}
      layout
      layoutId={`dancer-${dancer.id}`}
    >
      <div className="p-3 sm:p-6 text-center space-y-2 sm:space-y-4 relative">
        {/* Enhanced Selection Effect */}
        {isSelected && (
          <div className="absolute inset-0 border-2 border-white/80 rounded-2xl -m-px bg-white/5" />
        )}
        
        {/* Enhanced Photo Section */}
        <div className="relative z-10">
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto relative"
            whileHover={{ 
              scale: hasVoted && !isSelected ? 1 : 1.08,
              rotate: hasVoted && !isSelected ? 0 : [0, -2, 2, 0],
              transition: { 
                type: "spring", 
                bounce: 0.4, 
                duration: 0.4,
                rotate: { duration: 0.6 }
              }
            }}
          >
            <Avatar className={`w-16 h-16 sm:w-20 sm:h-20 transition-all duration-500 ${
              isSelected 
                ? 'ring-2 ring-white ring-offset-2 ring-offset-black shadow-2xl shadow-white/40' 
                : 'hover:ring-2 hover:ring-white/60 hover:ring-offset-2 hover:ring-offset-black hover:shadow-xl hover:shadow-white/25'
            }`}>
              <AvatarImage
                src={dancer.photo}
                alt={dancer.name}
                className="object-cover transition-all duration-600 group-hover:scale-115 group-hover:brightness-110"
              />
              <AvatarFallback className="bg-white/15 text-white text-sm sm:text-lg border border-white/40 transition-all duration-400 group-hover:bg-white/25 group-hover:border-white/60" style={{ fontWeight: 200, letterSpacing: '-0.01em' }}>
                {dancer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            {/* Enhanced glow effect for selected cards */}
            {isSelected && (
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              />
            )}
          </motion.div>
          
          {/* Premium Selection Indicator */}
          {isSelected && (
            <motion.div 
              className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-black"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.5 }}
            >
              <Check className="w-3.5 h-3.5 text-black font-bold" />
            </motion.div>
          )}
        </div>
        
        {/* Mobile-Optimized Info Section */}
        <div className="space-y-1 sm:space-y-2 z-10 relative">
          <h3 className={`text-sm sm:text-base font-medium line-clamp-1 transition-colors duration-300 ${
            isSelected ? 'text-white' : 'text-white/95 group-hover:text-white'
          }`} style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            {dancer.name}
          </h3>
          
          <div className={`flex items-center justify-center text-xs sm:text-sm transition-colors duration-200`} style={{ color: isSelected ? '#dddddd' : '#bbbbbb', fontWeight: 200 }}>
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
            <span className="line-clamp-1">{dancer.city}</span>
          </div>
          
          <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed px-1 sm:px-2 transition-colors duration-200 hidden sm:block`} style={{ 
            color: isSelected ? '#cccccc' : '#999999', 
            fontWeight: 200,
            lineHeight: 1.4 
          }}>
            {dancer.description}
          </p>
        </div>
        
        {/* Mobile-Optimized Vote Status */}
        {!hasVoted && (
          <motion.div 
            className="pt-2 sm:pt-4 z-10 relative"
            whileHover={{ 
              scale: 1.05,
              y: -1,
              transition: { type: "spring", bounce: 0.5, duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { type: "spring", bounce: 0.6, duration: 0.2 }
            }}
          >
            <motion.div 
              className={`relative inline-flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all duration-400 overflow-hidden w-full sm:w-auto ${
                isSelected 
                  ? 'bg-white text-black shadow-xl border-2 border-white font-medium' 
                  : 'bg-white/5 hover:bg-white/12 text-white/90 hover:text-white border border-white/30 hover:border-white/60 hover:shadow-lg backdrop-blur-sm'
              }`}
              animate={isSelected ? {
                boxShadow: [
                  '0 4px 20px rgba(255,255,255,0.3)',
                  '0 8px 32px rgba(255,255,255,0.5)',
                  '0 4px 20px rgba(255,255,255,0.3)'
                ]
              } : {}}
              transition={isSelected ? { duration: 2, repeat: Infinity } : {}}
            >
              {/* Shimmer effect for unselected buttons */}
              {!isSelected && (
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['0%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              
              <motion.div
                animate={isSelected ? { rotate: [0, 10, -10, 0] } : {}}
                transition={isSelected ? { duration: 0.6, delay: 0.1 } : {}}
              >
                {isSelected ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
              </motion.div>
              
              <span style={{ fontWeight: isSelected ? 400 : 250 }}>
                {isSelected ? 'Selected' : 'Vote'}
              </span>
            </motion.div>
          </motion.div>
        )}
        
        {/* Enhanced Vote Count Badge */}
        {dancer.votes > 0 && (
          <motion.div 
            className="absolute top-3 left-3 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/25 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/40 shadow-lg">
              <span className="text-sm text-white font-medium" style={{ fontWeight: 300 }}>{dancer.votes}</span>
            </div>
          </motion.div>
        )}
        
        {/* Enhanced Voting Complete Overlay */}
        {hasVoted && !isSelected && (
          <motion.div 
            className="absolute inset-0 bg-black/30 backdrop-blur-[1px] rounded-2xl flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 shadow-lg">
              <span className="text-sm text-white" style={{ fontWeight: 200 }}>Complete</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}