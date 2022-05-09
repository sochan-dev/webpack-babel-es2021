//ここでimportすることでbabelで2021に対応させることが出来る。
//最新のesは構文が違うだけではなく、新しい機能もあるため
import "@babel/polyfill";

//es2021で追加されたString.prototype.replaceAllを使ってみる。↓
const str = "sotatsu is gorgeous. Moreover, sotatsu can program"
alert(str.replaceAll("sotatsu", "sochan"));
