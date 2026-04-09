import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  delay?: number;
}

const ImageCard = ({ src, alt, title, description, delay = 0 }: ImageCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="image-card group"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
    {(title || description) && (
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title && <h3 className="font-display font-bold text-lg text-primary-foreground">{title}</h3>}
        {description && <p className="text-primary-foreground/70 text-sm mt-1">{description}</p>}
      </div>
    )}
  </motion.div>
);

export default ImageCard;
