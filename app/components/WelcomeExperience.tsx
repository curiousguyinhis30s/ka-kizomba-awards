'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Users, Heart, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeExperienceProps {
  isOpen: boolean;
  onComplete: () => void;
}

export default function WelcomeExperience({ isOpen, onComplete }: WelcomeExperienceProps) {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: Trophy,
      title: "Welcome to KA - Kizomba Awards",
      subtitle: "Where Kizomba talent meets recognition",
      description: "Join the Southeast Asian Kizomba community celebrating exceptional dancers across multiple dance styles and categories.",
      highlight: "Kizomba, Urban Kiz, Semba, Tarraxo & more"
    },
    {
      icon: Heart,
      title: "How voting works",
      subtitle: "Simple, fair, and transparent",
      description: "Choose up to 3 dancers per category. The 3-vote limit ensures balanced, non-biased results by preventing single dancers from dominating.",
      highlight: "No signup required • Takes under 2 minutes"
    },
    {
      icon: Users,
      title: "How dancers get nominated",
      subtitle: "Community-driven nominations",
      description: "Dancers are nominated by community leaders, dance schools, and event organizers who recognize exceptional talent. Each nominee is vetted for their contribution to the dance community.",
      highlight: "Want to nominate someone? Contact us with their story"
    },
    {
      icon: Sparkles,
      title: "Make every vote count",
      subtitle: "Shape the future of dance",
      description: "Winners receive recognition and opportunities to perform at international festivals.",
      highlight: "Your voice matters in the dance community"
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  if (!isOpen) return null;

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="w-full max-w-lg mx-4 bg-black/50 rounded-3xl p-8 border border-gold/20 overflow-hidden relative"
            style={{ minHeight: '600px', height: '600px' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            
            <div className="relative z-10 text-center h-full flex flex-col justify-between">
              {/* Top Section */}
              <div className="space-y-6">
                {/* Progress Indicator */}
                <div className="flex items-center justify-center space-x-2 h-6">
                  {steps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index <= step ? 'bg-gold w-8' : 'bg-gold/30 w-2'
                      }`}
                      layoutId={`progress-${index}`}
                    />
                  ))}
                </div>

                {/* Icon Container - Fixed Size */}
                <div className="h-24 flex items-center justify-center">
                  <motion.div
                    key={step}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center border border-gold/20"
                  >
                    <Icon className="w-10 h-10 text-gold" />
                  </motion.div>
                </div>
              </div>

              {/* Content Section - Fixed Height */}
              <div className="flex-1 flex flex-col justify-center">
                <motion.div
                  key={step}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  {/* Title Section - Fixed Height */}
                  <div className="space-y-2 min-h-[80px] flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gold">
                      {currentStep.title}
                    </h2>
                    <p className="text-gold/60 text-sm font-medium">
                      {currentStep.subtitle}
                    </p>
                  </div>
                  
                  {/* Description - Fixed Height */}
                  <div className="min-h-[100px] flex items-center">
                    <p className="text-white/80 leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Highlight Badge - Fixed Position */}
                  <div className="h-12 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="inline-flex items-center space-x-2 bg-gold/10 rounded-full px-4 py-2 border border-gold/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      <span className="text-gold/90 text-sm font-medium">
                        {currentStep.highlight}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-4">
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  {step > 0 ? (
                    <Button
                      onClick={() => setStep(step - 1)}
                      className="bg-gold/5 hover:bg-gold/10 border border-gold/10 text-gold/70 hover:text-gold rounded-xl px-6 py-2 text-sm font-medium"
                    >
                      Back
                    </Button>
                  ) : (
                    <div className="w-[72px]" />
                  )}

                  <Button
                    onClick={handleNext}
                    className="bg-gold text-black hover:bg-gold/90 rounded-xl px-8 py-3 font-semibold group"
                  >
                    {step === steps.length - 1 ? 'Start Voting' : 'Continue'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>

                {/* Skip Option */}
                <button
                  onClick={handleComplete}
                  className="text-gold/40 hover:text-gold/60 text-sm font-medium transition-colors"
                >
                  Skip introduction
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}