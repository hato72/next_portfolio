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
  research: "研究テーマは「陸上短距離走選手のための姿勢推定技術を用いたコーチングシステムの開発」である。陸上短距離走ではスタートダッシュ直後の適度な前傾姿勢の維持が選手のパフォーマンスに大きな影響を与える。しかし、初級者にとって前傾姿勢の維持は困難である。そのため、選手の走行姿勢を分析し課題点とコーチングを提示することで選手のパフォーマンス向上を実現することを目的に本研究に取り組んだ。本研究で提案する手法では、まず姿勢推定技術を活用して動画から選手の姿勢角度を計測する。次に選手が着地した瞬間と離地した瞬間を特定し、これらのフレームを画像として切り出す。そして、推定した角度をプロ選手の角度と比較し、画像上に選手の課題点とコーチングを明示している。また、評価実験では、14本の走行動画を用いて着地および離地の瞬間の判定精度を検証した。その結果、フレームのずれは概ね3フレーム以内に収まっていることを示した。しかし、一部の状態で精度が低下する傾向が見られた。これは左右の足が交差することで深度情報が欠落し、推定精度が低下することが原因と考えられる。今後はこの課題を改善し、より安定した推定の実現を目指す。",

  selfPR: "私には粘り強く努力を継続し、最後までやり抜く力がある。高校の陸上部の活動においてこの強みが生まれた。私は入部当初は100ｍ走で13秒と平凡だったが、高い目標を達成したいと考え「100ｍ11秒台」を目標とした。しかし、負荷の高い練習により腰や脚をケガしてしまい、練習を中断せざるを得ないことも多々あった。また、同期や先輩が次々と辞めていく中で、自分が何のために取り組んでいるのか迷いを感じていた。それでも一度立てた目標を簡単に諦めたくないという強い意志を原動力に粘り強く取り組み続けた。また、12秒3を記録して以来記録の更新が頭打ちになってしまった。課題はスタートダッシュ直後に上体を起こしてしまいスピードを出せていないことであった。この課題に対し私はメンバーに自身の姿勢の動画撮影を依頼し、客観的視点から自身の課題を理解するよう努めた。結果として課題を改善し、11秒9というタイムを記録できた。",

  internships: [
    {
      company: "ソフトバンク株式会社",
      period: "4週間",
      technologies: ["Python", "React", "Docker","Wireshark","Linux"],
      occupation: "研究開発(Webアプリケーション開発)",
      description: "インターンシップでは通信解析業務効率化を目指すプロトコルアナライザの開発に取り組んだ。この開発に取り組んだ背景として以下の点が挙げられる。まず、通信の研究で通信の流れを把握することは極めて重要であるが、特に5Gモバイルネットワークにおけるパケット情報は非常に複雑で、従来のツールであるWiresharkを用いて通信の流れを把握するのは困難であった。また、モバイルネットワークを可視化するようなシーケンス図を作成したいと考えたとしても、現状ではパケット情報を手入力して作成する必要があった。そこで私はこの課題を解決するために、パケット情報から自動的にシーケンス図を生成することができるプロトコルアナライザの実装に取り組んだ。"
    },
    {
        company: "フォルシア株式会社",
        period: "1週間",
        technologies: ["Python"],
        occupation: "AI・画像認識エンジニア",
        description: "食品企業のペットボトルの検品業務効率化の実現に向けて、画像認識技術を用いて写真の箱の中に入っているペットボトルの本数計測とボトルの種類ごとの本数計測を行うというタスクに取り組んだ。"
    },
    // {
    //     company: "dely株式会社",
    //     period: "3日間",
    //     technologies: ["TypeScript", "Next.js"],
    //     description: "3日間のインターンシップに参加し、自炊初心者を対象に料理のチュートリアル形式で3日分のレシピや必要な食材、調理道具などを提示するWebアプリの企画・開発に取り組んだ。チームは3人構成で、私は食材や調理道具の有無を管理するチェックリスト画面の実装と企業の実プロダクトに新規ユーザーを誘致する最後の画面の実装、UIデザインの設計を担当した。また、裏方の役割が得意であったため、企画や開発の際にチームで出た意見をまとめて作業ログに記したり、メンターから指摘を受けた課題点を基にタスクを作成するなどの役割に率先して取り組んだ。"
    // },
    {
        company: "エムスリー株式会社",
        period: "1週間",
        technologies: ["Python"],
        occupation: "データサイエンティスト",
        description: "toCサービス「AskDoctors」におけるレコメンドロジックの実装を行うデータサイエンスインターンシップに参加した。具体的には、有料会員ユーザーのデータや2021年1月のPVログおよび健康記事のデータを分析し、指定されたユーザーの2022年1月のPVを予測するとともに、各ユーザーに対して健康記事をレコメンドするロジックを構築した。"
    },
    // {
    //     company: "株式会社ぐるなび",
    //     period: "2週間",
    //     technologies: ["TypeScript", "Node.js", "AWS"],
    //     occupation: "バックエンドエンジニア",
    //     description: "企業のサービスの検索管理画面に料理id、料理名での検索を可能にする機能の実装を行うWeb開発インターンシップに参加した。チームは4人で、私を含む2名がバックエンド開発を担当し、もう2名がフロントエンド開発を担当した。その中でも私は、フロントエンドとバックエンド間で通信を行うAPIの開発と、AWSのAPI Gatewayを用いたモック作成などを担当した。"
    // },
    {
        company: "株式会社エクサウィザーズ",
        period: "14日間",
        technologies: ["Go", "Gin", "Docker"],
        occupation: "バックエンドエンジニア",
        description: "自社AIプロダクトのバックエンドAPI開発を行った。プロダクトの具体的な仕様は、プロダクト上で写真やファイルとプロンプトを受け取ると、プロンプトの指示に応じて生成AIが写真やファイルを処理し、その結果を出力するようになっている。このうち、写真やファイルをS3に格納するAPIとプロンプトをエンキューするAPIの開発を担当した。"
    },
    {
      company: "株式会社マネーフォワード",
      period: "10日間",
      technologies: ["Go", "Docker"],
      occupation: "バックエンドエンジニア",
      description: "マネーフォワードアプリの機能を他社のサービスで使用できるようにするためのパートナーAPIのバックエンド開発を行うチームに入り、実務開発を行った。まず、コードの保守性と可読性を高めるために簡易的なリファクタリングに取り組んだ。また、既存のテストには不足があったため、テストケースの追加や修正に取り組んだ。最後に仕様変更に伴うAPIの修正にも取り組んだ。"
    },
    {
      company: "合同会社EXNOA",
      period: "12日間",
      technologies: ["Go","Echo","Docker","AWS","Datadog","ArgoCD",],
      occupation: "バックエンドエンジニア",
      description: "DMMGAMESの会員基盤に関する様々なバックエンドAPI開発を行うチームに配属となり、特定のユーザーIDからユーザー情報を取得するAPIの設計・実装、およびテストケースの作成、本番環境へのデプロイを行った。"
    }
  ],
  hackathons: [
    {
      name: "テクのこハッカソン",
      period: "1日間",
      technologies: ["TypeScript", "Next.js", "Dify", "Python", "Flask"],
      role: "エンジニア, 技術リーダー",
      description: "家庭の電力消費量や電気代をリアルタイムに監視するWebアプリケーション「へら電くん」を開発した。主な機能はDifyを活用したAIによる電力節約の提案機能、電気代目標を超過した際のアラート機能、各家電ごとの電力消費状況表示機能、電力使用が一定期間ゼロの場合のアラート機能である。これらの機能により、節約意識の向上や消し忘れ防止、家族の安否確認等を実現できる。開発の中で、私は技術リーダーとして以下の役割を担った。まず、チームのアイデアに対して技術的な実現可能性を評価し、具体的な提言を行った。また、Webアプリケーション開発経験のないチームメンバーのためにアプリの基本的な骨組みを開発して提供し、それを基に各メンバーに具体的な機能開発タスクを振り分けた。そして私もフロントエンド、バックエンド、AI機能の開発を並行して進め、全体を統括した。"
    },
    {
      name: "メルカリ主催生成AI/LLMハッカソン",
      period: "3日間",
      technologies: ["TypeScript","Next.js", "Dify", "Prisma(PostgreSQL)"],
      role: "エンジニア",
      description: "人との繋がりを欲するシニア層を対象に、メルカリアプリ上にユーザーコミュニティを形成する機能の提案を行った。当初のチームの方向性はシニア層のメリットとUI/UXの改善のみであった。私はこの方向性に疑問を持ち、ビジネス利益の追求を並行して行うことをチームに働きかけた。この働きかけにより、ビジネス利益に繋がる機能として、LLMを用いて出品に関連する話題を検知し出品を促す機能を提案できた。"
    },
    {
      name: "技育ハッカソン",
      period: "1週間",
      technologies: ["TypeScript","Next.js", "Go", "Echo","Docker","Prisma(PostgreSQL)"],
      role: "エンジニア",
      description: "サークルメンバー2名とともに1週間のハッカソンに出場した際、簡単な質問に答えることでAIによっておすすめのレシピが提案されるWebアプリ「CookMeet」を開発した。この取り組みの背景には、チームメンバーが1人暮らしで学校生活が忙しく作るレシピが単調化している状況や、膨大なレシピから1つを選択するのが困難であるという課題があった。そこで、これらの課題を解決するアプリを開発したいと考えた。しかし、最終日2日前にフロントエンド開発に遅れが発生した。その際、私は機能の開発優先度を設定できていなかったことやペルソナ分析が不足していることが原因であると考え、チームに呼び掛けて再度ターゲット層の整理と開発優先度の逆算を行い、分担して開発するように工夫した。結果として入賞には至らなかったものの、目的達成に必要な機能の実装は完了させることができた。"
    },
  ]
}

export default function BasicInfo() {
  return (
    <section id="basic-info" className="py-24">
      <motion.h2 
        className="text-3xl font-bold text-center mb-16"
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
                <p>職種：{internship.occupation}</p>
                <p>{internship.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ハッカソン経験</CardTitle>
          </CardHeader>
          <CardContent>
            {basicInfo.hackathons.map((hackathon, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{hackathon.name}</h3>
                <p className="text-sm text-muted-foreground">期間：{hackathon.period}</p>
                <p>使用技術：{hackathon.technologies.join(", ")}</p>
                <p>役割：{hackathon.role}</p>
                <p>{hackathon.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
