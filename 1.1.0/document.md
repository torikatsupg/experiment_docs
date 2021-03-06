# 1.はじめに
高水準言語を用いてプログラミングを行う上で、ソースコードの可読性を向上させることは非常に重要である。
高水準言語が機械語に対応したアセンブリ言語に対して、プログラミングのために人間にとって書きやすく、理解しやすくした言語である<!-- TODO:辞書の引用を書く -->[^a]ことから可読性を向上させることは重要であること言える。
ソースコードの可読性に影響を与える要因は様々なものが考えられるが、その一つに関数や、変数等の識別子の命名が挙げられる。
通常、ソースコードの識別子は自然言語の単語を一個以上組み合わせて命名される。
渡邉(<!-- TODO:引用元を書く -->)によると「関数名が含む自然言語的な意味作用によって、該当の関数がプログラムにおいて如何なる意味内容を持つのかを把握する（より正しく言えば把握したつもりになる）ことができる」[^b]とある。
つまり人間は、自然言語の単語を用いて命名された識別子を頼りに、ソースコードを把握している。

ここまで、自然言語由来の単語をもちいた識別子の命名が、ソースコードの可読性を向上させるために重要であることを確認してきた。
では自然言語を用いてどのような命名を識別子に行えば、可読性を向上させることができるのだろうか。
「リーダブルコード」では識別子の命名について以下に挙げる6つのことが言われていた。<!-- リーダブルコードの引用を示す -->[^c]
1. 明確な単語を選ぶ
2. 汎用的な名前を避ける（あるいは、使う状況を選ぶ）
3. 抽象的な名前よりも具体的な名前を使う
4. 接尾語や接頭辞を使って情報を追加する
5. 名前の長さを決める
6. 名前のフォーマットで情報を伝える

ソフトウェア開発では識別子の命名を含むコーディングスタイルを定めた、コーディング規約が導入されることがある。
先に挙げた2・6に関してはコーディング規約で明確な基準が設けられることがある。

「2. 汎用的な名前を避ける（あるいは、使う状況を選ぶ）」の例として株式会社永和システムマネジメントの「Java コーディング標準」が挙げられる。
以下はそのコーディング規約よりメソッドの命名に関する部分を抜粋したものである。

    (13) メソッド名
      最初小文字で，あとは区切りを大文字
        firstWordLowerCaseButInternalWordsCapitalized()

    (14) ファクトリメソッド(オブジェクトを new するもの)
      X newX()
      X createX()

    (15) コンバータメソッド(オブジェクトを別のオブジェクトに変換するもの)
      X toX()

    (16) 属性の取得メソッド
      X x()
      X getX() // JavaBeans でプロパティとして扱える(推奨)
      boolean isEnabled() // JavaBeans でプロパティとして扱える(推奨) 

    (17) 属性の設定メソッド
      void setX(X value) // JavaBeans でプロパティとして扱える(推奨)

    (18) boolean 変数を返すメソッド
      is + 形容詞，can + 動詞，has + 過去分詞，三単元動詞，三単元動詞 + 名詞．
      boolean isEmpty() // JavaBeans でプロパティとして扱える(推奨)
      boolean empty() // だめ！’空にする’という動詞的な意味に取れるため良
      くない．
      boolean canGet()
      boolean hasChanged()
      boolean contains(Object) 
      boolean containsKey(Key)
      理由: if, while 文等の条件が読みやすくなる．また true がどちらの意味か分かりやすい．

このメソッドの命名に関する規約には```get```と```create```という単語が登場するが、どちらも汎用的な単語である。
このコーディング規約では汎用的な単語とされている```get```や```create```などの単語を特定の役割を持つメソッドのみに使用するよう定めて




本研究では、OSSのソースコードを解析することで、識別子の単語の組み合わせや識別子の種類等の傾向を明らかにする。そして、分析結果を元に識別子の命名の手法を提案する。

# 2.現状分析
## 2.1 ソースコードを読むこと
## 2.2 コーディング規約における命名規則
## 2.3 命名規則に必要なこと

---
[^1]Weblio英和辞書「英語「print」の意味・使い方・読み方 | Weblio英和辞書」<https://ejje.weblio.jp/content/print>(2020/10/17 21:40閲覧)
[^2]Google「Google Java Style Guide」<https://google.github.io/styleguide/javaguide.html>(2020/10/18 1:30閲覧)
[^3]株式会社 電通国際情報サービス「Java コーディング規約 2004」<http://objectclub.jp/community/codingstandard/JavaCodingStandard2004.pdf>(2020/10/18 1:31閲覧)
[^4] (株)永和システムマネジメント「Java コーディング標準」<http://objectclub.jp/community/codingstandard/CodingStd.pdf>(2020/10/18 1:32閲覧)