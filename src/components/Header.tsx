import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import sofaSvg from '../../public/vite.svg';
import { useEffect } from 'react';

function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous: any = scrollY.getPrevious();
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className="z-0 flex-1 overflow-y-scroll">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [80, 50]
            ),
            backgroundColor: useMotionTemplate`rgb(255 255 255 / ${useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0.1]
            )})`,
          }}
          className="fixed inset-x-0 flex h-20 shadow backdrop-blur-md"
        >
          <div className="mx-auto flex w-full max-w-3xl items-center justify-center px-8">
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressDelayed,
                  [0, 1],
                  [1, 0.9]
                ),
              }}
              className="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <div className="container mx-auto flex justify-center items-center">
                <a
                  href="#"
                  className="text-slate-700 font-bold text-xl flex items-center gap-2"
                >
                  <img
                    src={sofaSvg}
                    alt="logo sofa error"
                    className="h-10 w-10"
                  />
                  ISHAQ SOFAS
                </a>

                {/* <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md px-3 py-1 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="text-white hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div> */}
              </div>
            </motion.p>
            {/* <motion.nav
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressDelayed,
                  [0, 1],
                  [1, 0]
                ),
              }}
              className="flex space-x-4 text-sm font-medium text-slate-400"
            >
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </motion.nav> */}
          </div>
        </motion.header>
      </div>
    </div>
  );
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
