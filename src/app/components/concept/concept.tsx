import conceptstyles from './concept.module.css'

export default function Concept() {

    return (
        <div>
            <div className={conceptstyles.conceptback}>
                    <div className={conceptstyles.conceptText}>「好き」を形にしたい</div>
                    <div className={conceptstyles.conceptText}>手がけたアイデアが形になった宝物を、この場所に。</div>
                    <div className={conceptstyles.conceptText}>これからも新たな挑戦を。</div>
            </div>
        </div>
      )
    }

