'use client';

import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';  // プロジェクトデータをインポート
import Image from "next/image";
import Link from 'next/link';
import pagestyles from './../styles/productpage.module.css';  // スタイルのインポート
import PageHeader from "../components/Header/pageHeader";
import Fotter from "@/app/components/footer/footer";
import { use } from 'react';  // React.use() をインポート

// paramsを非同期で解決
const ProjectDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [project, setProject] = useState<any>(null);  // プロジェクト情報を格納する状態
  const [loading, setLoading] = useState(true);  // ローディング状態を管理

  // paramsを解決
  const resolvedParams = use(params);  // React.use()でparamsを解決

  useEffect(() => {
    const { id } = resolvedParams;  // 解決したparamsからidを取得
    const foundProject = projects.find(project => project.id === parseInt(id));  // プロジェクトを探す
    setProject(foundProject);  // プロジェクトが見つかったら設定
    setLoading(false);  // ローディング完了
  }, [resolvedParams]);  // paramsが解決されたときに実行

  if (loading) {
    return <div>Loading...</div>;  // ローディング中
  }

  if (!project) {
    return <div>Project not found!</div>;  // プロジェクトが見つからない場合
  }

  return (
    <>
      <PageHeader />

      <div className={pagestyles.Ptitle}>
        <div className={pagestyles.titleText}>
          <div className={pagestyles.titleTexth1}>{project.title}</div>
          <div className={pagestyles.titleTexth4}>{project.description}</div>
        </div>
        <Image src={project.image} alt={project.title} className={pagestyles.Ptitleimg} />
      </div>

      <div className={pagestyles.tableWrapper}>
        <table className={pagestyles.table}>
          <tbody>
            <tr className={pagestyles.tableRow}>
              <th>GitHub</th>
              <td><Link href={project.github}>{project.github}</Link></td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>背景</th>
              <td>{project.description}</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>目的</th>
              <td>{project.goal}</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>担当箇所</th>
              <td>{project.role}</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>使用技術</th>
              <td>{project.technologies.join(", ")}</td>
            </tr>
            <tr className={pagestyles.tableRow}>
              <th>制作期間</th>
              <td>{project.duration}</td>
            </tr>
          </tbody>
        </table>    
      </div>

      <Fotter />
    </>
  );
};

export default ProjectDetail;
