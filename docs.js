const DOCUMENTS = [
  /*
  {
    title: "サンプル文書",
    date: "2026-11-27",
    url: "https://drive.google.com/file/d/...",
    description: "簡単な説明文",
    accordion: true,
    tags: ["文書", "音ゲー"]
  },
  {
    title: "直接掲載のサンプル",
    date: "2026-11-27",
    description: "省略可",
    accordion: true,
    content: `
      <p>ここに文章を直接書けます。改行もそのまま書けます。</p>
      <img src="images/sample.png" alt="画像の説明">
      <!-- 動画・音声・PDF埋め込みなどのオブジェクトもそのまま記述可能 -->
      <!-- <iframe src="https://drive.google.com/file/d/ファイルID/preview" height="480"></iframe> -->
    `,
    tags: ["メモ", "音ゲー"]
  }
  */
  {
    title: "ページを作成しました",
    date: "2026-11-27",
    description: "",
    accordion: true,
    content: `
      <p>どれほど利用するか、どう利用するかは不明</p>
      <p>テストのためYouTubeのリンクを埋め込み</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0NQz5jDulSU?si=8VFao_t5W4Oue0Kn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `,
    tags: ["日記", "音ゲー"]
  },
  {
    title: "まとめ：制作したもの",
    date: "2026-11-27",
    description: "",
    accordion: true,
    content: `

      <p>最終更新:2026/11/27 譜面を除く</p>

      <h1>記事</h1>
        <h2>【IIDX】元太鼓民がSP皆伝になった軌跡 (2024/8/24)</h2>
        <p>皆伝になったので記録として書いた記事</p>
        <a href="https://note.com/mafua/n/n5f8eae71b2b5">リンク</a>

        <h2>【SDVX】新時代のインペリアル到達【19, 20備忘録編】(2025/6/1)</h2>
        <p>インペリアルになったので記録として書いた記事</p>
        <a href="https://note.com/mafua/n/naa99cd61da86">リンク</a>

        <h2>発狂九段合格メモ (2026/4/13)</h2>
        <p>発狂九段になったので記録として書いた記事</p>
        <a href="https://note.com/mafua/n/n21d660183642">リンク</a>

        <h2>【IIDX】皿譜面をやろう！～灼熱Beach Side Bunny(SP HYPER)攻略を通して皿と友達に～ (2025/2/11)</h2>
        <p>周りが弐寺を始めたので、(中伝くらい時点までの)皿譜面練習の持論を書いた記事</p>
        <p>全白になった今もあまり考え方は変わっていない</p>
        <a href="https://m4fua.hateblo.jp/entry/shakunetsu_hyper">リンク</a>

        <h2>【SDVX試行錯誤】ボルテ譜面弱者の『幸せになれる隠しコマンドがあるらしい』[XCD 19.1] 990 (2026/3/10)</h2>
        <p>ボルテ譜面耐性が低いままインペリアルになった人間が、隠しコマンド[XCD]でSを狙ったときの譜面研究と試行錯誤</p>
        <a href="https://m4fua.hateblo.jp/entry/2026/03/10/050653">リンク</a>

        <h2>【コンビニ飯調査】ローソンでコスパよく腹を満たせる商品は何だ！！！！！ (2024/12/17)</h2>
        <p>大学1年でアドカレとして書いた記事。後半黒歴史で鬱</p>
        <a href="https://tonevoadventcalendar.hatenablog.com/entry/2024/12/17/000000">リンク</a>

        <h2>【とんえぼ大学(理系)】60fpsで精度をとるのはムズいという話/ボルテS寸究極スコアの話(オムニバス) (2025/12/2)</h2>
        <p>大学2年でアドカレとして書いた記事。結構内容に自信がある</p>
        <a href="https://tonevoadventcalendar.hatenablog.com/entry/2025/12/02/060731">リンク</a>

        <h2>CastHour全ハード完走の感想/CastHour良曲紹介 (2025/12/14)</h2>
        <p>大学2年でアドカレとして書いた記事(2本目)。重すぎるっぽくてガチですまんの気持ち</p>
        <a href="https://tonevoadventcalendar.hatenablog.com/entry/2025/12/24/215400">リンク</a>

      <h1>ページ</h1>
      
        <h2>ハムサ難易度表</h2>
        <p>BMSの難易度表。身内で好きな曲をまとめた難易度表。癖譜面はhmsubに隔離している。</p>
        <a href="https://4fua.github.io/github.io/table_miuchi.html">リンク</a>

        <h2>IIDX☆12バージョン全白支援ツール(?)</h2>
        <p>バージョン時系列ごとに自分がいつまで全白だったのか知りたかったので制作。</p>
        <p>しかし楽曲の抜け漏れがあることが発覚したため、修正しようとして、してない。</p>
        <a href="https://4fua.github.io/iidx_versiontable/">リンク</a>

    `,
    tags: ["音ゲー", "制作物", "まとめ"]
  },
  {
    title: "まとめ：制作した譜面",
    date: "2026-11-27",
    description: "",
    accordion: true,
    content: `

      <p>最終更新:2026/11/27</p>

      <h1>BMS</h1>

        <h2>村 [廃村] / カラフル・サウンズ・ポート obj:fua</h2>
        <p>集0 こういう譜面あったらおもろいやろなあ、みたいなノリで作った譜面。そんそん</p>
        <a href="https://mocha-repository.info/songs/165147">mochaIR</a>

        <h2>飛翔するG [fu] / HALLPBE.S obj:fua</h2>
        <p>✡18 集0 衛11 曲が好きだったので制作。Solomon難易度表に収録され目玉が飛び出た</p>
        <a href="https://mocha-repository.info/songs/166218">mochaIR</a>

        <h2>A Summer That Never Was / Music:Connexio BGA:AiLANE obj: fua</h2>
        <p>INSANE, ANOTHER, HYPER譜面(同梱)を制作。BOF:22のチームメンバーとして制作させていただきました</p>
        <a href="https://mocha-repository.info/songs/171857">mochaIR</a>
        <a href="https://manbow.nothing.sh/event/event.cgi?action=More_def&num=250&event=152">BOF:22</a>

    `,
    tags: ["音ゲー", "制作物", "譜面", "まとめ"]
  }
];
