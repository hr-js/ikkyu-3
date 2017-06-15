// TODO: 設定を追加する
const gulp		 = require('gulp'),
			concat	 = require('gulp-concat'),
			question = [
						'src/01_js_header_question.js',
						'src/03_1_question_title.js',
						'src/04_1-1_question.js',
						'src/06_1-2_question.js',
						'src/08_1-3_question.js',
						'src/10_1-4_question.js',
						'src/12_1-5_question.js',
						'src/14_2_question_title.js',
						'src/15_2-1_question.js',
						'src/17_2-2_question.js',
						'src/19_3_question_title.js',
						'src/20_3-1_question.js',
						'src/22_3-2_question.js',
						'src/24_3-3_question_title.js',
						'src/25_3-3_question.js',
						'src/28_4_question_title.js',
						'src/30_4_code1.js',
						'src/32_4_code2.js',
						'src/34_4_code3.js',
						'src/36_4_code4.js',
						'src/38_4_code5.js',
						'src/39_5_question_title.js',
						'src/40_5_1_question.js',
						'src/42_5_2_question.js',
						'src/44_5_3_question.js',
						'src/46_5_4_question.js'
						],
			answer 	 = [
						'src/02_js_header_answer.js',
						'src/03_1_question_title.js',
						'src/04_1-1_question.js',
						'src/05_1-1_answer.js',
						'src/06_1-2_question.js',
						'src/07_1-2_answer.js',
						'src/08_1-3_question.js',
						'src/09_1-3_answer.js',
						'src/10_1-4_question.js',
						'src/11_1-4_answer.js',
						'src/12_1-5_question.js',
						'src/13_1-5_answer.js',
						'src/14_2_question_title.js',
						'src/15_2-1_question.js',
						'src/16_2-2_answer.js',
						'src/17_2-2_question.js',
						'src/18_2-2_answer.js',
						'src/19_3_question_title.js',
						'src/20_3-1_question.js',
						'src/21_3-1_answer.js',
						'src/22_3-2_question.js',
						'src/23_3-2_answer.js',
						'src/24_3-3_question_title.js',
						'src/26_3-3_answer.js',
						'src/28_4_question_title.js',
						'src/29_4_answer1.js',
						'src/30_4_code1.js',
						'src/31_4_answer2.js',
						'src/32_4_code2.js',
						'src/33_4_answer3.js',
						'src/34_4_code3.js',
						'src/35_4_answer4.js',
						'src/36_4_code4.js',
						'src/37_4_answer5.js',
						'src/38_4_code5.js',
						'src/39_5_question_title.js',
						'src/40_5_1_question.js',
						'src/41_5_1_answer.js',
						'src/42_5_2_question.js',
						'src/43_5_2_answer.js',
						'src/44_5_3_question.js',
						'src/45_5_3_answer.js',
						'src/46_5_4_question.js',
						'src/47_5_4_answer.js',
						];

// 問題用のjsファイルを書き出す時
gulp.task('default', function(){
	return gulp.src(question).
		pipe(concat('main.js')).
		pipe(gulp.dest('./'));
});

// 解答用のjsファイルを書き出す時
gulp.task('answer', function(){
	return gulp.src(answer).
		pipe(concat('main.js')).
		pipe(gulp.dest('./'));
});
