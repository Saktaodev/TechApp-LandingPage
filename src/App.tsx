import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './components/AnimatedSection';
import { FeatureCard } from './components/FeatureCard';
import { Navbar } from './components/Navbar';
import { 
  Shield, 
  Zap, 
  Cloud, 
  Users, 
  Settings,
  ChevronDown,
  ArrowRight,
  Globe,
  Lock,
  Sparkles,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,50,255,0.2),transparent_50%)]" />
        <div className="container relative pt-32 pb-20">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Digital Experience
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Elevate your digital presence with our cutting-edge technology platform.
              Built for the future, designed for today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-purple-500/30 hover:border-purple-500 rounded-full font-semibold">
                Watch Demo
              </button>
            </motion.div>
          </AnimatedSection>

          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black" id="features">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
            <p className="text-gray-400">Discover the tools that will revolutionize your workflow and boost productivity.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <FeatureCard 
                icon={Shield}
                title="Enterprise Security"
                description="Bank-grade security protocols and end-to-end encryption to protect your data."
              />
            </AnimatedSection>
            <AnimatedSection>
              <FeatureCard 
                icon={Zap}
                title="Lightning Fast"
                description="Optimized performance ensuring quick load times and smooth operations."
              />
            </AnimatedSection>
            <AnimatedSection>
              <FeatureCard 
                icon={Cloud}
                title="Cloud Integration"
                description="Seamless cloud integration with your existing infrastructure."
              />
            </AnimatedSection>
            <AnimatedSection>
              <FeatureCard 
                icon={Users}
                title="Team Collaboration"
                description="Real-time collaboration tools for enhanced team productivity."
              />
            </AnimatedSection>
            <AnimatedSection>
              <FeatureCard 
                icon={Settings}
                title="Advanced Analytics"
                description="Detailed insights and analytics to track your business growth."
              />
            </AnimatedSection>
            <AnimatedSection>
              <FeatureCard 
                icon={Globe}
                title="Global Scale"
                description="Built to scale globally with multi-region deployment options."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-900" id="solutions">
        <div className="container">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Solutions for Every Need</h2>
              <p className="text-gray-400 mb-8">
                Our platform adapts to your business requirements, providing customized solutions
                that drive growth and innovation.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Lock, text: "Advanced security measures" },
                  { icon: Sparkles, text: "AI-powered automation" },
                  { icon: MessageSquare, text: "24/7 Premium support" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-5 h-5 text-purple-500" />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Technology Solution"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-black" id="integrations">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-gray-400">
              Connect with your favorite tools and services without any hassle.
              Our platform works with the tools you already use.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4" />
                  <h3 className="font-semibold mb-2">Integration {index + 1}</h3>
                  <p className="text-sm text-gray-400">Seamlessly connect your workflow</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900" id="testimonials">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO at TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
                quote: "This platform has transformed how we operate. The efficiency gains are remarkable."
              },
              {
                name: "Michael Chen",
                role: "CTO at StartupX",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
                quote: "The security features and cloud integration capabilities are exactly what we needed."
              },
              {
                name: "Emily Davis",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                quote: "Outstanding support team and robust feature set. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <AnimatedSection className="bg-gradient-to-br from-purple-900/50 via-black to-pink-900/50 p-12 rounded-3xl border border-purple-500/20 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have already transformed their digital experience.
              Start your journey today.
            </p>
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold inline-flex items-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>© 2024 TechApp. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;