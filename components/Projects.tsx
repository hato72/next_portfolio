"use client"

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "CookMeet",
    description: "質問に答えていくと、その答えに合ったレシピをおすすめしてくれるアプリ",
    technologies: ["TypeScript", "Next.js", "Go","Docker","PostgreSQL"],
    link: "https://github.com/hato72/CookMeet"
  },
  {
    title: "Vtuberdule",
    description: "Vtuberの配信状況や配信予定を一覧で見れるアプリ",
    technologies: ["TypeScript", "Next.js"],
    link: "https://github.com/hato72/Vtuberdule"
  },
  {
    title: "もぐらたたきゲーム",
    description: "姿勢推定ライブラリであるMediapipeとPythonのゲームライブラリであるPygameを使用して作成したもぐらたたきゲーム",
    technologies: ["Python"],
    link: "https://github.com/hato72/Mediapipe-Game"
  },
  {
    title: "Difyを用いて作成した検索アプリ",
    description: "DifyのAPIを使用して、ユーザーが入力したキーワードに関連する情報を検索するアプリ",
    technologies: ["Next.js", "Dify","Python","GCP","Docker","Github actions"],
    link: "https://github.com/hato72/dify_search"
  },
  {
    title: "動画から姿勢推定を行うアプリ",
    description: "動画から姿勢推定を行い、姿勢の角度や脚の角度を可視化するアプリ",
    technologies: ["Next.js","Python"],
    link: "https://github.com/hato72/pose_Analysis_video"
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        プロジェクト
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="h-full flex flex-col transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full rounded-full group relative overflow-hidden">
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    GitHub で見る
                    <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.a>
                </Button>
              </CardFooter>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: 'overlay' }}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}