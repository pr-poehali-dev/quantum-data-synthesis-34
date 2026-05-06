import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"
import { services, products } from "./sections"

function ServiceCard({ title, description, price, image, index, isActive }: { title: string; description: string; price: string; image: string; index: number; isActive: boolean }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00C9FF]/50 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-36 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-neutral-400 text-sm mb-3 leading-snug">{description}</p>
        <span className="text-[#00C9FF] font-bold text-sm">{price}</span>
      </div>
    </motion.div>
  )
}

function ProductCard({ title, description, price, image, index, isActive }: { title: string; description: string; price: string; image: string; index: number; isActive: boolean }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00C9FF]/50 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-36 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-neutral-400 text-sm mb-3 leading-snug">{description}</p>
        <span className="text-[#00C9FF] font-bold text-sm">{price}</span>
      </div>
    </motion.div>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, type }: SectionProps) {
  if (type === 'services') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} isActive={isActive} />
          ))}
        </div>
      </section>
    )
  }

  if (type === 'products') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <ProductCard key={p.title} {...p} index={i} isActive={isActive} />
          ))}
        </div>
      </section>
    )
  }

  if (type === 'map') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-neutral-400 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            📍 {content}
          </motion.p>
        )}
        <motion.div
          className="w-full rounded-xl overflow-hidden border border-white/10 mb-6"
          style={{ height: '320px' }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.872611%2C57.626559&z=16&pt=39.872611,57.626559,pm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта Ярославль"
          />
        </motion.div>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#00C9FF] bg-transparent border-[#00C9FF] hover:bg-[#00C9FF] hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#00C9FF] bg-transparent border-[#00C9FF] hover:bg-[#00C9FF] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
