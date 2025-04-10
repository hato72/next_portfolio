"use client"

import { useEffect, useState } from 'react'
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
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogHeader } from "@/components/ui/dialog"

const projects = [
  {
    title: "CookMeet",
    description: "簡単な質問に答えていくと、AIが答えに合ったレシピをおすすめしてくれるアプリ",
    technologies: ["TypeScript", "Next.js", "Go","Docker","Supabase","PostgreSQL"],
    link: "https://github.com/hato72/CookMeet",
    type: "チーム開発",
    video:[
      "https://drive.google.com/file/d/1L8JsU_FcsA0JaRtv5tkti12rG_ly9EEe/preview",//AI推論以外
      "https://drive.google.com/file/d/1SjmfFs9iQ_2A-BEr94Wnj4JVdCtln6xa/preview"//AI推論
    ],
    app_url: "https://cook-meet.vercel.app",
    document:""
  },
  {
    title: "Vtuberdule",
    description: "Vtuberの配信状況や配信予定を一覧で見れるアプリ",
    technologies: ["TypeScript", "Next.js"],
    link: "https://github.com/hato72/Vtuberdule",
    type: "個人開発",
    video:"https://drive.google.com/file/d/1KLCrtyJ3dqMi3pXfyomGmsaRGoA8dUJO/preview",
    app_url: "https://vtuberdule-pink.vercel.app",
    document: ""
  },
  {
    title: "もぐらたたきゲーム",
    description: "姿勢推定ライブラリであるMediapipeとPythonのゲームライブラリであるPygameを使用して作成したもぐらたたきゲーム",
    technologies: ["Python","MediaPipe","Pygame"],
    link: "https://github.com/hato72/Mediapipe-Game",
    type: "個人開発",
    video:"https://drive.google.com/file/d/18pTfchcrfAdixSi72pzEjDutpbIWeYhg/preview",
    app_url: "",
    document: ""
  },
  {
    title: "常磐線の電車案内システムの開発",
    description: "出発時間や到着時間、駅名を入力すると常磐線内で最も効率的な経路が提示されるGUIアプリ",
    technologies: ["Java"],
    link: "https://github.com/hato72/IS_project",
    type: "チーム開発",
    video:"",
    app_url: "",
    document: "https://drive.google.com/drive/folders/1YeVvB-6sDhFREbYYxg-0CYhF_Gt_E0zL?usp=drive_link"
  },
  {
    title: "Difyを用いて作成した検索アプリ",
    description: "DifyのAPIを使用して、ユーザーが入力したキーワードに関連する情報を検索するアプリ",
    technologies: ["TypeScript","Next.js", "Dify","Python","GCP(Cloud run)","Docker"],
    link: "https://github.com/hato72/dify_search",
    type: "個人開発",
    video:"https://drive.google.com/file/d/1FhKKspxUaf-lco0a6IYF8SgpLXcYosOM/preview",
    app_url: "https://dify-search.vercel.app",
    document: ""
  },
  {
    title: "へらでんくん",
    description: "家庭の電力消費量や電気代をリアルタイムに監視するWebアプリ",
    technologies: ["TypeScript","React","Dify","Python","Flask"],
    link: "https://github.com/hato72/heradenkun",
    type: "チーム開発",
    video:"https://drive.google.com/file/d/1soLL6KKTv8nc0W3l6fdCyCmh0JkbqBHo/preview",
    app_url: "",
    document: ""
  },
  {
    title: "cookjump",
    description: "自炊初心者を対象に、料理のチュートリアル形式で3日分のレシピや必要な食材、調理道具などを提示するWebアプリ",
    technologies: ["TypeScript","Next.js"],
    link: "https://github.com/hato72/cookjump",
    type: "チーム開発",
    video:"https://drive.google.com/file/d/1L4nHrayoPp5JeOiPg7KZ-R7rvHR_2TkJ/preview",
    app_url: "",
    document: ""
  },
  {
    title: "動画から姿勢推定を行うアプリ",
    description: "動画から姿勢推定を行い、姿勢の角度や脚の角度を可視化するアプリ",
    technologies: ["TypeScript","Next.js","Python","MediaPipe"],
    link: "https://github.com/hato72/pose_Analysis_video",
    type: "個人開発",
    video:"https://drive.google.com/file/d/1v8bIrPetpdQz5Qy7pTu9VzusCiccDQvv/view?usp=drive_link",
    app_url: "",
    document: ""
  },
  {
    title: "2Dタイルベースゲーム",
    description: "彦星をキーボード操作し、2Dタイル上の障害物を避けて織姫がいるゴールを目指すゲーム",
    technologies: ["Java"],
    link: "https://github.com/hato72/javafx2",
    type: "個人開発",
    video:"https://drive.google.com/file/d/1wjMYWfZUTCqbHwFhcltI8PsbC8LUtzqY/preview",
    app_url: "",
    document: ""
  },
  {
    title: "強化学習モデルの実装",
    description: "蛇ブロックが餌ブロックにたどり着くまでの最適な経路を学習していく強化学習モデル",
    technologies: ["Python","Pygame"],
    link: "https://github.com/hato72/python_ai",
    type: "個人開発",
    video:[
      "https://drive.google.com/file/d/1KUhO2JENSPaeDNMcB72xQ8qwceGXkUzi/preview",//開始直後
      "https://drive.google.com/file/d/1vbHpFrw3FoEzSJcLdR2i7iKrKETi4vBs/preview"//一定時間経過後
    ],
    app_url: "",
    document: ""
  },
  {
    title: "スプラトゥーン3の武器ランダムDiscordbot",
    description: "スプラトゥーン3で大人数で武器をランダムにして遊ぶ際などに、それぞれにランダムな武器を割り当てることができるDiscordbot",
    technologies: ["Python"],
    link: "https://github.com/hato72/Discordbot",
    type: "個人開発",
    video:"",
    app_url: "",
    document: ""
  },
  {
    title: "Yatter",
    description: "Twitterに似たAndroidアプリ",
    technologies: ["Kotlin"],
    link: "https://github.com/hato72/Yatter2024-Internship",
    type: "個人開発",
    video:"https://drive.google.com/file/d/1ah2nDrvkwYEBAwMfBFA0zlVgMo8YutYC/preview",
    app_url: "",
    document: ""
  },
  {
    title: "2Dゲーム風ポートフォリオ",
    description: "2Dゲーム風に自己紹介を行うポートフォリオサイト",
    technologies: ["JavaScript"],
    link: "https://github.com/hato72/portfolio_game",
    type: "個人開発",
    video:"",
    app_url: "https://portfolio-game-two.vercel.app",
    document: ""
  },
  {
    title: "陸上短距離走選手のための姿勢推定技術を用いたコーチングシステムの開発",
    description: "研究において行ったシステムの開発(詳細は研究欄)",
    technologies: ["Python"],
    link: "https://github.com/hato72/simple-HRNet",
    type: "研究活動",
    video:"",
    app_url: "",
    document: "https://drive.google.com/file/d/1Jmi1VMNIgFkRcKe2j3ulD93MiaokAee6/view?usp=drive_link"
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const [open, setOpen] = useState(-1);
  const [openDialogs, setOpenDialogs] = useState<boolean[]>([]);

  const handlePrev = () => {
    setOpen((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setOpen((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setOpenDialogs(Array(projects.length).fill(false));
  }, []);

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
            <Dialog open={open === index} onOpenChange={(open) => setOpen(open ? index : -1)}>
            <DialogTrigger asChild>
            <Card 
              className="glow relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl break-words pr-2">{project.title}</CardTitle>
                    <Badge variant="outline" className="whitespace-nowrap ml-2 mt-1">{project.type}</Badge>
                  </div>
                </div>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-sm">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter>
                <>
                  <Button asChild className="w-full rounded-full group relative overflow-hidden">
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                      onClick={(e) => e.stopPropagation()} // クリックイベントの伝播を停止
                    >
                      GitHubを見る
                      <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </motion.a>
                  </Button>
                  {project.video && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden">
                    <motion.a 
                      onClick={() => setOpenDialogs(prev => {
                        const next = [...prev];
                        next[index] = !next[index];
                        return next;
                      })}
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                    >
                      デモ動画を見る
                      <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </motion.a>
                  </Button>
                  )}
                  {project.app_url && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden mt-2">
                      <motion.a 
                        href={project.app_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        アプリを見る
                        <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.a>
                    </Button>
                  )}
                  {project.document && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden mt-2">
                      <motion.a 
                        href={project.document} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        資料を見る
                        <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.a>
                    </Button>
                  )}
                </>
              </CardFooter> */}
              <CardFooter>
                <div className="flex flex-col gap-2 w-full">
                  <Button asChild className="w-full rounded-full group relative overflow-hidden px-32">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHubを見る
                      <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </motion.a>
                  </Button>
                  {project.video && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden px-32">
                      <motion.a
                        onClick={() =>
                          setOpenDialogs((prev) => {
                            const next = [...prev];
                            next[index] = !next[index];
                            return next;
                          })
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10"
                      >
                        デモ動画を見る
                        <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.a>
                    </Button>
                  )}
                  {project.app_url && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden px-32">
                      <motion.a
                        href={project.app_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        アプリを見る
                        <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.a>
                    </Button>
                  )}
                  {project.document && (
                    <Button asChild className="w-full rounded-full group relative overflow-hidden px-32">
                      <motion.a
                        href={project.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        資料を見る
                        <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.a>
                    </Button>
                  )}
                </div>
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[80vh]"> {/* モーダルのサイズを大きく */}
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>
                  {project.description}
                  <br></br>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    プロジェクトへのリンク
                  </a>
                  <br></br>
                  <div className="mt-4 flex flex-col items-center">
                    {Array.isArray(project.video) ? ( // video が配列かどうかを確認
                      project.video.map((videoUrl, videoIndex) => (
                        <div key={videoIndex} className="mt-4 w-full"> {/* ここに className を追加 */}
                          <iframe
                              key={videoIndex} // key prop を追加
                              width="100%"
                              height="100%"
                              src={videoUrl}
                              title={`Video ${videoIndex + 1}`}
                              frameBorder="0"
                              allowFullScreen
                              style={{aspectRatio: "16/9"}}
                          ></iframe>
                        </div>
                      ))
                    ) : (
                      project.video && ( // video が文字列の場合
                        <div className="w-full"> {/* w-full を追加 */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={project.video}
                            title="Video"
                            frameBorder="0"
                            allowFullScreen
                            style={{aspectRatio: "16/9"}}
                        ></iframe>
                        </div>
                      )
                    )}
                  </div>
                </DialogDescription>
                <DialogClose asChild>
                  <Button type="button">閉じる</Button>
                </DialogClose>
            </DialogContent>
          </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
