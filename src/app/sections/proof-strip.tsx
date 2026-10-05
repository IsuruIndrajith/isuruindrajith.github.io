'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '6', label: 'Microservices Shipped' },
  { number: '3', label: 'CI/CD Pipelines Built' },
  { number: '1', label: 'EKS Cluster in Production' },
  { number: '20+', label: 'Modules Enterprise System' },
];

const marqueeItems = [
  'Java', '•', 'Spring Boot', '•', 'Kubernetes', '•', 'AWS EKS', '•',
  'Docker', '•', 'GitOps', '•', 'Argo CD', '•', 'Jenkins', '•',
  'Kafka', '•', 'Microservices', '•', 'REST APIs', '•', 'CI/CD', '•',
  'Prometheus', '•', 'Grafana', '•', 'Helm', '•', 'Terraform', '•',
];

export default function ProofStrip() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Top divider */}
      <div className="section-divider mb-16" />

      {/* Stats grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center md:text-left"
            >
              <div className="stat-number mb-2">{stat.number}</div>
              <p className="text-sm text-cream/50 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper py-6 border-y border-cream/[0.06]">
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className={`text-sm font-medium whitespace-nowrap ${
                item === '•'
                  ? 'text-accent/40'
                  : 'text-cream/30 uppercase tracking-widest'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
}