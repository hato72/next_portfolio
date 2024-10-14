"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          新卒エンジニアを目指す<br />大学生のポートフォリオ
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Webアプリ開発と大学での学びを通じて、技術力を磨いています。
          未来のテクノロジーを創造する一員となるべく、日々精進しています。
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild className="rounded-full group relative overflow-hidden">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              プロジェクトを見る
              <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.a>
          </Button>
          <Button variant="outline" asChild className="rounded-full group relative overflow-hidden">
            <motion.a 
              href="#skills"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              スキルを見る
              <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="absolute -z-10 inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      </motion.div>
    </section>
  )
}