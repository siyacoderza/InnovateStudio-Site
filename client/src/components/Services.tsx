import { motion } from "framer-motion";
import { Factory, Lightbulb, Globe2, TrendingUp, Cpu, Workflow } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Develop breakthrough product roadmaps and uncover new market opportunities through rigorous analysis and creative thinking.",
  },
  {
    icon: Factory,
    title: "Product Development",
    description: "End-to-end guidance for manufacturers, from initial concept validation to prototyping and mass production readiness.",
  },
  {
    icon: TrendingUp,
    title: "Product Upgrades",
    description: "Revitalize existing product lines with modern features, improved materials, and cost-effective manufacturing optimizations.",
  },
  {
    icon: Globe2,
    title: "Global Market Reach",
    description: "Strategies to expand your manufacturing footprint and product distribution across international borders.",
  },
  {
    icon: Cpu,
    title: "Tech Integration",
    description: "Seamlessly incorporate IoT and smart technologies into traditional manufacturing products to increase value.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Streamline development lifecycles to reduce time-to-market without compromising on quality or compliance.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Core Expertise</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Specialized consultation tailored for ambitious manufacturers looking to lead through innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
