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
import { cn } from "@/lib/utils"

const skills = [
  { 
    name: "Python", 
    level: 4,
    years: 3,
    experience: "API開発(Flask、Django)、データ分析、機械学習（Pytorch、TensorFlowなど）、強化学習(Q学習)、Webスクレイピング(BeautifulSoup)",
    projects: "姿勢推定を用いた研究活動、Difyを使用したアプリケーション、Mediapipe-Game、強化学習AI"
  },
  { 
    name: "Go", 
    level: 5,
    years: 1,
    experience: "バックエンドAPIの開発(Gin、Echo)、クリーンアーキテクチャ",
    projects: "CookMeet、インターンシップでの開発、Vtuberduleのバックエンド(進行中)"
  },
  { 
    name: "TypeScript", 
    level: 4,
    years: 0.8,
    experience: "Webアプリケーションのフロントエンド実装、フレームワーク（Next.js、React、Vue.js、Node.js）",
    projects: "Vtuberdule、CookMeet、Difyを使用したWebアプリ、へらでんくん、cookjump"
  },
  { 
    name: "Java", 
    level: 3,
    years: 1.2,
    experience: "ネットワークプログラミング",
    projects: "2Dゲームの開発、常磐線の電車案内システムの開発"
  },
  { 
    name: "C/C++,C#", 
    level: 2,
    years: 1,
    experience: "アルゴリズム、構文解析、ゲーム開発",
    projects: "2D物理シミュレーションプログラム、3Dゲームの開発、ポケットモンスターのバトルシーンの実装"
  },
  { 
    name: "Flutter(Dart)", 
    level: 2,
    years: 0.4,
    experience: "Webアプリケーションのフロントエンド実装",
    projects: ""
  },
  { 
    name: "Kotlin", 
    level: 2,
    years: 0.1,
    experience: "Androidアプリケーションの実装",
    projects: "Yatter(Twitterクローン)"
  },
  { 
    name: "SQL", 
    level: 4,
    years: 0.5,
    experience: "CRUD操作、データベース設計",
    projects: "CookMeet、インターンシップでの開発"
  },
  { 
    name: "Docker", 
    level: 5,
    years: 1,
    experience: "コンテナ化、Docker Compose",
    projects: "CookMeet、インターンシップでの開発"
  },
  { 
    name: "AWS", 
    level: 2,
    years: 0.1,
    experience: "Lambda、API Gateway、Secret Manager、SAM、AuroraDB",
    projects: "インターンシップでの開発"
  },
  { 
    name: "GCP", 
    level: 2,
    years: 0.2,
    experience: "Cloud Run、Cloud Build、Cloud Storage、Secret Manager",
    projects: "CookMeet"
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
        主な開発スキル
      </motion.h2>
      <motion.p
        className="text-center text-sm text-muted-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        各スキルをクリックして詳細を確認
      </motion.p>
      <motion.div
        className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4].map((level) => (
          <div key={level} className="flex items-center mb-2">
            <div className="flex space-x-1 mr-2 w-16 justify-end">
              {[1, 2, 3, 4].map((block) => (
                <div
                  key={block}
                  className={cn(
                    "w-3 h-3 border border-primary rounded",
                    block <= level ? "bg-primary" : "bg-transparent"
                  )}
                />
              ))}
            </div>
            <p className="text-left flex-1 text-base">
              {level}: {
                level === 1 ? "授業などで触ったことがある" :
                level === 2 ? "参考書やWeb等のリファレンスがあれば使用できる" :
                level === 3 ? "参考書やWeb等のリファレンスがなくても使用できる" :
                level === 4 ? "実務に近いレベルで使用できる" :
                "実際に実務で使用した経験がある"
              }
            </p>
          </div>
        ))}
      </motion.div>
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
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={cn(
                          "w-4 h-4 border border-primary rounded",
                          level <= skill.level ? "bg-primary" : "bg-transparent"
                        )}
                      />
                    ))}
                  </div>
                </div>
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