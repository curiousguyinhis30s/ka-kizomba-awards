'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUpload, FaUser, FaMapPin, FaFileAlt, FaStar, FaPaperPlane, FaCamera } from 'react-icons/fa';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface NominationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NominationModal({ isOpen, onClose }: NominationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    description: '',
    category: '',
    socialMedia: '',
    portfolio: '',
    photo: null as File | null
  });
  const [dragOver, setDragOver] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const categoryGroups = [
    {
      title: "Dance Skills",
      description: "Technical excellence & artistry",
      categories: [
        { id: 'kizomba_semba', name: 'Best Kizomba/Semba Dancer', icon: '🌊' },
        { id: 'tarraxo', name: 'Best Tarraxo Dancer', icon: '⚡' },
        { id: 'urban_kiz', name: 'Best Urban Kiz Dancer', icon: '🔮' },
      ]
    },
    {
      title: "Music & Entertainment",
      description: "Sound architects of the dance floor",
      categories: [
        { id: 'best_dj_kizomba', name: 'Best DJ Kizomba', icon: '🎧' },
      ]
    },
    {
      title: "Social & Community",
      description: "Heart & soul of the dance community",
      categories: [
        { id: 'community_builder', name: 'Community Builder', icon: '👨‍👩‍👧‍👦' },
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePhotoUpload(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setTimeout(() => {
      onClose();
      setSubmitStatus('idle');
      setFormData({
        name: '',
        city: '',
        description: '',
        category: '',
        socialMedia: '',
        portfolio: '',
        photo: null
      });
    }, 1500);
  };

  const isFormValid = formData.name && formData.city && formData.description && formData.category;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full w-full max-w-4xl flex flex-col">
            <div className="flex-shrink-0 flex justify-end p-4">
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            <div className="flex-grow overflow-y-auto px-4 pb-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Page Header */}
              <motion.header 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center space-x-4 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center shadow-xl">
                    <FaStar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-4xl text-white mb-1" style={{ fontWeight: 100, letterSpacing: '-0.04em' }}>
                      Nominate a Dancer
                    </h1>
                    <p className="text-white/60 text-sm" style={{ fontWeight: 200 }}>Kuala Lumpur Kizz Awards 2025</p>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-4"
                  style={{ fontWeight: 200, letterSpacing: '-0.02em' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Help us discover and celebrate amazing talent by nominating outstanding dancers, DJs, and community builders.
                </motion.p>
                
                <motion.p 
                  className="text-white/50 text-sm"
                  style={{ fontWeight: 100 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Every nomination helps recognize excellence across our dance community
                </motion.p>
              </motion.header>

              {submitStatus === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                    >
                      ✨
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Nomination Submitted!</h3>
                  <p className="text-white/60">Thank you for contributing to our dance community</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Photo Upload */}
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-white font-medium text-sm">Photo *</label>
                    <div
                      className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-300 ${
                        dragOver 
                          ? 'border-cyan-400 bg-cyan-400/10' 
                          : 'border-white/30 hover:border-white/50 bg-white/5 hover:bg-white/10'
                      }`}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handlePhotoUpload(e.target.files[0])}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      
                      <div className="text-center">
                        {formData.photo ? (
                          <div className="space-y-2">
                            <FaCamera className="w-8 h-8 text-green-400 mx-auto" />
                            <p className="text-green-400 font-medium">{formData.photo.name}</p>
                            <p className="text-white/60 text-xs">Click to change photo</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <FaUpload className="w-8 h-8 text-white/60 mx-auto" />
                            <p className="text-white/80">Drop photo here or click to upload</p>
                            <p className="text-white/40 text-xs">PNG, JPG up to 10MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="text-white font-medium text-sm flex items-center space-x-1">
                        <FaUser className="w-4 h-4" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        placeholder="Enter dancer's full name"
                      />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="text-white font-medium text-sm flex items-center space-x-1">
                        <FaMapPin className="w-4 h-4" />
                        <span>City *</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        placeholder="City, Country"
                      />
                    </motion.div>
                  </div>

                  {/* Enhanced Category Selection */}
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div>
                      <label className="text-white font-medium text-lg mb-2 block">Choose Award Category *</label>
                      <p className="text-white/60 text-sm mb-6">Select the category that best represents your nomination</p>
                    </div>

                    {categoryGroups.map((group, groupIndex) => (
                      <motion.div
                        key={group.title}
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + groupIndex * 0.2 }}
                      >
                        {/* Group Header */}
                        <div className="text-center">
                          <h3 className="text-white text-xl font-medium mb-2" style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
                            {group.title}
                          </h3>
                          <p className="text-white/60 text-sm" style={{ fontWeight: 200 }}>
                            {group.description}
                          </p>
                        </div>

                        {/* Category Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {group.categories.map((category, index) => (
                            <motion.button
                              key={category.id}
                              type="button"
                              onClick={() => handleInputChange('category', category.id)}
                              className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                                formData.category === category.id
                                  ? 'bg-white/15 backdrop-blur-sm border-white/60 shadow-lg ring-2 ring-white/30'
                                  : 'bg-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/10'
                              }`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + groupIndex * 0.2 + index * 0.05 }}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-xl mb-2">{category.icon}</div>
                              <div className="text-xs text-white/90 font-medium leading-tight" style={{ fontWeight: 300 }}>
                                {category.name}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="text-gold font-medium text-sm flex items-center space-x-1">
                      <FaFileAlt className="w-4 h-4" />
                      <span>Why should they be nominated? *</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                      placeholder="Describe their achievements, style, and what makes them special..."
                    />
                  </motion.div>

                  {/* Optional Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="text-white/80 font-medium text-sm">Social Media</label>
                      <input
                        type="text"
                        value={formData.socialMedia}
                        onChange={(e) => handleInputChange('socialMedia', e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        placeholder="@username or profile URL"
                      />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <label className="text-white/80 font-medium text-sm">Portfolio/Website</label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange('portfolio', e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        placeholder="https://..."
                      />
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <Button
                      type="submit"
                      disabled={!isFormValid || submitStatus === 'submitting'}
                      className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm ${
                        isFormValid
                          ? 'bg-white/10 text-white hover:bg-white/20 shadow-xl hover:shadow-2xl border border-white/20 hover:border-white/30'
                          : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'
                      }`}
                    >
                      {submitStatus === 'submitting' ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <FaPaperPlane className="w-4 h-4" />
                          <span>Submit Nomination</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}