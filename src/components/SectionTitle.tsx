import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-accent" />
  </motion.div>
);

export default SectionTitle;
