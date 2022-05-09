//ここで追記するようなことはない。ポリフィルは設定ファイルで指定せず、実行時に使用する。

module.exports = {
    mode: "production",
  
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env"
                ],
              },
            },
          ],
        },
      ],
    },
    target: ["web", "es5"],
  };