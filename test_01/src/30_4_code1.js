// 定数
const PermissionKeyCodes = [8, 9, 13, // 8 = BackSpace, 9 = Tab, 13 = enter
                            37, 39, 46, // 37 = 左キー, 39 = 右キー, 46 = delete
                            48, 49, 50, 51, 52, // 数字キー = 1 〜 9
                            53, 54, 55, 56, 57,
                            96, 97, 98, 99, 100,  // 数字キー(テンキー) = 1 〜 9
                            101, 102, 103, 104, 105,
                            110, 190];  // 110 = ピリオド(テンキー), 190 = ピリオド
// 変数
let selectedMode = 0;   // 計算モード
let calcResult;     // 計算結果
let inputLeft;      // 左辺に入力した値
let inputRight;     // 右辺に入力した値
let result;         // 計算結果
