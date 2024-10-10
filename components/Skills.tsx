"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const skills = [
  { 
    name: "HTML/CSS", 
    level: 90,
    years: 3,
    experience: "レスポンシブデザイン、Flexbox、Grid、アニメーション",
    projects: "複数の企業Webサイト、個人ブログテーマ"
  },
  { 
    name: "JavaScript", 
    level: 85,
    years: 2.5,
    experience: "ES6+、非同期処理、DOM操作、フレームワーク（React, Vue.js）",
    projects: "SPAの開発、WebアプリケーションのフロントエンドUI実装"
  },
  { 
    name: "React", 
    level: 80,
    years: 2,
    experience: "Hooks、Context API、Redux、Next.js",
    projects: "ECサイト、ダッシュボードアプリケーション"
  },
  { 
    name: "Node.js", 
    level: 75,
    years: 1.5,
    experience: "Express.js、RESTful API設計、データベース連携",
    projects: "バックエンドAPIの開発、マイクロサービスの実装"
  },
  { 
    name: "Python", 
    level: 70,
    years: 2,
    experience: "データ分析、機械学習（scikit-learn, TensorFlow）、Web スクレイピング",
    projects: "感情分析ツール、株価予測モデル"
  },
  { 
    name: "Git", 
    level: 85,
    years: 3,
    experience: "バージョン管理、ブランチ戦略、GitHub/GitLab",
    projects: "全てのプロジェクトでバージョン管理に使用"
  },
  { 
    name: "SQL", 
    level: 65,
    years: 1.5,
    experience: "クエリ最適化、インデックス設計、トランザクション管理",
    projects: "データベース設計、複雑なクエリの作成"
  },
  { 
    name: "Docker", 
    level: 60,
    years: 1,
    experience: "コンテナ化、Docker Compose、基本的なオーケストレーション",
    projects: "開発環境の標準化、マイクロサービスのデプロイ"
  }
]

export default function Skills() {
  const [openSkill, setOpenSkill] = useState(null)

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <motion.h2 
        className="text-3xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        スキル
      </motion.h2>
      <motion.p
        className="text-center text-sm text-muted-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        各スキルをクリックして詳細を確認
      </motion.p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {skills.map((skill, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div 
                className="bg-card hover:bg-card/80 rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                {/* <Progress value={skill.level} className="h-2" /> */}
              </motion.div> 
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{skill.name}</DialogTitle>
                <DialogDescription>経験年数: {skill.years}年</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">経験:</h4>
                <p>{skill.experience}</p>
                <h4 className="font-semibold mt-4 mb-2">プロジェクト例:</h4>
                <p>{skill.projects}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}