const QUESTIONS = [
  // ==================== Javaの基本 ====================
  {
    topic: "Javaの基本",
    question: "Javaプログラムを実行するために必要な環境はどれですか？",
    choices: ["JDK", "JRE", "JVM", "IDE"],
    answer: 1,
    explanation: "JRE（Java Runtime Environment）はJavaプログラムを実行するための環境です。JVMはJREに含まれており、JDKは開発用（JREを含む）です。"
  },
  {
    topic: "Javaの基本",
    question: "Javaのソースファイルの拡張子はどれですか？",
    choices: [".class", ".java", ".jar", ".jvm"],
    answer: 1,
    explanation: "Javaのソースファイルの拡張子は .java です。コンパイルすると .class ファイル（バイトコード）が生成されます。"
  },
  {
    topic: "Javaの基本",
    question: "Javaプログラムのエントリーポイントとなるmainメソッドの正しい宣言はどれですか？",
    choices: [
      "public void main(String args)",
      "public static void main(String[] args)",
      "static void main(String[] args)",
      "public static int main(String[] args)"
    ],
    answer: 1,
    explanation: "mainメソッドは `public static void main(String[] args)` と宣言します。public、static、void、String[]の配列引数が必須です。"
  },
  {
    topic: "Javaの基本",
    question: "Javaがプラットフォームに依存しない理由はどれですか？",
    choices: [
      "コンパイラが各OSに対応しているから",
      "バイトコードをJVMが実行するから",
      "ソースコードが直接実行されるから",
      "OSのAPIを直接呼ぶから"
    ],
    answer: 1,
    explanation: "Javaはコンパイル後にバイトコード（.class）を生成し、各プラットフォームのJVMがそれを実行します。これにより「Write Once, Run Anywhere」が実現されています。"
  },
  {
    topic: "Javaの基本",
    question: "コンパイルに使うコマンドはどれですか？",
    choices: ["java", "javac", "javap", "jar"],
    answer: 1,
    explanation: "javacコマンドでJavaソースファイルをコンパイルします。javaコマンドは実行時に使います。"
  },

  // ==================== データ型と変数 ====================
  {
    topic: "データ型と変数",
    question: "次のうち、整数を扱うプリミティブ型でないものはどれですか？",
    choices: ["int", "long", "double", "byte"],
    answer: 2,
    explanation: "double は浮動小数点数を扱うプリミティブ型です。整数型はbyte, short, int, longです。"
  },
  {
    topic: "データ型と変数",
    question: "int型の変数に格納できる値の範囲として正しいのはどれですか？",
    choices: [
      "-128 〜 127",
      "-32768 〜 32767",
      "-2147483648 〜 2147483647",
      "-9223372036854775808 〜 9223372036854775807"
    ],
    answer: 2,
    explanation: "int型は32ビットで、約±21億（-2^31 〜 2^31-1）の範囲です。byte(-128〜127)、short(-32768〜32767)、long(±約920京)です。"
  },
  {
    topic: "データ型と変数",
    question: "次のコードのコンパイル結果はどうなりますか？\n\nlong x = 10000000000;",
    choices: [
      "正常にコンパイルされる",
      "コンパイルエラーになる",
      "実行時エラーになる",
      "0が代入される"
    ],
    answer: 1,
    explanation: "整数リテラルはデフォルトでint型です。10000000000はintの最大値を超えるため、long型リテラルにするには末尾にLを付ける必要があります（long x = 10000000000L;）。"
  },
  {
    topic: "データ型と変数",
    question: "次のコードの出力はどれですか？\n\nint a = 5;\nint b = 2;\nSystem.out.println(a / b);",
    choices: ["2.5", "2", "3", "2.0"],
    answer: 1,
    explanation: "int型同士の除算は整数除算となり、小数点以下は切り捨てられます。5 / 2 = 2 となります。"
  },
  {
    topic: "データ型と変数",
    question: "char型の正しい初期化方法はどれですか？",
    choices: [
      "char c = \"A\";",
      "char c = 'A';",
      "char c = A;",
      "char c = (char)\"A\";"
    ],
    answer: 1,
    explanation: "char型の文字リテラルはシングルクォートで囲みます。ダブルクォートはString型のリテラルです。"
  },
  {
    topic: "データ型と変数",
    question: "次のコードの出力はどれですか？\n\nSystem.out.println(10 + 20 + \"Java\");",
    choices: ["10 + 20 + Java", "1020Java", "30Java", "Java1020"],
    answer: 2,
    explanation: "左から評価されます。10 + 20 = 30（int）の後、30 + \"Java\" = \"30Java\"（String連結）になります。"
  },

  // ==================== 演算子 ====================
  {
    topic: "演算子",
    question: "次のコードの出力はどれですか？\n\nint a = 10;\nSystem.out.println(a++);",
    choices: ["9", "10", "11", "コンパイルエラー"],
    answer: 1,
    explanation: "後置インクリメント（a++）は、現在の値を使用してから1加算します。よって出力は10、その後aは11になります。"
  },
  {
    topic: "演算子",
    question: "次のコードの出力はどれですか？\n\nint a = 10;\nSystem.out.println(++a);",
    choices: ["9", "10", "11", "コンパイルエラー"],
    answer: 2,
    explanation: "前置インクリメント（++a）は、先に1加算してから値を使用します。よって出力は11です。"
  },
  {
    topic: "演算子",
    question: "% 演算子は何を計算しますか？",
    choices: ["除算", "パーセンテージ", "剰余（余り）", "累乗"],
    answer: 2,
    explanation: "% は剰余演算子（モジュロ演算子）で、割り算の余りを返します。例：7 % 3 = 1"
  },
  {
    topic: "演算子",
    question: "次の条件式の結果はどれですか？\n\nboolean b = (5 > 3) && (2 < 1);",
    choices: ["true", "false", "コンパイルエラー", "実行時エラー"],
    answer: 1,
    explanation: "&&（AND）は両方がtrueのときのみtrueです。(5>3)はtrue、(2<1)はfalseなので、true && false = falseです。"
  },
  {
    topic: "演算子",
    question: "次の比較式の結果はどれですか？\n\nString s1 = new String(\"abc\");\nString s2 = new String(\"abc\");\nSystem.out.println(s1 == s2);",
    choices: ["true", "false", "コンパイルエラー", "実行時エラー"],
    answer: 1,
    explanation: "== はオブジェクト参照を比較します。new演算子で別々に生成した場合、異なるオブジェクトを指すため false になります。文字列の内容を比較するにはequals()を使います。"
  },

  // ==================== 制御フロー ====================
  {
    topic: "制御フロー",
    question: "switchステートメントでbreakを省略した場合の動作はどれですか？",
    choices: [
      "コンパイルエラーになる",
      "そのcaseのみ実行される",
      "次のcaseにもfall-through（処理が流れる）する",
      "switch全体がスキップされる"
    ],
    answer: 2,
    explanation: "breakを省略すると、そのcaseの処理が終わった後、次のcaseの処理も実行されます（fall-through）。意図しないバグの原因になるため注意が必要です。"
  },
  {
    topic: "制御フロー",
    question: "次のコードの出力はどれですか？\n\nfor (int i = 0; i < 3; i++) {\n  if (i == 1) continue;\n  System.out.print(i + \" \");\n}",
    choices: ["0 1 2", "0 2", "1 2", "0 1"],
    answer: 1,
    explanation: "continueはそのイテレーションの残りをスキップして次のループへ進みます。i==1のときスキップされるため、出力は「0 2」です。"
  },
  {
    topic: "制御フロー",
    question: "do-whileループと通常のwhileループの違いはどれですか？",
    choices: [
      "do-whileはループ変数が必要",
      "do-whileは最低1回必ず実行される",
      "do-whileはbreak使用不可",
      "違いはない"
    ],
    answer: 1,
    explanation: "do-whileループは先に処理を実行してから条件を評価します。そのため条件がfalseでも必ず1回は実行されます。"
  },
  {
    topic: "制御フロー",
    question: "次のコードの出力はどれですか？\n\nint x = 5;\nif (x > 3)\n  System.out.println(\"A\");\n  System.out.println(\"B\");",
    choices: ["A", "B", "A\nB", "何も出力されない"],
    answer: 2,
    explanation: "ブレースがないif文は直後の1文のみが対象です。`System.out.println(\"B\")`はifの外なので、条件に関係なく常に実行されます。出力はA と B の両方です。"
  },
  {
    topic: "制御フロー",
    question: "switchステートメントで使用できる型はどれですか？（Java 8まで）",
    choices: [
      "int, String, boolean",
      "byte, short, int, char, String, enum",
      "int, double, String",
      "すべてのプリミティブ型"
    ],
    answer: 1,
    explanation: "switchで使えるのはbyte, short, int, char, String, enumです。double, float, boolean, longは使えません。"
  },

  // ==================== 配列 ====================
  {
    topic: "配列",
    question: "次のコードでarrayの要素数はいくつですか？\n\nint[] array = new int[5];",
    choices: ["4", "5", "6", "コンパイルエラー"],
    answer: 1,
    explanation: "new int[5]は5要素の配列を生成します。インデックスは0〜4です。"
  },
  {
    topic: "配列",
    question: "配列の長さを取得するには何を使いますか？",
    choices: ["array.size()", "array.length()", "array.length", "array.count"],
    answer: 2,
    explanation: "配列の長さはlengthフィールド（メソッドではない）で取得します。array.lengthと書きます（括弧なし）。"
  },
  {
    topic: "配列",
    question: "次のコードの出力はどれですか？\n\nint[] a = {1, 2, 3};\nSystem.out.println(a[3]);",
    choices: ["0", "3", "実行時エラー（ArrayIndexOutOfBoundsException）", "コンパイルエラー"],
    answer: 2,
    explanation: "配列のインデックスは0始まりなので、a[3]は4番目の要素を指しますが、配列サイズは3のため実行時にArrayIndexOutOfBoundsExceptionがスローされます。"
  },
  {
    topic: "配列",
    question: "int型配列を宣言して初期化する正しい方法はどれですか？",
    choices: [
      "int array = new int[]{1,2,3};",
      "int[] array = {1, 2, 3};",
      "int[] array = new int(3);",
      "int array[] = [1, 2, 3];"
    ],
    answer: 1,
    explanation: "配列の宣言と初期化は `int[] array = {1, 2, 3};` または `int[] array = new int[]{1, 2, 3};` と書きます。"
  },
  {
    topic: "配列",
    question: "2次元配列を宣言する正しい方法はどれですか？",
    choices: [
      "int array[][] = new int[3,3];",
      "int[][] array = new int[3][3];",
      "int[3][3] array = new int[][];",
      "int array = new int[3][3];"
    ],
    answer: 1,
    explanation: "2次元配列は `int[][] array = new int[3][3];` と宣言します。`int[3,3]` のような形式はJavaでは使えません。"
  },

  // ==================== クラスとオブジェクト ====================
  {
    topic: "クラスとオブジェクト",
    question: "クラスからオブジェクトを生成するキーワードはどれですか？",
    choices: ["create", "new", "make", "object"],
    answer: 1,
    explanation: "newキーワードを使ってオブジェクトを生成します。例：MyClass obj = new MyClass();"
  },
  {
    topic: "クラスとオブジェクト",
    question: "コンストラクタの説明として正しいのはどれですか？",
    choices: [
      "戻り値の型はvoidである",
      "クラス名と同じ名前を持ち、戻り値の型を持たない",
      "クラス名と異なる名前を持つ",
      "staticメソッドである"
    ],
    answer: 1,
    explanation: "コンストラクタはクラス名と同じ名前を持ち、戻り値の型（voidも含む）を記述しません。オブジェクト生成時に自動的に呼ばれます。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "staticメンバーの説明として正しいのはどれですか？",
    choices: [
      "各インスタンスが独立したコピーを持つ",
      "クラスに属し、全インスタンスで共有される",
      "オブジェクト生成後にのみアクセスできる",
      "サブクラスには継承されない"
    ],
    answer: 1,
    explanation: "staticメンバー（フィールド・メソッド）はクラスに属しており、全インスタンスで共有されます。インスタンスを生成しなくてもクラス名.メンバー名でアクセスできます。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "thisキーワードの役割はどれですか？",
    choices: [
      "スーパークラスを参照する",
      "現在のオブジェクト（インスタンス）自身を参照する",
      "クラス自体を参照する",
      "staticメンバーにアクセスする"
    ],
    answer: 1,
    explanation: "thisはそのメソッドを呼び出しているオブジェクト自身を指します。主にインスタンス変数とローカル変数の名前が衝突する場合に使います。"
  },

  // ==================== メソッド ====================
  {
    topic: "メソッド",
    question: "メソッドのオーバーロードとは何ですか？",
    choices: [
      "同じクラス内で同じ名前・同じ引数のメソッドを複数定義すること",
      "同じクラス内で同じ名前・異なる引数のメソッドを複数定義すること",
      "サブクラスで親クラスのメソッドを再定義すること",
      "メソッドにstaticをつけること"
    ],
    answer: 1,
    explanation: "オーバーロードは同じメソッド名で引数の型・数・順序が異なるメソッドを複数定義することです。戻り値の型だけが異なる場合はオーバーロードになりません。"
  },
  {
    topic: "メソッド",
    question: "引数を値渡し（pass by value）で渡した場合の説明として正しいのはどれですか？",
    choices: [
      "メソッド内での変更が呼び出し元に反映される",
      "メソッド内での変更が呼び出し元に反映されない",
      "オブジェクトの参照がコピーされる",
      "Javaでは値渡しは使えない"
    ],
    answer: 1,
    explanation: "Javaはプリミティブ型を値渡しします。メソッド内でパラメータを変更しても呼び出し元の変数には影響しません。※オブジェクトの場合は参照のコピーが渡されます。"
  },
  {
    topic: "メソッド",
    question: "戻り値がないメソッドに指定する戻り値の型はどれですか？",
    choices: ["null", "nothing", "void", "empty"],
    answer: 2,
    explanation: "戻り値がないメソッドにはvoidを指定します。voidのメソッド内でreturn文を使う場合は値なしの `return;` を使います。"
  },

  // ==================== カプセル化・アクセス修飾子 ====================
  {
    topic: "カプセル化",
    question: "private修飾子の説明として正しいのはどれですか？",
    choices: [
      "同じパッケージからアクセス可能",
      "サブクラスからアクセス可能",
      "同じクラス内からのみアクセス可能",
      "どこからでもアクセス可能"
    ],
    answer: 2,
    explanation: "privateは最も制限が強いアクセス修飾子で、そのメンバーを宣言したクラス内からのみアクセスできます。"
  },
  {
    topic: "カプセル化",
    question: "アクセス修飾子の制限が広い順（アクセスしやすい順）に並んでいるのはどれですか？",
    choices: [
      "private → default → protected → public",
      "public → protected → default → private",
      "public → private → protected → default",
      "default → private → public → protected"
    ],
    answer: 1,
    explanation: "アクセス範囲は public（全体）> protected（同パッケージ＋サブクラス）> default（同パッケージ）> private（クラス内）の順です。"
  },
  {
    topic: "カプセル化",
    question: "カプセル化のベストプラクティスはどれですか？",
    choices: [
      "フィールドをpublicにしてどこからでもアクセスできるようにする",
      "フィールドをprivateにしてgetter/setterでアクセスを制御する",
      "すべてのメソッドをprivateにする",
      "staticフィールドのみを使う"
    ],
    answer: 1,
    explanation: "カプセル化ではフィールドをprivateにし、公開するデータのみgetter/setterメソッドを通じてアクセスします。これによりデータの整合性を保つことができます。"
  },

  // ==================== 継承 ====================
  {
    topic: "継承",
    question: "Javaの継承で使うキーワードはどれですか？",
    choices: ["implements", "extends", "inherits", "super"],
    answer: 1,
    explanation: "クラスの継承にはextendsキーワードを使います。例：class Dog extends Animal { }"
  },
  {
    topic: "継承",
    question: "メソッドのオーバーライドの条件として正しいのはどれですか？",
    choices: [
      "メソッド名のみが同じであれば良い",
      "メソッド名・引数リスト・戻り値の型が一致する必要がある",
      "引数の型が異なっていても良い",
      "アクセス修飾子を必ずprivateにする"
    ],
    answer: 1,
    explanation: "オーバーライドはメソッド名・引数リスト・戻り値の型（または共変型）が一致する必要があります。またアクセス修飾子は親クラスより制限を強くできません。"
  },
  {
    topic: "継承",
    question: "superキーワードの用途として正しいものはどれですか？",
    choices: [
      "現在のオブジェクトを参照する",
      "親クラスのメンバーにアクセスする",
      "インタフェースを実装する",
      "staticメソッドを呼ぶ"
    ],
    answer: 1,
    explanation: "superはスーパークラス（親クラス）を参照するキーワードです。super.メソッド名()で親クラスのメソッドを呼んだり、super()で親クラスのコンストラクタを呼びます。"
  },
  {
    topic: "継承",
    question: "Javaで多重継承できないのはどれですか？",
    choices: [
      "インタフェースの多重実装",
      "クラスの多重継承",
      "インタフェースの継承",
      "抽象クラスの継承"
    ],
    answer: 1,
    explanation: "Javaではクラスの多重継承（複数のクラスをextendsで継承）はできません。ただし、インタフェースは複数implementsできます。"
  },
  {
    topic: "継承",
    question: "@Overrideアノテーションの役割はどれですか？",
    choices: [
      "メソッドの実行速度を向上させる",
      "オーバーライドであることをコンパイラに伝えミスを検出する",
      "メソッドをpublicにする",
      "メソッドをfinalにする"
    ],
    answer: 1,
    explanation: "@Overrideはオーバーライドを意図していることをコンパイラに伝えます。スペルミスや引数間違いがあった場合にコンパイルエラーで検出できます（なくても動く）。"
  },

  // ==================== インタフェース・抽象クラス ====================
  {
    topic: "インタフェース・抽象クラス",
    question: "インタフェースを実装するキーワードはどれですか？",
    choices: ["extends", "implements", "inherits", "uses"],
    answer: 1,
    explanation: "インタフェースの実装にはimplementsキーワードを使います。例：class Dog implements Animal { }"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "抽象クラスに関する正しい説明はどれですか？",
    choices: [
      "abstractクラスのインスタンスは直接生成できる",
      "abstractクラスはインスタンス化できず、サブクラスで継承して使う",
      "abstractクラスにはabstractメソッドしか定義できない",
      "abstractクラスはインタフェースと同じである"
    ],
    answer: 1,
    explanation: "abstractクラスはインスタンス化できません。具体的な実装を持つメソッドとabstractメソッドを混在させることができます。"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "インタフェースのメソッドはデフォルトでどのアクセス修飾子ですか？（Java 8以前）",
    choices: ["private", "protected", "public abstract", "default"],
    answer: 2,
    explanation: "インタフェースで宣言されたメソッドは暗黙的にpublic abstractです。フィールドはpublic static finalです。"
  },

  // ==================== 例外処理 ====================
  {
    topic: "例外処理",
    question: "例外をキャッチするために使うキーワードの組み合わせはどれですか？",
    choices: [
      "try / handle",
      "try / catch",
      "error / catch",
      "do / catch"
    ],
    answer: 1,
    explanation: "例外処理にはtry-catch-finallyブロックを使います。tryブロック内の例外をcatchで捕まえます。"
  },
  {
    topic: "例外処理",
    question: "finallyブロックはいつ実行されますか？",
    choices: [
      "例外が発生しなかったときのみ",
      "例外が発生したときのみ",
      "例外の有無に関わらず常に実行される",
      "catchブロックがなかったときのみ"
    ],
    answer: 2,
    explanation: "finallyブロックは例外の有無に関わらず必ず実行されます。リソースの解放などに使います（ただしSystem.exit()の呼び出しなど例外あり）。"
  },
  {
    topic: "例外処理",
    question: "検査例外（checked exception）について正しい説明はどれですか？",
    choices: [
      "RuntimeExceptionのサブクラスである",
      "try-catchで捕捉するかthrowsで宣言する必要がある",
      "コンパイル時にチェックされない",
      "プログラムのバグを表す"
    ],
    answer: 1,
    explanation: "検査例外（checked exception）はコンパイラによってチェックされ、try-catchで処理するかthrowsで呼び出し元に伝播させる必要があります。IOExceptionなどが該当します。"
  },
  {
    topic: "例外処理",
    question: "NullPointerExceptionはどのような例外ですか？",
    choices: [
      "検査例外（checked exception）",
      "非検査例外（unchecked exception）",
      "エラー（Error）",
      "確認例外"
    ],
    answer: 1,
    explanation: "NullPointerExceptionはRuntimeExceptionのサブクラスで、非検査例外（unchecked exception）です。nullの参照を使おうとした時に発生します。"
  },
  {
    topic: "例外処理",
    question: "例外を呼び出し元に伝播させるキーワードはどれですか？",
    choices: ["throw", "throws", "propagate", "raise"],
    answer: 1,
    explanation: "メソッド宣言にthrowsを付けると、そのメソッドが指定の例外をスローする可能性があることを宣言し、呼び出し元に処理を委ねます。throwは実際に例外をスローする文です。"
  },

  // ==================== Java API ====================
  {
    topic: "Java API",
    question: "Stringクラスの文字列比較で内容を正しく比較するメソッドはどれですか？",
    choices: ["==", "compareTo()", "equals()", "same()"],
    answer: 2,
    explanation: "文字列の内容を比較するにはequals()メソッドを使います。==はオブジェクト参照を比較するため、内容が同じでも別オブジェクトだとfalseになります。"
  },
  {
    topic: "Java API",
    question: "次のコードの出力はどれですか？\n\nString s = \"Hello\";\nSystem.out.println(s.length());",
    choices: ["4", "5", "6", "コンパイルエラー"],
    answer: 1,
    explanation: "\"Hello\"は5文字なので、length()メソッドは5を返します。"
  },
  {
    topic: "Java API",
    question: "Stringクラスのsubstring(2, 5)メソッドの動作はどれですか？",
    choices: [
      "インデックス2〜5の4文字を返す",
      "インデックス2〜4（5は含まない）の3文字を返す",
      "インデックス2から5文字分を返す",
      "後ろから2〜5番目の文字を返す"
    ],
    answer: 1,
    explanation: "substring(beginIndex, endIndex)は、beginIndex（含む）からendIndex（含まない）までの部分文字列を返します。substring(2,5)はインデックス2,3,4の3文字です。"
  },
  {
    topic: "Java API",
    question: "Stringクラスでイミュータブル（不変）とはどういう意味ですか？",
    choices: [
      "文字列の比較ができない",
      "一度生成されたStringオブジェクトの内容は変更できない",
      "文字列をコピーできない",
      "文字列を変数に代入できない"
    ],
    answer: 1,
    explanation: "Stringオブジェクトはイミュータブルで、一度生成された後は内容を変更できません。replace()等のメソッドは新しいStringオブジェクトを返します。"
  },
  {
    topic: "Java API",
    question: "ArrayListとarrayの違いとして正しいのはどれですか？",
    choices: [
      "ArrayListはプリミティブ型を直接格納できる",
      "ArrayListはサイズが動的に変わる",
      "Arrayの方がメソッドが多い",
      "ArrayListは配列より高速である"
    ],
    answer: 1,
    explanation: "ArrayListはサイズが動的に変化するリストです。配列は宣言時にサイズを固定する必要があります。ArrayListはプリミティブ型を直接格納できず、ラッパークラスを使います。"
  },
  {
    topic: "Java API",
    question: "Math.max(3, 7)の戻り値はどれですか？",
    choices: ["3", "7", "10", "4"],
    answer: 1,
    explanation: "Math.max(a, b)は2つの値のうち大きい方を返します。max(3, 7)は7を返します。"
  },

  // ==================== Javaの基本（追加） ====================
  {
    topic: "Javaの基本",
    question: "Javaのコメントの書き方として正しくないものはどれですか？",
    choices: [
      "// 一行コメント",
      "/* 複数行コメント */",
      "/** Javadocコメント */",
      "-- SQLスタイルコメント"
    ],
    answer: 3,
    explanation: "Javaのコメントは // (一行)、/* */ (複数行)、/** */ (Javadoc) の3種類です。-- はSQLのコメント記法でJavaでは使えません。"
  },
  {
    topic: "Javaの基本",
    question: "パッケージ宣言はソースファイルのどこに書きますか？",
    choices: [
      "クラス宣言の直後",
      "import文の後",
      "ファイルの先頭（コメントを除く最初の文）",
      "どこに書いても良い"
    ],
    answer: 2,
    explanation: "package文はソースファイルの先頭（有効な文として最初）に書く必要があります。コメントは前に置けます。"
  },
  {
    topic: "Javaの基本",
    question: "次のうちJavaの識別子として有効なものはどれですか？",
    choices: ["2myVar", "_myVar", "my-Var", "class"],
    answer: 1,
    explanation: "識別子は数字で始めることができません。ハイフン(-)は使えません。classは予約語です。アンダースコア(_)や$で始めることは可能です。"
  },
  {
    topic: "Javaの基本",
    question: "System.out.println() と System.out.print() の違いはどれですか？",
    choices: [
      "println()は整数のみ出力できる",
      "println()は出力後に改行を追加する",
      "print()の方が高速",
      "違いはない"
    ],
    answer: 1,
    explanation: "println()は出力後に改行（\\n）を追加します。print()は改行を追加しません。"
  },

  // ==================== データ型と変数（追加） ====================
  {
    topic: "データ型と変数",
    question: "次のコードの出力はどれですか？\n\nbyte b = 127;\nb++;\nSystem.out.println(b);",
    choices: ["127", "128", "-128", "コンパイルエラー"],
    answer: 2,
    explanation: "byteの最大値は127です。127++でオーバーフローし、最小値の-128に戻ります（整数のオーバーフロー）。"
  },
  {
    topic: "データ型と変数",
    question: "float型リテラルの正しい書き方はどれですか？",
    choices: ["float f = 3.14;", "float f = 3.14f;", "float f = 3.14d;", "float f = (float)3;"],
    answer: 1,
    explanation: "小数点リテラルはデフォルトでdouble型です。float型として扱うには末尾にfまたはFを付けます。float f = 3.14; はコンパイルエラーになります。"
  },
  {
    topic: "データ型と変数",
    question: "int型からdouble型への代入はどうなりますか？",
    choices: [
      "コンパイルエラーになる",
      "実行時エラーになる",
      "暗黙的に型変換（拡大変換）される",
      "データが失われる"
    ],
    answer: 2,
    explanation: "小さい型から大きい型への変換（拡大変換）は自動的に行われます。int→double, int→long, float→doubleなどが該当します。"
  },
  {
    topic: "データ型と変数",
    question: "次のコードはコンパイルできますか？\n\ndouble d = 3.14;\nint i = d;",
    choices: [
      "できる（自動変換される）",
      "できない（明示的なキャストが必要）",
      "できる（精度が落ちるが動く）",
      "実行時エラーになる"
    ],
    answer: 1,
    explanation: "大きい型から小さい型への変換（縮小変換）は自動では行えません。(int)d のように明示的なキャストが必要です。"
  },

  // ==================== 演算子（追加） ====================
  {
    topic: "演算子",
    question: "次の式の結果はどれですか？\n\nint x = 10;\nx += 5;\nSystem.out.println(x);",
    choices: ["5", "10", "15", "50"],
    answer: 2,
    explanation: "+= は複合代入演算子です。x += 5 は x = x + 5 と同じ意味で、10 + 5 = 15 になります。"
  },
  {
    topic: "演算子",
    question: "三項演算子の正しい構文はどれですか？",
    choices: [
      "条件 ? 偽の値 : 真の値",
      "条件 ? 真の値 : 偽の値",
      "条件 : 真の値 ? 偽の値",
      "if 条件 ? 真の値 : 偽の値"
    ],
    answer: 1,
    explanation: "三項演算子は 条件 ? 真の時の値 : 偽の時の値 という構文です。例：int max = (a > b) ? a : b;"
  },
  {
    topic: "演算子",
    question: "instanceof 演算子の役割はどれですか？",
    choices: [
      "オブジェクトのサイズを返す",
      "オブジェクトが特定のクラスのインスタンスかどうかを判定する",
      "新しいインスタンスを生成する",
      "クラス名を文字列で返す"
    ],
    answer: 1,
    explanation: "instanceofはオブジェクトが指定したクラス（またはそのサブクラス）のインスタンスかどうかをbooleanで返します。例：if (obj instanceof String)"
  },

  // ==================== 制御フロー（追加） ====================
  {
    topic: "制御フロー",
    question: "拡張for文（for-each文）の正しい構文はどれですか？",
    choices: [
      "for (int i : array.length)",
      "for (int item : array)",
      "foreach (int item in array)",
      "for each (item in array)"
    ],
    answer: 1,
    explanation: "拡張for文は for (型 変数名 : 配列またはIterable) という構文です。配列やコレクションの全要素を順に処理できます。"
  },
  {
    topic: "制御フロー",
    question: "次のコードで何回「Hello」が表示されますか？\n\nint i = 0;\ndo {\n  System.out.println(\"Hello\");\n  i++;\n} while (i < 0);",
    choices: ["0回", "1回", "無限回", "コンパイルエラー"],
    answer: 1,
    explanation: "do-whileは最初に処理を実行してから条件を評価します。i=0で「Hello」が1回表示され、その後 i<0 (0<0) がfalseなのでループが終了します。"
  },
  {
    topic: "制御フロー",
    question: "breakとcontinueの違いはどれですか？",
    choices: [
      "breakはループ全体を終了し、continueは現在のイテレーションをスキップする",
      "continueはループ全体を終了し、breakは現在のイテレーションをスキップする",
      "どちらも同じ動作をする",
      "breakはif文でのみ使える"
    ],
    answer: 0,
    explanation: "breakはループ（またはswitch）全体を終了します。continueは現在のイテレーションの残りをスキップして次のイテレーションへ進みます。"
  },
  {
    topic: "制御フロー",
    question: "次の無限ループとして正しいものはどれですか？",
    choices: [
      "for (int i=0; i<10; i--) {}",
      "while (true) {}",
      "for (;;) {}",
      "B と C の両方"
    ],
    answer: 3,
    explanation: "while(true) と for(;;) はどちらも条件が常にtrueの無限ループです。どちらも正しい書き方です。"
  },

  // ==================== 配列（追加） ====================
  {
    topic: "配列",
    question: "配列をコピーするのに使えるメソッドはどれですか？",
    choices: [
      "array.copy()",
      "System.arraycopy()",
      "Array.duplicate()",
      "array.clone() は使えない"
    ],
    answer: 1,
    explanation: "System.arraycopy()は配列の要素をコピーするメソッドです。Arrays.copyOf()やclone()も使えます。"
  },
  {
    topic: "配列",
    question: "int型配列の初期値はどれですか？",
    choices: ["null", "1", "0", "コンパイルエラー"],
    answer: 2,
    explanation: "数値型配列（int, double等）の要素は0で初期化されます。boolean型はfalse、参照型（Stringなど）はnullです。"
  },
  {
    topic: "配列",
    question: "次のコードの出力はどれですか？\n\nint[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nSystem.out.println(a[0]);",
    choices: ["1", "99", "0", "コンパイルエラー"],
    answer: 1,
    explanation: "配列は参照型です。b = a は同じ配列を指す参照のコピーです。b[0]を変更すると、aが指す同じ配列も変わるため、a[0]は99になります。"
  },

  // ==================== クラスとオブジェクト（追加） ====================
  {
    topic: "クラスとオブジェクト",
    question: "デフォルトコンストラクタはいつ自動生成されますか？",
    choices: [
      "常に自動生成される",
      "コンストラクタが1つも定義されていない場合",
      "クラスにpublicがついている場合",
      "staticクラスの場合"
    ],
    answer: 1,
    explanation: "コンストラクタを1つも定義しない場合、コンパイラが引数なしのデフォルトコンストラクタを自動生成します。1つでもコンストラクタを定義すると自動生成されません。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "finalフィールドの説明として正しいのはどれですか？",
    choices: [
      "サブクラスからアクセスできない",
      "一度値を設定したら変更できない（定数）",
      "staticである必要がある",
      "メソッド内でのみ宣言できる"
    ],
    answer: 1,
    explanation: "finalフィールドは一度初期化したら再代入できません。定数の宣言によく使われます（例：final int MAX = 100;）。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "次のうちオブジェクトの等価性（内容の一致）を比較する正しい方法はどれですか？",
    choices: [
      "== 演算子を使う",
      "equals()メソッドをオーバーライドして使う",
      "= 演算子を使う",
      "same()メソッドを使う"
    ],
    answer: 1,
    explanation: "== はオブジェクトの参照（アドレス）を比較します。内容（状態）の一致を比較するにはequals()メソッドを適切にオーバーライドして使います。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "static初期化ブロックはいつ実行されますか？",
    choices: [
      "オブジェクト生成時",
      "クラスが初めてロードされたとき",
      "mainメソッド終了後",
      "毎回メソッドが呼ばれるたびに"
    ],
    answer: 1,
    explanation: "static初期化ブロック（static { }）はクラスが初めてJVMにロードされたときに1回だけ実行されます。staticフィールドの初期化などに使います。"
  },

  // ==================== メソッド（追加） ====================
  {
    topic: "メソッド",
    question: "可変長引数（varargs）の正しい宣言はどれですか？",
    choices: [
      "void method(int[] args)",
      "void method(int... args)",
      "void method(int* args)",
      "void method(args int...)"
    ],
    answer: 1,
    explanation: "可変長引数は型の後に ... をつけて宣言します。呼び出し時は任意個の引数を渡せ、メソッド内では配列として扱われます。"
  },
  {
    topic: "メソッド",
    question: "メソッドのシグネチャとはどれですか？",
    choices: [
      "戻り値の型のみ",
      "メソッド名と引数リスト（型・数・順序）の組み合わせ",
      "アクセス修飾子とメソッド名",
      "メソッド名のみ"
    ],
    answer: 1,
    explanation: "メソッドシグネチャはメソッド名と引数リスト（型・数・順序）の組み合わせです。戻り値の型はシグネチャに含まれません。オーバーロードはシグネチャで区別されます。"
  },
  {
    topic: "メソッド",
    question: "再帰メソッドで必ず必要なものはどれですか？",
    choices: [
      "staticキーワード",
      "ループ文",
      "終了条件（ベースケース）",
      "配列の引数"
    ],
    answer: 2,
    explanation: "再帰メソッドは自分自身を呼び出します。終了条件（ベースケース）がないと無限に呼び出され、StackOverflowErrorが発生します。"
  },

  // ==================== カプセル化（追加） ====================
  {
    topic: "カプセル化",
    question: "Getterメソッドの命名規則として一般的なものはどれですか？",
    choices: [
      "fetchXxx()",
      "getXxx()",
      "readXxx()",
      "returnXxx()"
    ],
    answer: 1,
    explanation: "Javaの慣習ではgetterは getXxx()、setterは setXxx() という名前にします。boolean型の場合は isXxx() という名前にすることも多いです。"
  },
  {
    topic: "カプセル化",
    question: "修飾子なし（default/package-private）のメンバーにアクセスできるのはどれですか？",
    choices: [
      "どこからでもアクセスできる",
      "同じパッケージ内のクラスのみ",
      "サブクラスのみ",
      "同じクラス内のみ"
    ],
    answer: 1,
    explanation: "アクセス修飾子を省略（デフォルト/package-private）すると、同じパッケージ内のクラスからのみアクセスできます。"
  },

  // ==================== 継承（追加） ====================
  {
    topic: "継承",
    question: "すべてのJavaクラスが暗黙的に継承しているクラスはどれですか？",
    choices: ["Base", "Root", "Object", "Super"],
    answer: 2,
    explanation: "Javaのすべてのクラスは暗黙的にjava.lang.Objectクラスを継承しています。equals()、hashCode()、toString()などのメソッドはObjectクラスで定義されています。"
  },
  {
    topic: "継承",
    question: "finalクラスを継承しようとするとどうなりますか？",
    choices: [
      "正常にコンパイルされる",
      "コンパイルエラーになる",
      "実行時エラーになる",
      "警告が表示される"
    ],
    answer: 1,
    explanation: "finalが付いたクラスは継承できません。Stringクラスはfinalクラスの代表例です。コンパイルエラーになります。"
  },
  {
    topic: "継承",
    question: "ポリモーフィズム（多態性）の説明として正しいのはどれですか？",
    choices: [
      "1つのクラスが複数のクラスを継承できること",
      "親クラスの参照変数でサブクラスのオブジェクトを扱えること",
      "メソッドを複数定義できること",
      "クラスを複数のパッケージに属させること"
    ],
    answer: 1,
    explanation: "ポリモーフィズムとは、親クラス型の変数でサブクラスのオブジェクトを参照し、オーバーライドされたメソッドが実行時の実際の型に応じて呼ばれる仕組みです。"
  },
  {
    topic: "継承",
    question: "次のコードで呼ばれるのはどちらのshow()ですか？\n\nAnimal a = new Dog();\na.show();",
    choices: [
      "Animalクラスのshow()",
      "Dogクラスのshow()（オーバーライドしている場合）",
      "コンパイルエラー",
      "両方呼ばれる"
    ],
    answer: 1,
    explanation: "Javaは動的ディスパッチ（実行時ポリモーフィズム）を採用しています。参照型がAnimalでも、実際のオブジェクトがDogなので、DogのオーバーライドされたメソッドがJVM実行時に選ばれます。"
  },

  // ==================== インタフェース・抽象クラス（追加） ====================
  {
    topic: "インタフェース・抽象クラス",
    question: "抽象メソッドとはどのようなメソッドですか？",
    choices: [
      "privateメソッド",
      "本体（実装）を持たないメソッド",
      "staticメソッド",
      "戻り値がvoidのメソッド"
    ],
    answer: 1,
    explanation: "抽象メソッド（abstractメソッド）はメソッドの宣言のみで本体{}を持ちません。サブクラスで必ずオーバーライドして実装する必要があります。"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "Java 8で追加されたインタフェースの機能はどれですか？",
    choices: [
      "フィールドを持てるようになった",
      "defaultメソッドで実装を持てるようになった",
      "インスタンス化できるようになった",
      "privateメソッドが廃止された"
    ],
    answer: 1,
    explanation: "Java 8からインタフェースにdefaultキーワードを使って実装付きメソッドを定義できるようになりました。既存の実装クラスへの互換性を保ちながら機能追加ができます。"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "抽象クラスとインタフェースの違いとして正しいのはどれですか？",
    choices: [
      "抽象クラスはインスタンス化できるが、インタフェースはできない",
      "抽象クラスはコンストラクタを持てるが、インタフェースは持てない",
      "インタフェースはstaticフィールドを持てないが、抽象クラスは持てる",
      "抽象クラスは複数継承できる"
    ],
    answer: 1,
    explanation: "抽象クラスはコンストラクタ、インスタンスフィールド、具体的なメソッドを持てます。インタフェースはコンストラクタを持てず、フィールドはpublic static finalのみです。"
  },

  // ==================== 例外処理（追加） ====================
  {
    topic: "例外処理",
    question: "複数のcatchブロックを書く場合の注意点はどれですか？",
    choices: [
      "順序は関係ない",
      "サブクラスの例外を先に、スーパークラスの例外を後に書く",
      "スーパークラスの例外を先に書く",
      "catchは1つしか書けない"
    ],
    answer: 1,
    explanation: "スーパークラスの例外を先に書くと、サブクラスの例外もそこでキャッチされ、後のcatchブロックが到達不能コードになりコンパイルエラーになります。サブクラス→スーパークラスの順に書きます。"
  },
  {
    topic: "例外処理",
    question: "try-with-resources文の目的はどれですか？",
    choices: [
      "複数のcatchを1行で書く",
      "AutoCloseableなリソースを自動的にclose()する",
      "例外を無視する",
      "例外メッセージを変換する"
    ],
    answer: 1,
    explanation: "try-with-resources（Java 7以降）はAutoCloseableを実装したリソース（ファイル等）をtryブロック終了時に自動でclose()します。finallyでclose()を書く手間が省けます。"
  },
  {
    topic: "例外処理",
    question: "RuntimeExceptionのサブクラスでないのはどれですか？",
    choices: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "ClassCastException"
    ],
    answer: 2,
    explanation: "IOExceptionはExceptionの直接サブクラスで検査例外（checked exception）です。NullPointerException、ArrayIndexOutOfBoundsException、ClassCastExceptionはRuntimeExceptionのサブクラスです。"
  },
  {
    topic: "例外処理",
    question: "例外クラスを自作する場合、通常何を継承しますか？",
    choices: [
      "Throwable",
      "Error",
      "Exception または RuntimeException",
      "Object"
    ],
    answer: 2,
    explanation: "カスタム例外はExceptionまたはRuntimeExceptionを継承して作ります。検査例外にしたい場合はException、非検査例外にしたい場合はRuntimeExceptionを継承します。"
  },

  // ==================== Java API（追加） ====================
  {
    topic: "Java API",
    question: "StringBuilderをStringの代わりに使う主な理由はどれですか？",
    choices: [
      "StringBuilderはnullを扱える",
      "文字列を繰り返し変更する場合にStringより効率的",
      "StringBuilderはスレッドセーフ",
      "StringBuilderはプリミティブ型"
    ],
    answer: 1,
    explanation: "Stringはイミュータブルなので変更のたびに新オブジェクトを生成します。StringBuilderは可変長で同じオブジェクトを変更できるため、繰り返し文字列連結する場面では効率的です。"
  },
  {
    topic: "Java API",
    question: "String.valueOf(123) の結果はどれですか？",
    choices: ["123（int）", "\"123\"（String）", "123.0（double）", "コンパイルエラー"],
    answer: 1,
    explanation: "String.valueOf()は引数をString型に変換します。valueOf(123)は\"123\"という文字列を返します。"
  },
  {
    topic: "Java API",
    question: "Integer.parseInt(\"42\") の結果はどれですか？",
    choices: ["\"42\"（String）", "42（int）", "42.0（double）", "コンパイルエラー"],
    answer: 1,
    explanation: "Integer.parseInt()は数値を表す文字列をint型に変換します。数値以外の文字列を渡すとNumberFormatExceptionがスローされます。"
  },
  {
    topic: "Java API",
    question: "ArrayListのadd()メソッドの説明として正しいのはどれですか？",
    choices: [
      "リストの先頭に要素を追加する",
      "リストの末尾に要素を追加する（デフォルト）",
      "指定した要素を削除する",
      "リストのサイズを返す"
    ],
    answer: 1,
    explanation: "add(element)はリストの末尾に要素を追加します。add(index, element)とすると指定位置に挿入できます。"
  },
  {
    topic: "Java API",
    question: "文字列を大文字に変換するメソッドはどれですか？",
    choices: ["toUpper()", "toUpperCase()", "upper()", "capitalize()"],
    answer: 1,
    explanation: "StringクラスのtoUpperCase()メソッドで文字列を大文字に変換できます。小文字への変換はtoLowerCase()です。"
  },
  {
    topic: "Java API",
    question: "String.trim() メソッドの役割はどれですか？",
    choices: [
      "文字列を切り詰める（最大長を指定）",
      "文字列の先頭と末尾の空白を除去する",
      "文字列を整数に変換する",
      "文字列を分割する"
    ],
    answer: 1,
    explanation: "trim()は文字列の先頭と末尾にある空白（スペース、タブ等）を除去した新しいStringを返します。ユーザー入力のトリミングによく使われます。"
  },

  // ==================== コード読み取り問題（出力を答える） ====================
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint a = 3, b = 4;\nSystem.out.println(a * b + 2);",
    choices: ["18", "14", "12", "コンパイルエラー"],
    answer: 1,
    explanation: "演算子の優先順位により、* が + より先に評価されます。3 * 4 = 12、12 + 2 = 14 が出力されます。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nfor (int i = 1; i <= 5; i++) {\n  if (i % 2 == 0) System.out.print(i + \" \");\n}",
    choices: ["1 3 5", "2 4", "1 2 3 4 5", "2 4 6"],
    answer: 1,
    explanation: "i % 2 == 0 は偶数を判定します。1〜5の中で偶数は2と4なので「2 4 」が出力されます。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint x = 0;\nfor (int i = 0; i < 4; i++) {\n  x += i;\n}\nSystem.out.println(x);",
    choices: ["4", "6", "10", "0"],
    answer: 1,
    explanation: "i=0,1,2,3の順に加算します。0+1+2+3=6 が出力されます。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nString s = \"Java\";\nSystem.out.println(s.charAt(1));",
    choices: ["J", "a", "v", "コンパイルエラー"],
    answer: 1,
    explanation: "charAt(1)はインデックス1の文字を返します。\"Java\"のインデックス0はJ、1はa、2はv、3はaです。よって'a'が出力されます。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint[] arr = {5, 3, 8, 1};\nint max = arr[0];\nfor (int v : arr) {\n  if (v > max) max = v;\n}\nSystem.out.println(max);",
    choices: ["5", "1", "8", "3"],
    answer: 2,
    explanation: "配列の最大値を求めるコードです。5→3（更新なし）→8（8>5なので更新）→1（更新なし）で最終的にmax=8になります。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint i = 5;\nswitch (i) {\n  case 5:\n    System.out.print(\"A\");\n  case 6:\n    System.out.print(\"B\");\n    break;\n  case 7:\n    System.out.print(\"C\");\n}",
    choices: ["A", "AB", "ABC", "B"],
    answer: 1,
    explanation: "case 5でマッチしますが、breakがないためfall-throughしてcase 6も実行されます。case 6にbreakがあるのでそこで終了。出力は「AB」です。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint a = 10;\nint b = a++;\nSystem.out.println(a + \" \" + b);",
    choices: ["10 10", "11 10", "10 11", "11 11"],
    answer: 1,
    explanation: "a++は後置インクリメントです。まずaの値10がbに代入され、その後aが11になります。よって出力は「11 10」です。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nSystem.out.println(\"10\" + 2 + 3);",
    choices: ["15", "1023", "\"10\" + 5", "コンパイルエラー"],
    answer: 1,
    explanation: "左から評価されます。\"10\" + 2 = \"102\"（文字列連結）、\"102\" + 3 = \"1023\" となります。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint n = 10;\nwhile (n > 0) {\n  System.out.print(n + \" \");\n  n -= 3;\n}",
    choices: ["10 7 4 1", "10 7 4", "10 7 4 1 -2", "無限ループ"],
    answer: 0,
    explanation: "n=10→7→4→1→-2(条件false)。n>0の間ループするので10,7,4,1が出力され、n=-2で終了します。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nSystem.out.println(s1 == s2);",
    choices: ["false", "true", "コンパイルエラー", "null"],
    answer: 1,
    explanation: "文字列リテラルは文字列プール（String Pool）に格納され、同じリテラルは同じオブジェクトを参照します。そのためs1==s2はtrueになります。newで生成した場合は異なります。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint x = 7;\nSystem.out.println(x > 5 ? \"big\" : \"small\");",
    choices: ["big", "small", "true", "コンパイルエラー"],
    answer: 0,
    explanation: "三項演算子です。7 > 5 はtrueなので「big」が出力されます。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint[][] mat = new int[2][3];\nSystem.out.println(mat.length + \" \" + mat[0].length);",
    choices: ["6 6", "2 3", "3 2", "2 6"],
    answer: 1,
    explanation: "mat.lengthは行数（2）、mat[0].lengthは列数（3）を返します。出力は「2 3」です。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\nint count = 0;\nfor (int i = 0; i < 10; i++) {\n  if (i % 3 == 0) count++;\n}\nSystem.out.println(count);",
    choices: ["3", "4", "2", "10"],
    answer: 1,
    explanation: "0〜9の中で3の倍数は0, 3, 6, 9の4個です。0も3で割り切れる（0%3==0）ことに注意。countは4になります。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードは何をしますか？\n\nint n = 5;\nint result = 1;\nfor (int i = 1; i <= n; i++) {\n  result *= i;\n}\nSystem.out.println(result);",
    choices: ["nの2乗（25）", "nの合計（15）", "nの階乗（120）", "nの平均"],
    answer: 2,
    explanation: "result に 1×2×3×4×5 を計算します。これは5の階乗（5! = 120）です。"
  },
  {
    topic: "コード読み取り",
    question: "次のコードの出力はどれですか？\n\ntry {\n  int[] a = new int[3];\n  a[5] = 10;\n  System.out.println(\"A\");\n} catch (ArrayIndexOutOfBoundsException e) {\n  System.out.println(\"B\");\n} finally {\n  System.out.println(\"C\");\n}",
    choices: ["A", "B", "A\nC", "B\nC"],
    answer: 3,
    explanation: "a[5]でArrayIndexOutOfBoundsExceptionが発生しcatchに飛びます。\"B\"が出力され、さらにfinallyの\"C\"が必ず実行されます。出力は「B」「C」の2行です。"
  },

  // ==================== データ型と変数（発展） ====================
  {
    topic: "データ型と変数",
    question: "次のうちラッパークラスの正しいペアはどれですか？",
    choices: [
      "int → Integer、char → Character、boolean → Boolean",
      "int → Int、char → Char、boolean → Bool",
      "int → IntClass、double → DoubleClass",
      "byte → ByteWrapper、long → LongWrapper"
    ],
    answer: 0,
    explanation: "プリミティブ型のラッパークラス：int→Integer, char→Character, boolean→Boolean, byte→Byte, short→Short, long→Long, float→Float, double→Double です。"
  },
  {
    topic: "データ型と変数",
    question: "オートボクシング（Auto Boxing）とはどれですか？",
    choices: [
      "プリミティブ型を自動的にラッパークラスのオブジェクトに変換する",
      "ラッパークラスを自動的にプリミティブ型に変換する",
      "int型をlong型に変換する",
      "配列を自動的に生成する"
    ],
    answer: 0,
    explanation: "オートボクシングはプリミティブ型→ラッパークラスへの自動変換です。例：Integer i = 42; （int→Integerに自動変換）。逆方向（Integer→int）はアンボクシングと呼びます。"
  },
  {
    topic: "データ型と変数",
    question: "次の変数宣言で初期値が与えられていないローカル変数を使用した場合はどうなりますか？\n\nvoid method() {\n  int x;\n  System.out.println(x);\n}",
    choices: [
      "0が出力される",
      "nullが出力される",
      "コンパイルエラーになる",
      "実行時エラーになる"
    ],
    answer: 2,
    explanation: "ローカル変数は初期化しないまま使用するとコンパイルエラーになります。インスタンス変数・クラス変数はデフォルト値（int→0など）に初期化されますが、ローカル変数は手動で初期化が必要です。"
  },
  {
    topic: "データ型と変数",
    question: "double型とfloat型の違いとして正しいのはどれですか？",
    choices: [
      "float型の方が精度が高い",
      "double型の方が精度が高い（64ビット vs 32ビット）",
      "どちらも同じ精度",
      "float型は整数のみ扱える"
    ],
    answer: 1,
    explanation: "double型は64ビット、float型は32ビットです。doubleの方が精度と範囲が大きいです。Javaの小数点リテラルのデフォルトはdouble型です。"
  },

  // ==================== 演算子（発展） ====================
  {
    topic: "演算子",
    question: "次の式の結果はどれですか？\n\nboolean b = true || (10 / 0 > 0);",
    choices: ["true", "false", "ArithmeticException", "コンパイルエラー"],
    answer: 0,
    explanation: "||（OR）は短絡評価（ショートサーキット）を行います。左辺がtrueであれば右辺は評価されません。そのため10/0のゼロ除算例外は発生せず、結果はtrueになります。"
  },
  {
    topic: "演算子",
    question: "ビット演算子 & と論理演算子 && の違いはどれですか？",
    choices: [
      "&&は短絡評価し、&は両辺を常に評価する",
      "&は短絡評価し、&&は両辺を常に評価する",
      "違いはない",
      "&はint型のみに使える"
    ],
    answer: 0,
    explanation: "&&（論理AND）は短絡評価で、左辺がfalseなら右辺を評価しません。&（ビットAND）は常に両辺を評価します。boolean型に&を使うことも可能ですが副作用のある式に注意が必要です。"
  },
  {
    topic: "演算子",
    question: "次のコードの出力はどれですか？\n\nint a = 5, b = 3;\nSystem.out.println(a > b ? a - b : b - a);",
    choices: ["2", "-2", "8", "コンパイルエラー"],
    answer: 0,
    explanation: "5 > 3 はtrue なので、a - b = 5 - 3 = 2 が出力されます。"
  },

  // ==================== 制御フロー（発展） ====================
  {
    topic: "制御フロー",
    question: "ラベル付きbreak文の説明として正しいのはどれですか？",
    choices: [
      "ラベルの付いた変数を削除する",
      "指定したラベルのループを終了する（多重ループを一気に抜ける）",
      "ラベルの付いたメソッドを呼ぶ",
      "Javaにはラベルがない"
    ],
    answer: 1,
    explanation: "ラベル付きbreakを使うと多重ループで外側のループを直接抜けられます。例：outer: for(...) { for(...) { break outer; } }"
  },
  {
    topic: "制御フロー",
    question: "次のコードの出力はどれですか？\n\nint i = 0;\nouter:\nwhile (i < 3) {\n  int j = 0;\n  while (j < 3) {\n    if (j == 1) break outer;\n    System.out.print(i + \"\" + j + \" \");\n    j++;\n  }\n  i++;\n}",
    choices: ["00 01 02 10 11 12 20 21 22", "00", "00 10 20", "コンパイルエラー"],
    answer: 1,
    explanation: "i=0,j=0のとき「00」を出力し、j++でj=1になるとbreak outerでouterループを終了します。出力は「00 」のみです。"
  },
  {
    topic: "制御フロー",
    question: "switchのcase値として使えないものはどれですか？",
    choices: [
      "final int定数",
      "char型リテラル",
      "変数（int型）",
      "String型リテラル"
    ],
    answer: 2,
    explanation: "switchのcase値には定数（リテラルまたはfinal定数）のみ使えます。変数は実行時まで値が確定しないため使えません。コンパイルエラーになります。"
  },

  // ==================== 配列（発展） ====================
  {
    topic: "配列",
    question: "Arrays.sort()を使って配列をソートした後の結果はどれですか？\n\nint[] a = {5, 2, 8, 1, 9};\nArrays.sort(a);\nSystem.out.println(a[0]);",
    choices: ["5", "1", "9", "コンパイルエラー"],
    answer: 1,
    explanation: "Arrays.sort()は配列を昇順にソートします。ソート後は{1,2,5,8,9}となり、a[0]は1です。"
  },
  {
    topic: "配列",
    question: "Arrays.toString()の役割はどれですか？",
    choices: [
      "配列をソートする",
      "配列の要素を文字列で表現する（例：[1, 2, 3]）",
      "配列のサイズを文字列で返す",
      "配列を別の配列にコピーする"
    ],
    answer: 1,
    explanation: "Arrays.toString()は配列の全要素を「[1, 2, 3]」のような文字列に変換します。配列をそのまま直接System.out.printlnするとアドレスが表示されるため、内容確認にArrays.toString()を使います。"
  },
  {
    topic: "配列",
    question: "次のコードの出力はどれですか？\n\nString[] s = new String[3];\nSystem.out.println(s[0]);",
    choices: ["\"\"（空文字）", "null", "0", "コンパイルエラー"],
    answer: 1,
    explanation: "参照型（String等）の配列要素はデフォルトでnullに初期化されます。s[0]はnullなので\"null\"と出力されます。"
  },
  {
    topic: "配列",
    question: "次の宣言のうちコンパイルエラーになるのはどれですか？",
    choices: [
      "int[] a = new int[0];",
      "int[] b = new int[-1];",
      "int[] c = {1, 2, 3};",
      "int[] d = new int[100];"
    ],
    answer: 1,
    explanation: "負のサイズで配列を生成しようとするとコンパイルは通りますが、実行時にNegativeArraySizeExceptionがスローされます。サイズ0の配列は有効です。"
  },

  // ==================== クラスとオブジェクト（発展） ====================
  {
    topic: "クラスとオブジェクト",
    question: "ガベージコレクション（GC）の説明として正しいのはどれですか？",
    choices: [
      "プログラマが明示的にメモリを解放する仕組み",
      "JVMが不要なオブジェクトのメモリを自動的に解放する仕組み",
      "配列のサイズを自動的に拡張する仕組み",
      "例外を自動的に処理する仕組み"
    ],
    answer: 1,
    explanation: "Javaはガベージコレクタが参照されなくなったオブジェクトのメモリを自動解放します。C/C++のように手動でdelete/freeする必要がありません。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "toString()メソッドをオーバーライドする目的はどれですか？",
    choices: [
      "オブジェクトを文字列に変換する際に意味のある内容を返すため",
      "オブジェクトのコピーを作るため",
      "オブジェクトを比較するため",
      "メモリを解放するため"
    ],
    answer: 0,
    explanation: "Object#toString()はデフォルトでクラス名@ハッシュコードを返します。オーバーライドすることでオブジェクトの状態をわかりやすく文字列表現できます。System.out.printlnはtoString()を内部で呼んでいます。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "次のうちインスタンス変数とローカル変数の違いとして正しいのはどれですか？",
    choices: [
      "インスタンス変数はメソッド内で宣言し、ローカル変数はクラス内で宣言する",
      "インスタンス変数はオブジェクトに属し自動初期化される。ローカル変数はメソッド内のみで使えデフォルト初期化されない",
      "ローカル変数の方が長い期間メモリに残る",
      "違いはない"
    ],
    answer: 1,
    explanation: "インスタンス変数はオブジェクト生成時に作られ、デフォルト値で初期化されます（int→0等）。ローカル変数はメソッド実行中のみ存在し、使う前に明示的に初期化が必要です。"
  },
  {
    topic: "クラスとオブジェクト",
    question: "次のコードでNullPointerExceptionが発生するのはどこですか？\n\nString s = null;\nSystem.out.println(s.length());",
    choices: [
      "String s = null; の行",
      "s.length() の呼び出し",
      "System.out.println() の呼び出し",
      "発生しない"
    ],
    answer: 1,
    explanation: "nullの参照変数に対してメソッドを呼ぶとNullPointerExceptionが発生します。s.length()がその例です。null自体の代入はエラーにはなりません。"
  },

  // ==================== メソッド（発展） ====================
  {
    topic: "メソッド",
    question: "Javaでオブジェクト（参照型）を引数として渡した場合の説明として正しいのはどれですか？",
    choices: [
      "参照のコピーが渡されるため、オブジェクト内部の変更は呼び出し元に反映される",
      "オブジェクト全体がコピーされるため、変更は呼び出し元に反映されない",
      "参照のコピーが渡されるが、変数に別オブジェクトを代入しても呼び出し元の変数は変わらない",
      "AとC両方正しい"
    ],
    answer: 3,
    explanation: "参照のコピーが渡されます。オブジェクトの内部状態（フィールド）を変更すると呼び出し元にも反映されます（Aは正しい）。ただし引数の変数に別のオブジェクトを代入しても呼び出し元の変数は変わりません（Cも正しい）。"
  },
  {
    topic: "メソッド",
    question: "次のコードのコンパイル結果はどうなりますか？\n\nvoid method(int a) { }\nvoid method(int b) { }",
    choices: [
      "正常にコンパイルされる",
      "コンパイルエラー（同じシグネチャのオーバーロード不可）",
      "実行時エラー",
      "警告が出るが動く"
    ],
    answer: 1,
    explanation: "メソッドシグネチャは「メソッド名＋引数の型・数・順序」です。引数の名前（a, b）はシグネチャに含まれないため、この2つは同じシグネチャとなりコンパイルエラーになります。"
  },

  // ==================== 継承（発展） ====================
  {
    topic: "継承",
    question: "抽象クラスのサブクラスが全てのabstractメソッドを実装しない場合はどうなりますか？",
    choices: [
      "そのサブクラスも抽象クラスになる必要がある",
      "コンパイルエラー",
      "実行時エラー",
      "未実装のメソッドは自動生成される"
    ],
    answer: 0,
    explanation: "abstractメソッドを全て実装しないサブクラスは、自身もabstractクラスとして宣言する必要があります。そうでない場合はコンパイルエラーになります。"
  },
  {
    topic: "継承",
    question: "finalメソッドの説明として正しいのはどれですか？",
    choices: [
      "サブクラスでオーバーライドできない",
      "インスタンス化できない",
      "staticである必要がある",
      "privateである必要がある"
    ],
    answer: 0,
    explanation: "finalメソッドはサブクラスでオーバーライドできません。finalクラスはサブクラス化（継承）できません。finalフィールドは再代入できません。"
  },
  {
    topic: "継承",
    question: "コンストラクタは継承されますか？",
    choices: [
      "される",
      "されない",
      "publicのみ継承される",
      "super()で継承できる"
    ],
    answer: 1,
    explanation: "コンストラクタは継承されません。サブクラスのコンストラクタから親クラスのコンストラクタを呼ぶには super() を使います。"
  },
  {
    topic: "継承",
    question: "次のコードでエラーが発生する可能性があるのはどれですか？\n\nAnimal a = new Dog();\nDog d = (Dog) a;",
    choices: [
      "1行目でコンパイルエラー",
      "2行目でコンパイルエラー",
      "2行目でClassCastException（aが実際にDogでない場合）",
      "エラーは発生しない"
    ],
    answer: 2,
    explanation: "ダウンキャストは構文上問題ありませんが、実際のオブジェクトが指定の型でない場合、実行時にClassCastExceptionが発生します。instanceof で確認してからキャストするのが安全です。"
  },
  {
    topic: "継承",
    question: "抽象クラスにコンストラクタは定義できますか？",
    choices: [
      "定義できない",
      "定義できる（サブクラスのコンストラクタからsuper()で呼ばれる）",
      "staticコンストラクタのみ定義できる",
      "publicコンストラクタのみ定義できる"
    ],
    answer: 1,
    explanation: "抽象クラスにもコンストラクタを定義できます。直接インスタンス化はできませんが、サブクラスのコンストラクタからsuper()を通じて呼ばれます。"
  },

  // ==================== インタフェース・抽象クラス（発展） ====================
  {
    topic: "インタフェース・抽象クラス",
    question: "クラスが複数のインタフェースを実装する際の正しい構文はどれですか？",
    choices: [
      "class A implements B, C { }",
      "class A implements B implements C { }",
      "class A extends B, C { }",
      "class A uses B, C { }"
    ],
    answer: 0,
    explanation: "複数のインタフェースをimplementsする場合はカンマで区切ります。例：class MyClass implements Runnable, Serializable { }"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "インタフェースのフィールドはどのような修飾子が自動的に付きますか？",
    choices: [
      "public only",
      "public static final",
      "private static",
      "protected abstract"
    ],
    answer: 1,
    explanation: "インタフェースのフィールドは暗黙的に public static final（定数）です。変更できない定数として扱われます。"
  },
  {
    topic: "インタフェース・抽象クラス",
    question: "次のうち抽象クラスをうまく使う場面として最適なのはどれですか？",
    choices: [
      "全く関係のないクラスに共通の動作を追加したい",
      "複数の関連するクラスで共通の実装を共有し、一部を強制的にオーバーライドさせたい",
      "Javaで多重継承を実現したい",
      "staticメソッドだけを提供したい"
    ],
    answer: 1,
    explanation: "抽象クラスは「is-a関係」のある関連クラスで共通実装を共有しつつ、サブクラスに特定メソッドの実装を強制させる際に適しています。無関係なクラスへの共通機能追加にはインタフェースが向いています。"
  },

  // ==================== 例外処理（発展） ====================
  {
    topic: "例外処理",
    question: "throwとthrowsの違いとして正しいのはどれですか？",
    choices: [
      "throwはメソッド宣言に使い、throwsは例外をスローする文",
      "throwは例外オブジェクトを実際にスローする文、throwsはメソッドが投げる可能性のある例外を宣言する",
      "違いはない",
      "throwsはRuntimeExceptionのみに使える"
    ],
    answer: 1,
    explanation: "throw new Exception(); のようにthrowは実際に例外をスローします。void method() throws IOException { } のようにthrowsはメソッドがスローする可能性のある例外を宣言します。"
  },
  {
    topic: "例外処理",
    question: "catchブロックで例外のメッセージを取得するメソッドはどれですか？",
    choices: [
      "e.message()",
      "e.getMessage()",
      "e.toString()",
      "e.getError()"
    ],
    answer: 1,
    explanation: "getMessage()で例外メッセージを取得できます。toString()はクラス名とメッセージを含む文字列、printStackTrace()はスタックトレースを出力します。"
  },
  {
    topic: "例外処理",
    question: "Errorクラスについて正しい説明はどれですか？",
    choices: [
      "通常のアプリ内でcatchして回復すべき問題",
      "JVM自体の重大な問題で通常キャッチすべきでない（OutOfMemoryError等）",
      "RuntimeExceptionのサブクラス",
      "必ずthrowsで宣言する必要がある"
    ],
    answer: 1,
    explanation: "Errorは通常アプリで処理できないJVMレベルの問題（OutOfMemoryError, StackOverflowErrorなど）を表します。通常はキャッチすべきでなく、発生した場合はJVMが終了します。"
  },

  // ==================== Java API（発展） ====================
  {
    topic: "Java API",
    question: "String.split(\",\")の動作はどれですか？",
    choices: [
      "文字列を1文字ずつ分割する",
      "カンマで文字列を分割してString配列を返す",
      "カンマを削除する",
      "文字列を半分に分割する"
    ],
    answer: 1,
    explanation: "split(区切り文字)は文字列を指定した区切り文字で分割してString配列を返します。例：\"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"]"
  },
  {
    topic: "Java API",
    question: "StringBuilder.append()の説明として正しいのはどれですか？",
    choices: [
      "新しいStringBuilderオブジェクトを返す",
      "既存のStringBuilderに文字列を追加し、同じオブジェクトを返す",
      "文字列の先頭に追加する",
      "StringBuilder同士を比較する"
    ],
    answer: 1,
    explanation: "StringBuilder.append()は呼び出したStringBuilderオブジェクト自身を変更して同じオブジェクトを返します（メソッドチェーン可能）。例：sb.append(\"Hello\").append(\" World\")"
  },
  {
    topic: "Java API",
    question: "次のコードの出力はどれですか？\n\nStringBuilder sb = new StringBuilder(\"Hello\");\nsb.reverse();\nSystem.out.println(sb);",
    choices: ["Hello", "olleH", "コンパイルエラー", "H"],
    answer: 1,
    explanation: "StringBuilder.reverse()は文字列を逆順にします。\"Hello\" → \"olleH\" が出力されます。"
  },
  {
    topic: "Java API",
    question: "Collections（java.util.Collections）クラスの説明として正しいのはどれですか？",
    choices: [
      "コレクションを格納するクラス（インスタンス化できる）",
      "コレクション操作のstaticメソッドを提供するユーティリティクラス",
      "インタフェース",
      "Listのサブクラス"
    ],
    answer: 1,
    explanation: "java.util.Collectionsはsort(), reverse(), shuffle(), max(), min()などのstaticメソッドを提供するユーティリティクラスです。java.util.Collectionとは別物で注意が必要です。"
  },
  {
    topic: "Java API",
    question: "Math.abs(-5)の戻り値はどれですか？",
    choices: ["-5", "5", "0", "コンパイルエラー"],
    answer: 1,
    explanation: "Math.abs()は絶対値を返します。abs(-5)は5を返します。"
  },
  {
    topic: "Java API",
    question: "String.indexOf(\"bc\")の説明として正しいのはどれですか？",
    choices: [
      "\"bc\"が文字列に含まれるかbooleanで返す",
      "\"bc\"が最初に現れるインデックスを返す（見つからない場合は-1）",
      "\"bc\"の文字数を返す",
      "\"bc\"を削除した文字列を返す"
    ],
    answer: 1,
    explanation: "indexOf()は指定した文字列が最初に現れる位置のインデックスを返します。見つからない場合は-1を返します。例：\"abcde\".indexOf(\"bc\") → 1"
  },
  {
    topic: "Java API",
    question: "次のコードの出力はどれですか？\n\nArrayList<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nlist.add(30);\nlist.remove(1);\nSystem.out.println(list);",
    choices: ["[10, 30]", "[20, 30]", "[10, 20]", "[10, 20, 30]"],
    answer: 0,
    explanation: "list.remove(1)はインデックス1の要素（20）を削除します。削除後はリストが[10, 30]になります。remove(Integer.valueOf(1))とすると値1を削除する動作になります。"
  },

  // ==================== Javaの基本（発展） ====================
  {
    topic: "Javaの基本",
    question: "Javaのimport文の役割はどれですか？",
    choices: [
      "外部のJARファイルを読み込む",
      "完全修飾クラス名（パッケージ名.クラス名）を省略して使えるようにする",
      "クラスをコンパイルする",
      "変数をインポートする"
    ],
    answer: 1,
    explanation: "import文を使うことでクラスを完全修飾名（java.util.ArrayList）ではなく短い名前（ArrayList）で使えます。java.langパッケージは自動importされるためimport不要です。"
  },
  {
    topic: "Javaの基本",
    question: "JAR（Java ARchive）ファイルとは何ですか？",
    choices: [
      "Javaのソースコードのみをまとめたファイル",
      "複数のclassファイルやリソースをまとめたZIP形式のアーカイブ",
      "Javaの設定ファイル",
      "JVMの実行ファイル"
    ],
    answer: 1,
    explanation: "JARファイルは複数の.classファイルやリソース（画像等）をまとめたZIP形式のアーカイブです。ライブラリの配布や実行可能プログラムのパッケージングに使われます。"
  },
  {
    topic: "Javaの基本",
    question: "Javaのメモリ領域として、オブジェクトが格納されるのはどこですか？",
    choices: ["スタック（Stack）", "ヒープ（Heap）", "メソッドエリア", "レジスタ"],
    answer: 1,
    explanation: "newで生成したオブジェクトはヒープ領域に格納されます。ローカル変数やメソッド呼び出しの情報はスタック領域に格納されます。"
  },

  // ==================== カプセル化（発展） ====================
  {
    topic: "カプセル化",
    question: "JavaBeansの命名規則として正しいのはどれですか？",
    choices: [
      "フィールドはpublic、メソッドはprivate",
      "フィールドはprivate、getter/setterはpublicでget/setプレフィックスをつける",
      "全メンバーをstaticにする",
      "クラス名は小文字で始める"
    ],
    answer: 1,
    explanation: "JavaBeansの慣習：フィールドはprivate、getterはpublic ReturnType getXxx()、setterはpublic void setXxx(Type value)と定義します。boolean型のgetterはisXxx()も使われます。"
  },

  // ==================== 総合・応用問題 ====================
  {
    topic: "総合・応用",
    question: "オブジェクト指向の3大要素として正しいのはどれですか？",
    choices: [
      "継承・ポリモーフィズム・ガベージコレクション",
      "カプセル化・継承・ポリモーフィズム",
      "抽象化・コンパイル・実行",
      "クラス・オブジェクト・メソッド"
    ],
    answer: 1,
    explanation: "オブジェクト指向の3大要素は「カプセル化（Encapsulation）」「継承（Inheritance）」「ポリモーフィズム（Polymorphism）」です。「抽象化（Abstraction）」を加えて4大要素とも言います。"
  },
  {
    topic: "総合・応用",
    question: "次のコードはコンパイルできますか？\n\nclass Parent {\n  private int value = 10;\n}\nclass Child extends Parent {\n  void show() {\n    System.out.println(value);\n  }\n}",
    choices: [
      "できる",
      "できない（privateフィールドはサブクラスから直接アクセスできない）",
      "できる（継承すれば使える）",
      "実行時エラー"
    ],
    answer: 1,
    explanation: "privateメンバーはそのクラス内からのみアクセスできます。Childクラスでvalueに直接アクセスするとコンパイルエラーになります。親クラスにgetValue()などのpublicメソッドを用意してアクセスします。"
  },
  {
    topic: "総合・応用",
    question: "次のうちJavaのコーディング規約として一般的なものはどれですか？",
    choices: [
      "クラス名は小文字始まり（例：myClass）",
      "クラス名は大文字始まり（例：MyClass）、変数名はキャメルケース（例：myVar）",
      "定数は小文字（例：maxvalue）",
      "メソッド名は大文字始まり（例：MyMethod）"
    ],
    answer: 1,
    explanation: "Javaの命名規約：クラス名はパスカルケース（大文字始まり）、変数・メソッド名はキャメルケース（小文字始まり）、定数はALL_UPPER_CASE（アンダースコア区切り大文字）です。"
  },
  {
    topic: "総合・応用",
    question: "次のコードの問題点はどれですか？\n\npublic class Main {\n  public static void main(String[] args) {\n    int[] arr = null;\n    System.out.println(arr.length);\n  }\n}",
    choices: [
      "コンパイルエラー（null代入不可）",
      "実行時NullPointerException",
      "0が出力される",
      "問題ない"
    ],
    answer: 1,
    explanation: "nullの参照に対してフィールドアクセス（arr.length）を行うとNullPointerExceptionが発生します。配列を使う前にnullチェックが必要です。"
  },
  {
    topic: "総合・応用",
    question: "スタックオーバーフロー（StackOverflowError）が発生する典型的な原因はどれですか？",
    choices: [
      "配列サイズが大きすぎる",
      "終了条件のない（または誤った）再帰呼び出し",
      "null参照へのアクセス",
      "整数のオーバーフロー"
    ],
    answer: 1,
    explanation: "無限に再帰呼び出しが続くとメソッドのスタックフレームが積み上がり、スタック領域が枯渇してStackOverflowErrorが発生します。再帰メソッドには必ず終了条件が必要です。"
  },
  {
    topic: "総合・応用",
    question: "次のコードの出力はどれですか？\n\nclass Animal {\n  String name = \"Animal\";\n  String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n  String name = \"Dog\";\n  String sound() { return \"Woof\"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    Animal a = new Dog();\n    System.out.println(a.name + \" \" + a.sound());\n  }\n}",
    choices: ["Dog Woof", "Animal Woof", "Animal ...", "Dog ..."],
    answer: 1,
    explanation: "メソッドは実行時の実際の型（Dog）で解決されます（動的ディスパッチ）。フィールドは参照変数の型（Animal）で解決されます（フィールドは多態性の対象外）。よって name=Animal、sound()=Woofとなります。"
  },
  {
    topic: "総合・応用",
    question: "次のコードはコンパイルできますか？\n\ninterface Flyable {\n  void fly();\n}\ninterface Swimmable {\n  void swim();\n}\nclass Duck implements Flyable, Swimmable {\n  public void fly() { }\n  public void swim() { }\n}",
    choices: [
      "できない（インタフェースは1つしかimplements不可）",
      "できる（複数implementsは合法）",
      "できるが、flyかswimどちらかだけ実装すれば良い",
      "コンパイルエラー（Duckクラスにコンストラクタが必要）"
    ],
    answer: 1,
    explanation: "Javaでは複数のインタフェースをimplementsできます。インタフェースの全abstractメソッドを実装すればコンパイルできます。これは多重継承の弊害なしに多態性を実現できるJavaの特徴です。"
  },
  {
    topic: "総合・応用",
    question: "次の中でコンパイルエラーにならないのはどれですか？",
    choices: [
      "int x = 3.14;",
      "double d = 3;",
      "boolean b = 1;",
      "char c = \"A\";"
    ],
    answer: 1,
    explanation: "int → double は拡大変換なので自動的に変換されます。int 3 が double 3.0 になります。int = 3.14（縮小）、boolean = 1（型不一致）、char = \"A\"（ダブルクォートはString）はすべてコンパイルエラーです。"
  }
];
