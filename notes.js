const NOTES = [
  {
    title: "プリミティブ型 一覧",
    category: "データ型",
    content: `【整数型】
byte   : 8bit  / -128 〜 127
short  : 16bit / -32,768 〜 32,767
int    : 32bit / 約 ±21億
long   : 64bit / 約 ±920京  ※リテラルに L を付ける

【浮動小数点型】
float  : 32bit / 約7桁精度  ※リテラルに f を付ける
double : 64bit / 約15桁精度（デフォルト）

【その他】
char    : 16bit / Unicode文字 'A' のように ' で囲む
boolean : true / false のみ

【デフォルト値（インスタンス変数）】
数値型 → 0 (0.0)  |  boolean → false  |  参照型 → null`
  },
  {
    title: "ラッパークラス & 型変換",
    category: "データ型",
    content: `【ラッパークラス対応表】
int    → Integer
double → Double
char   → Character
boolean→ Boolean
byte   → Byte
short  → Short
long   → Long
float  → Float

【オートボクシング】
Integer i = 42;       // int → Integer (自動)
int n = i;            // Integer → int  (自動アンボクシング)

【文字列 ↔ 数値変換】
int x = Integer.parseInt("42");    // String → int
String s = String.valueOf(42);     // int → String
String s2 = Integer.toString(42);  // 同上

【キャスト（縮小変換）】
double d = 3.14;
int i = (int) d;  // → 3 (小数点以下切り捨て)`
  },
  {
    title: "演算子 まとめ",
    category: "演算子",
    content: `【算術演算子】
+, -, *, /（整数同士は整数除算）, %（剰余）

【インクリメント・デクリメント】
i++  後置：使った後に +1
++i  前置：先に +1 してから使う

【比較演算子】
==, !=, >, <, >=, <=
※ オブジェクトの内容比較は .equals() を使う

【論理演算子（短絡評価）】
&&  AND：左がfalseなら右を評価しない
||  OR ：左がtrueなら右を評価しない
!   NOT

【三項演算子】
条件 ? 真の値 : 偽の値
例）int max = (a > b) ? a : b;

【複合代入演算子】
+=, -=, *=, /=, %=

【instanceof】
obj instanceof ClassName  →  boolean を返す`
  },
  {
    title: "制御フロー 構文チートシート",
    category: "制御フロー",
    content: `【if-else】
if (条件) { } else if (条件) { } else { }

【switch】
switch (変数) {
  case 値1: 処理; break;
  case 値2: 処理; break;
  default: 処理;
}
※ break を省略すると fall-through（次のcaseへ流れる）

【for】
for (初期化; 条件; 更新) { }
for (型 変数 : 配列/リスト) { }  // 拡張for

【while / do-while】
while (条件) { }          // 0回以上
do { } while (条件);     // 1回以上（必ず1回実行）

【break / continue】
break;         ループ・switch を抜ける
continue;      現在のイテレーションをスキップ
break label;   ラベル付きループを一気に抜ける`
  },
  {
    title: "配列 まとめ",
    category: "配列",
    content: `【宣言と初期化】
int[] a = new int[5];         // サイズ指定（0初期化）
int[] b = {1, 2, 3, 4, 5};   // 宣言と同時に初期化
int[] c = new int[]{1,2,3};   // new を使った初期化

【アクセス】
a[0], a[1], ... a[a.length-1]  // インデックスは 0 始まり
a.length  // 長さ（メソッドではない ← ()なし）

【多次元配列】
int[][] mat = new int[3][4];  // 3行4列
mat.length        // 行数（3）
mat[0].length     // 列数（4）

【初期値】
数値配列 → 0   boolean配列 → false   参照型配列 → null

【便利メソッド（java.util.Arrays）】
Arrays.sort(a);          // 昇順ソート
Arrays.toString(a);      // "[1, 2, 3]" という文字列に変換
Arrays.copyOf(a, len);   // 配列をコピー`
  },
  {
    title: "クラスとオブジェクト 基礎",
    category: "クラス",
    content: `【クラスの基本構造】
public class MyClass {
  // インスタンス変数
  private int value;

  // コンストラクタ（戻り値の型なし、クラス名と同名）
  public MyClass(int v) { this.value = v; }

  // メソッド
  public int getValue() { return value; }
}

【オブジェクト生成】
MyClass obj = new MyClass(10);

【this キーワード】
・インスタンス自身を参照
・変数名の衝突を解消: this.value = value;
・別コンストラクタ呼び出し: this(引数);

【static】
・クラスに属する（インスタンス不要でアクセス可）
・全インスタンスで共有される
・MyClass.staticMethod() でアクセス

【アクセス修飾子】
public    : どこからでも
protected : 同パッケージ + サブクラス
(default) : 同パッケージ内
private   : 同クラス内のみ`
  },
  {
    title: "継承 まとめ",
    category: "継承",
    content: `【基本構文】
class Dog extends Animal { }  // extendsで継承

【super キーワード】
super.method()    // 親クラスのメソッドを呼ぶ
super(引数)       // 親クラスのコンストラクタを呼ぶ（先頭行必須）

【オーバーライド】
・同じメソッド名・引数・戻り値でサブクラスで再定義
・@Override アノテーションを付けるとミスをコンパイル時に検出
・アクセス修飾子を狭くすることはできない

【final】
final class  → 継承できない（例: String）
final method → オーバーライドできない
final field  → 再代入できない（定数）

【Object クラス】
全クラスの親。equals(), hashCode(), toString() を持つ

【ポリモーフィズム（動的ディスパッチ）】
Animal a = new Dog();
a.sound();  // → Dog の sound() が呼ばれる
※ フィールドは参照型で解決（多態性の対象外）

【is-a 関係の確認】
obj instanceof Animal  // trueならキャスト安全`
  },
  {
    title: "インタフェース vs 抽象クラス",
    category: "継承",
    content: `【インタフェース】
interface Flyable {
  void fly();                   // public abstract（省略可）
  int MAX = 100;                // public static final（省略可）
  default void land() { }      // Java8〜 実装を持てる
}
class Bird implements Flyable { // implements で実装
  public void fly() { ... }    // 必ずオーバーライド
}
// 複数実装可能
class Duck implements Flyable, Swimmable { }

【抽象クラス】
abstract class Animal {
  abstract void sound();       // 実装なし（サブクラス必須）
  void breathe() { ... }       // 実装あり（共通処理）
}
// 1つだけ継承可能（extends）
// コンストラクタを持てる

【選び方の目安】
インタフェース → 関係のないクラスへの共通機能追加
抽象クラス    → 関連クラス間で実装を共有したい場合`
  },
  {
    title: "例外処理 まとめ",
    category: "例外処理",
    content: `【基本構文】
try {
  // 例外が発生するかもしれない処理
} catch (IOException e) {
  // IOExceptionをキャッチ
  e.getMessage();    // メッセージ取得
  e.printStackTrace(); // スタックトレース表示
} catch (Exception e) {  // 広い例外は後に書く
  // その他の例外
} finally {
  // 必ず実行（クリーンアップ処理）
}

【例外の種類】
Error            JVMの重大エラー（通常キャッチしない）
  └ OutOfMemoryError, StackOverflowError

Exception        検査例外（checked） → try-catchまたはthrowsが必要
  └ IOException, SQLException

RuntimeException 非検査例外（unchecked） → 任意でキャッチ
  └ NullPointerException
  └ ArrayIndexOutOfBoundsException
  └ ClassCastException
  └ NumberFormatException
  └ ArithmeticException（ゼロ除算等）

【throw と throws】
throw new IllegalArgumentException("エラー"); // スローする
void method() throws IOException { }         // 宣言する`
  },
  {
    title: "String クラス 重要メソッド",
    category: "Java API",
    content: `【Stringは不変（immutable）】
変更メソッドは新しいStringを返す（元は変わらない）

【長さ・文字取得】
s.length()          // 文字数
s.charAt(i)         // i番目の文字（char型）
s.indexOf("bc")     // 部分文字列の先頭位置（なければ-1）

【比較】
s.equals("Hello")          // 内容比較（大文字小文字区別）
s.equalsIgnoreCase("hello")// 大文字小文字を無視して比較
s.compareTo("abc")         // 辞書順比較（0なら等しい）

【変換・加工】
s.toUpperCase()     // 大文字に変換
s.toLowerCase()     // 小文字に変換
s.trim()            // 前後の空白を除去
s.replace("a","b")  // 文字列置換
s.split(",")        // 区切りでString配列に分割

【部分文字列】
s.substring(2)      // インデックス2〜末尾
s.substring(2, 5)   // インデックス2〜4（5は含まない）

【確認】
s.startsWith("He")  // "He"で始まるか
s.endsWith("lo")    // "lo"で終わるか
s.contains("ell")   // "ell"を含むか
s.isEmpty()         // 空文字列か
s.isBlank()         // 空白のみか（Java11〜）`
  },
  {
    title: "StringBuilder まとめ",
    category: "Java API",
    content: `【Stringとの違い】
String        → 不変（変更のたびに新オブジェクト）
StringBuilder → 可変（同じオブジェクトを変更・高速）

【主なメソッド】
StringBuilder sb = new StringBuilder();
sb.append("Hello");       // 末尾に追加
sb.append(" World");      // チェーン可能
sb.insert(5, ",");        // 指定位置に挿入
sb.delete(5, 6);          // 指定範囲を削除
sb.replace(0, 5, "Hi");   // 指定範囲を置換
sb.reverse();             // 逆順
sb.length();              // 現在の長さ
sb.toString();            // Stringに変換

【使い分け】
ループ内で文字列を繰り返し連結 → StringBuilder
普通の文字列操作             → String`
  },
  {
    title: "ArrayList まとめ",
    category: "Java API",
    content: `【宣言・生成】
import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();

【主な操作】
list.add("Apple");         // 末尾に追加
list.add(1, "Banana");     // インデックス1に挿入
list.get(0);               // インデックス0の要素取得
list.set(0, "Cherry");     // インデックス0の要素を変更
list.remove(0);            // インデックス0の要素を削除
list.remove("Apple");      // 値が"Apple"の要素を削除
list.size();               // 要素数
list.contains("Apple");    // 含まれるか（boolean）
list.isEmpty();            // 空か（boolean）
list.clear();              // 全削除

【ループ】
for (String s : list) { System.out.println(s); }

【配列との違い】
配列      : サイズ固定、プリミティブ型OK
ArrayList : サイズ可変、プリミティブ型は不可（ラッパークラス使用）`
  },
  {
    title: "Math クラス 主要メソッド",
    category: "Java API",
    content: `【全てstaticメソッド（Math.xxx()で呼ぶ）】

Math.abs(-5)         // 絶対値 → 5
Math.max(3, 7)       // 大きい方 → 7
Math.min(3, 7)       // 小さい方 → 3
Math.pow(2, 10)      // 2の10乗 → 1024.0 (double)
Math.sqrt(16)        // 平方根 → 4.0 (double)
Math.round(3.6)      // 四捨五入 → 4 (long)
Math.floor(3.9)      // 切り捨て → 3.0 (double)
Math.ceil(3.1)       // 切り上げ → 4.0 (double)
Math.random()        // 0.0以上1.0未満のランダム値 (double)

【よく使うパターン】
// 1〜10のランダム整数
int rand = (int)(Math.random() * 10) + 1;

// 定数
Math.PI    // 円周率 3.14159...
Math.E     // 自然対数の底 2.71828...`
  },
  {
    title: "試験に出やすいポイント 総まとめ",
    category: "総まとめ",
    content: `【よく間違えるポイント ⚠️】

1. int同士の割り算は整数除算
   7 / 2 = 3  （2.5ではない）

2. 文字列連結の評価順序
   "a" + 1 + 2 = "a12"
   1 + 2 + "a" = "3a"

3. 後置・前置インクリメント
   a++ → 今の値を使ってから +1
   ++a → 先に +1 してから使う

4. == vs equals()
   == → 参照（アドレス）の比較
   equals() → 内容の比較

5. 文字列リテラルはプールで共有
   "abc" == "abc" → true（同じプールオブジェクト）
   new String("abc") == new String("abc") → false

6. switch の fall-through
   break を忘れると次のcaseも実行される

7. 配列インデックスは0始まり
   length=5 → インデックス 0〜4

8. ローカル変数は初期化必須
   int x; System.out.println(x); → コンパイルエラー

9. finalクラス・メソッド
   final class → 継承不可
   final method → オーバーライド不可

10. 例外の順序
    subclassの例外 → superclassの例外 の順に catch`
  }
];
