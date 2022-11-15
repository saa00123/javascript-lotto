const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.purchase;
  }
  play() {
    let amount;

    this.purchase = this.Input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined) return 0;
    this.CheckError();
  }

  Input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }

  CheckError() {
    let regex = /^[0-9]+$/;

    if (this.purchase === undefined || this.purchase === null) {
      MissionUtils.Console.close();
      throw new Error('[ERROR] 입력된 값이 없습니다.');
    }
    if (!regex.test(this.purchase)) {
      MissionUtils.Console.close();
      throw new Error('[ERROR] 숫자 범위를 확인해주세요');
    }
  }
}

module.exports = App;
