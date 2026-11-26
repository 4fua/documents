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

      <h1>ハムサ難易度表</h1>
      <p>BMSの難易度表。身内で好きな曲をまとめた難易度表。ゴミ譜面はhmsubに隔離している。</p>
      <a href="https://4fua.github.io/github.io/table_miuchi.html">リンク</a>

      <h1>IIDX☆12バージョン全白支援ツール(?)</h1>
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

      <h1>村 [廃村] / カラフル・サウンズ・ポート obj:fua</h1>
      <p>集0 こういう譜面あったらおもろいやろなあ、みたいなノリで作った譜面。そんそん</p>
      <a href="https://mocha-repository.info/songs/165147">mochaIR</a>

      <h1>飛翔するG [fu] / HALLPBE.S obj:fua</h1>
      <p>✡18 集0 衛11 曲が好きだったので制作。Solomon難易度表に収録され目玉が飛び出た</p>
      <a href="https://mocha-repository.info/songs/166218">mochaIR</a>

      <h1>A Summer That Never Was / Music:Connexio BGA:AiLANE obj: fua</h1>
      <p>INSANE, ANOTHER, HYPER譜面(同梱)を制作。BOF:22のチームメンバーとして制作させていただきました</p>
      <a href="https://mocha-repository.info/songs/171857">mochaIR</a>
      <a href="https://manbow.nothing.sh/event/event.cgi?action=More_def&num=250&event=152">BOF:22</a>

    `,
    tags: ["音ゲー", "制作物", "譜面", "まとめ"]
  }
];
