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
    period: "2020年4月 - 現在",
    institution: "○○大学 工学部 情報工学科",
    description: "コンピュータサイエンスの基礎から応用まで幅広く学習。データ構造とアルゴリズム、ソフトウェア工学、人工知能などを専攻。"
  },
  {
    period: "2022年9月 - 2023年2月",
    institution: "海外留学 - アメリカ ○○大学",
    description: "交換留学プログラムに参加。最新のWeb技術とグローバルな開発環境について学ぶ。"
  },
  {
    period: "2019年4月 - 2020年3月",
    institution: "○○高等学校",
    description: "理数系コースで学び、プログラミングクラブに所属。校内のプログラミングコンテストで優勝。"
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