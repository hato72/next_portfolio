"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const basicInfo = {
  education: [
    {
      period: "2021年4月 - 現在",
      institution: "東京理科大学創域理工学部情報計算科学科",
      description: "情報数理やコンピュータサイエンスの基礎から応用までを幅広く学習した。プログラミングについても大学から学び始め、現在は10言語程度使用することができる。"
    },
    {
      period: "2018年4月 - 2021年3月",
      institution: "私立流通経済大学付属柏高等学校",
      description: "高校では陸上部短距離部門の活動と大学受験勉強に特に力を入れていた。"
    }
  ],
  research: "姿勢推定AIを用いて陸上短距離走選手の姿勢課題改善支援を行う研究に取り組んでいる。短距離走では、スタート直後の姿勢が加速局面の走行パフォーマンスに大きな影響を及ぼす。特に、前傾姿勢を適切に維持することで推進力が生まれ速度が向上するが、初級者にはこの姿勢維持が困難であると自身の経験から実感した。そこで本研究では、AIの一種である姿勢推定技術を活用して選手の走行姿勢を分析し、事前に設定した理想的な姿勢角度との差分を選手にフィードバックするシステムの開発を進めている。具体的には、まずスタートから10mまでの走行映像から着地の瞬間ごとに姿勢データを抽出したのち、得られたデータの解析とフィードバックを行う実装の実現を目指している。しかし、一般的に理想とされる姿勢角度がどの程度有意な影響を及ぼすかは解明されている訳ではないため、今後は様々な選手の走行データを分析し、真に理想的な姿勢を追求していきたい。",

  selfPR: "私には粘り強く努力を継続し、最後までやり抜く力がある。高校の陸上部の活動においてこの強みが生まれた。私は入部当初は100ｍ走で13秒と平凡だったが、高い目標を達成したいと考え「100ｍ11秒台」を目標とした。私は週5日の練習に加えて毎日自主トレーニングに取り組んだ。この習慣の継続は大変で、辞めたいと感じることもあったが、諦めたくないという気持ちを原動力に粘り強く継続した。しかし、12秒3を記録してから記録の更新が頭打ちになってしまった。課題はスタートダッシュ直後に上体を起こしてしまいスピードを出せていないことであった。この課題に対し私はメンバーに自身の姿勢の動画撮影を依頼し、客観的視点から自身の課題を理解するよう努めた。また、メンバーや顧問からアドバイスをもとに改善に取り組んだ。結果として私は課題であったスタートの姿勢を改善し、高校2年生の冬大会で11秒9というタイムを記録することができた。",

  internships: [
    {
      company: "ソフトバンク株式会社",
      period: "4週間",
      technologies: ["Python", "React", "Docker","Wireshark","Linux"],
      description: "インターンシップでは通信解析業務効率化を目指すプロトコルアナライザの開発に取り組んだ。この開発に取り組んだ背景として以下の点が挙げられる。まず、通信の研究で通信の流れを把握することは極めて重要であるが、特に5Gモバイルネットワークにおけるパケット情報は非常に複雑で、従来のツールであるWiresharkを用いて通信の流れを把握するのは困難であった。また、モバイルネットワークを可視化するようなシーケンス図を作成したいと考えたとしても、現状ではパケット情報を手入力して作成する必要があった。そこで私はこの課題を解決するために、パケット情報から自動的にシーケンス図を生成することができるプロトコルアナライザの実装に取り組んだ。"
    },
    {
        company: "フォルシア株式会社",
        period: "1週間",
        technologies: ["Python"],
        description: "画像認識モデルを用いて企業の案件の課題解決に取り組むインターンシップに参加した。具体的にはある食品企業から受けた案件の課題解決に向けて、画像認識技術を用いて写真に写る箱の中に入っているボトルの本数計測とボトルの種類ごとの本数計測を行うというタスクに取り組んだ。"
    },
    {
        company: "株式会社メルカリ",
        period: "3日間",
        technologies: ["Next.js", "Dify", "Prisma(PostgreSQL)"],
        description: "メルカリ主催の生成AI/LLMハッカソンに参加し、人との繋がりを欲するシニア層を対象に、メルカリアプリ上にユーザーコミュニティを形成する機能の提案を行った。当初のチームの方向性はシニア層のメリットとUI/UXの改善のみであった。私はこの方向性に疑問を持ち、ビジネス利益の追求を並行して行うことをチームに働きかけた。この働きかけにより、ビジネス利益に繋がる機能として、LLMを用いて出品に関連する話題を検知し出品を促す機能を提案できた。上記の経験や発揮したビジネス想像力を貴社で活かすことができると考える。また、貴社での経験が、AI技術のサービス活用を技術面からリードできるエンジニアとなるという夢の実現に繋がると期待している。夢の実現に向けて、顧客のニーズに応えつつビジネス利益に繋げるための企画を想像する力と、企画を技術や実サービスに落とし込む力を身に付けたい。"
    },
    {
        company: "dely株式会社",
        period: "3日間",
        technologies: ["TypeScript", "Next.js"],
        description: "3日間のインターンシップに参加し、自炊初心者を対象に料理のチュートリアル形式で3日分のレシピや必要な食材、調理道具などを提示するWebアプリの企画・開発に取り組んだ。チームは3人構成で、私は食材や調理道具の有無を管理するチェックリスト画面の実装と企業の実プロダクトに新規ユーザーを誘致する最後の画面の実装、UIデザインの設計を担当した。また、裏方の役割が得意であったため、企画や開発の際にチームで出た意見をまとめて作業ログに記したり、メンターから指摘を受けた課題点を基にタスクを作成するなどの役割に率先して取り組んだ。"
    },
    {
        company: "株式会社ぐるなび",
        period: "2週間",
        technologies: ["TypeScript", "Node.js", "AWS"],
        description: "企業のサービスの検索管理画面に料理id、料理名での検索を可能にする機能の実装を行うWeb開発インターンシップに参加した。チームは4人で、私を含む2名がバックエンド開発を担当し、もう2名がフロントエンド開発を担当した。その中でも私は、フロントエンドとバックエンド間で通信を行うAPIの開発と、AWSのAPI Gatewayを用いたモック作成などを担当した。"
    },
    {
        company: "株式会社コニカミノルタ",
        period: "1週間",
        technologies: ["Python(Pytorch)"],
        description: "企業が行っていた製品製造の過程において、初期段階で不良品を適切にはじくことができずに無駄な工程が増えてしまうという問題についてデータサイエンスの観点から解決を図るという内容のデータサイエンスインターンシップに参加した。まず、製造過程のうちどの部分を改善するべきかについて要件定義を行ったのち、与えられたデータを用いてランダムフォレスト等の分析モデルを実装し、課題の特定と改善に取り組んだ。そして、最終日に社員の方々に対して、得られた結果と用いた手法のプレゼンテーションを行った。"
    }
  ]
}

export default function BasicInfo() {
  return (
    <section id="basic-info" className="py-24">
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        基本情報
      </motion.h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>学歴</CardTitle>
          </CardHeader>
          <CardContent>
            {basicInfo.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>研究内容</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{basicInfo.research}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>自己PR</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{basicInfo.selfPR}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>インターンシップ経験</CardTitle>
          </CardHeader>
          <CardContent>
            {basicInfo.internships.map((internship, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{internship.company}</h3>
                <p className="text-sm text-muted-foreground">期間：{internship.period}</p>
                <p>使用技術：{internship.technologies.join(", ")}</p>
                <p>{internship.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
