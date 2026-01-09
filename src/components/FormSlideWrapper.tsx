import { motion, AnimatePresence } from "framer-motion";

interface FormSlideWrapperProps {
  submitted: boolean;
  form: React.ReactNode;
  success: React.ReactNode;
}

const slideVariants = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

export default function FormSlideWrapper({
  submitted,
  form,
  success,
}: FormSlideWrapperProps) {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {form}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
