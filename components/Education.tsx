"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { motion } from "framer-motion"

const education = [
  {
    period: "2021年4月 - 現在",
    institution: "東京理科大学創域理工学部情報計算科学科",
    description: "情報数理やコンピュータサイエンスの基礎から応用までを幅広く学習。特にプログラミングに注力し、データ分析や機械学習、強化学習、ゲーム開発、Webアプリケーション開発などに取り組んでいる。"
  },
  {
    period: "2018年4月 - 2021年3月",
    institution: "私立流通経済大学付属柏高等学校",
    description: "高校では陸上部短距離部門の活動と大学受験勉強に特に力を入れていた。"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        学歴
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Table>
          <TableCaption>学歴と主な活動</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">期間</TableHead>
              <TableHead>学校・機関</TableHead>
              <TableHead className="hidden md:table-cell">詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {education.map((item, index) => (
              <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{item.period}</TableCell>
                <TableCell>{item.institution}</TableCell>
                <TableCell className="hidden md:table-cell">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </section>
  )
}