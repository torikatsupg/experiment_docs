# 1.はじめに  
a  
　一般にエンタープライズ分野におけるソフトウェア開発では、ソースコードの品質[^1]を高めることが推奨されることが多い。そしてソースコードの品質を計測する手法としてソフトウェアメトリクスが用いることができる。ソフトウェアメトリクスでソースコードの品質を計測する際はプロダクトメトリクスが用いられることが多い。プロダクトメトリクスには様々な手法があり、どのプロダクトメトリクスもソースコードの構造を解析することによりその品質を測定している。阿萬(2011)[^2]によると、プロダクトメトリクスの代表例として、
- ファンクションポイント(function point)法:機能仕様書を対象としてシステムの機能規模を測定
- Henry-Kafura メトリクス:モジュール設計を対象としてそこでのファンイン数及びファンアウト数をもとに情報フローの複雑さを測定
- Chidamber-Kemerer(CK) メトリクス:オブジェクト指向設計を対象としてその複雑さや継承木の深さ,結合度(coupling),凝集度(cohesion)といった複数の属性を測定
- McCabeメトリクス(サイクロマティック数):フローチャート(またはソースコード)を対象としてそこでの制御フローの複雑さを測定
- Lines Of Code(LOC):コードの長さ(規模)を測定

が挙げられる。  
　通常、ソースコードの保守作業は人間によって行われ、その人間が日常生活で使用するのは機械語のようにコンピュータが理解できるような言語ではなく自然言語である。しかし、ソースコード中の変数や関数等の識別子の命名はプロダクトメトリクスの測定の対象となっていない。そのためソースコードの構造を対象としたプロダクトメトリクスで高いスコアを出せたとしても、識別子名に規則性がない場合ではソースコードが表す意味を人間が理解することに時間がかかってしまうことが考えられる。つまり、識別子名の命名に関する規則性がある場合に比べて、規則性がない場合ではソースコードの品質が下がると考えることができる。それゆえソースコードの品質は、ソースコードの構造のみによって測定されるのではなく、識別子の命名も測定の対象に含まれるべきであると考えられる。さらに、ソースコードの保守作業が、日常生活で自然言語を使用する人間によって行われることを踏まえると、識別子に関する規則は、自然言語に基づくことが望ましいと考えられる。  
　そこで本論文では、自然言語に基づいた識別子の命名の規則と、その規則に基づいた識別子の命名に関する手法を提案する。まず、識別子名の命名に関する規則性がある場合とない場合の例を示し、識別子名の命名に関する規則の重要性について確認をする。その上で、識別子名が自然言語に基づく意義や、自然言語に基づく命名の定義について解説をする。次に自然言語に基づく命名の規則とその識別しの命名に関する手法の提案を行う。

# 2.命名に関する規則の重要性の確認
## 品質の定義
本論文における品質はISO/IEC 9126に定められている品質の定義とする。ISO/IEC 9126で定められている品質は以下の要素から成り立つ。

<!-- TODO:1 孫引きの修正 -->
- 機能性(Functionality)
目的から求められる必要な機能の実装の度合い
副特性として合目的性，正確性，相互運用性，標準適合性，セキュリティが含まれる。

- 信頼性(Reliability)
機能が正常動作し続ける度合い，障害の起こりにくさの度合い
副特性として成熟性，障害許容性，回復性が含まれる。

- 使用性（Usability）
分かりやすさ、使いやすさの度合い
副特性として理解性，習得性，運用性が含まれる。

- 効率性(Efficiency)
目的達成のために使用する時間や資源の度合い
副特性として時間効率性，資源効率性が含まれる。

- 保守性(Maintainability)
保守(改訂)作業に必要な労力の度合い
副特性として解析性，変更性，安定性，試験性が含まれる。

- 移植性（Portability）
移植のしやすさ，別の環境へ移した際そのまま動作する度合い
副特性として環境適用性，設置性，規格適合性，置換性が含まれる。
<!-- TODO:1 ここまで -->

## 2.1 識別子名の重要性
 コードの品質を計測するにはソースコードの構造だけではなく、ソースコード中の識別子の命名に関する規則も重要である。これは自然言語の使い手である人間がソースコードの保守作業を行うことから、ソースコードが表現するものが人間にとって理解しやすい状態になっていることが望ましいと考えられるためである。このことは実際のエンタープライズ分野におけるソフトウェア開発において、命名に関するコーディング規約が導入されてい事実から、命名に関する規則の重要さを読み取ることができる。以下はGoogle社が公開している[^4]クラス名の命名に関するコーディング規約である。

    Class names are written in UpperCamelCase.

    Class names are typically nouns or noun phrases. For example, Character or ImmutableList. Interface names may also be nouns or noun phrases (for example, List), but may sometimes be adjectives or adjective phrases instead (for example, Readable).

    There are no specific rules or even well-established conventions for naming annotation types.

    Test classes are named starting with the name of the class they are testing, and ending with Test. For example, HashTest or HashIntegrationTest.

ここで命名に関する規則の重要性について確認をするために、命名に関する規則が存在するソースコードと無秩序に命名がなされたソースコードの比較をする。以下にprogramA, programBの2種類のプログラムを示す。programA, programBはどちらもC言語で記述されており、標準入力によって得られた値を探索する線形探索アルゴリズムである。<!-- TODO: なにが適切な命名かを明らかにする 何らかのコーディング規約にのっとってコーディングするのが良さそう -->programAは適切であると考えられる名前を識別子とし、programBはランダムな大文字小文字のアルファベット5文字により構成される文字列を識別子とした。

```c:programA.c
#include <stdio.h>

#define ARRAY_SIZE (8) /* size of array */

int main(void)
{
    int array[ARRAY_SIZE] = {9, 7, 18, 20, 8, 39, 77, 35};
    int key;
    int i;

    puts("find value?");
    scanf("%d", &key);

    for (i = 0; i < ARRAY_SIZE; ++i) {
        if (array[i] == key) {
            puts("Found!\n");
            return 0;
        }
    }

    puts("Not Found.\n");
    return 0;
}
```

```c:programB.c
#include <stdio.h>

#define aFJGBDLC (8) /* size of array */

int main(void)
{
    int JXFHAGEu[aFJGBDLC] = {9, 7, 18, 20, 8, 39, 77, 35};
    int LeaTTknE;
    int KVDcWMxA;

    puts("find value?");
    scanf("%d", &b);

    for (KVDcWMxA = 0; KVDcWMxA < aFJGBDLC; ++i) {
        if (JXFHAGEu[KVDcWMxA] == LeaTTknE) {
            puts("Found!\n");
            return 0;
        }
    }

    puts("Not Found.\n");
    return 0;
}
```

また以下に示すのはprogramA, programBを複数のメトリクスで測定[^3]した結果である。

| |programA|programB|
| -- | -- | -- |
| サイクロマティック数 | 2 | 2 |
| 

---
# 注釈
[^1] ここではISO/IEC 9126に定められている「品質」を指す。  
[^2] 阿萬 裕久,野中 誠,水野 修,2011「ソフトウェアメトリクスとデータ分析の基礎」
<https://www.jstage.jst.go.jp/article/jssst/28/3/28_3_3_12/_article/-char/ja/>  
[^3] サイクロマティック数の計測は  
[^4] Google 「Google Java Style Guide」<https://google.github.io/styleguide/javaguide.html>(取得:2020, 10, 7, 1:06)