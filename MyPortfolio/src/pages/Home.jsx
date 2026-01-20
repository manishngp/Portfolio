// import { motion } from 'framer-motion';
// import { ArrowRight, Github, Linkedin } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="flex flex-col justify-center min-h-[80vh]">
      
//       {/* Animated Greeting */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-accent text-lg font-mono mb-4">Hi, my name is</h2>
//         <h1 className="text-6xl md:text-7xl font-bold mb-4">Your Name.</h1>
//         <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
//           I build things for the web.
//         </h1>
        
//         <p className="max-w-xl text-secondary text-lg mb-10">
//           I'm a Frontend Developer specializing in building exceptional digital experiences.
//           Currently, I'm focused on building accessible, human-centered products using React.
//         </p>
//       </motion.div>

//       {/* Buttons */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="flex gap-4"
//       >
//         <Link 
//           to="/projects" 
//           className="px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all flex items-center gap-2"
//         >
//           Check out my work <ArrowRight size={20} />
//         </Link>
        
//         <div className="flex items-center gap-6 ml-6">
//           <a href="#" className="text-secondary hover:text-white transition-colors"><Github size={24} /></a>
//           <a href="#" className="text-secondary hover:text-white transition-colors"><Linkedin size={24} /></a>
//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default Home;