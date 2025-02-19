//モーダルの表示・非表示.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./contactModal.module.css"; // モーダルのスタイル

export default function ContactModal() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // URL のクエリパラメータを取得
    const isOpen = searchParams.get("modal") === "contact"; // `?modal=contact` のとき開く

    // モーダルを閉じる
    const closeModal = () => {
        router.push("/", { scroll: false }); // `?modal=contact` を削除
    };

    if (!isOpen) return null; // `?modal=contact` じゃないなら何も表示しない

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>お問い合わせ</h2>
                <p>ここにお問い合わせフォームを入れる</p>
                <button onClick={closeModal}>閉じる</button>
            </div>
        </div>
    );
}
 
