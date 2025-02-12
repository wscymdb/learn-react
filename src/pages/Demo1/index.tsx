import React, { memo, useEffect } from "react";

const Demo1 = memo(() => {
  // 生成一个函数
  const generFn = (msg) => {
    return (e) => {
      console.log(msg);
    };
  };

  useEffect(() => {
    const documentCaptureFn = generFn("document 捕获");
    const documentFn = generFn("document 冒泡");
    const bodyCaptureFn = generFn("body 捕获");
    const bodyFn = generFn("body 冒泡");
    const rootCaptureFn = generFn("root 捕获");
    const rootFn = generFn("root 冒泡");
    const outerCaptureFn = generFn("outer 捕获「原生」");
    const outerFn = generFn("outer 冒泡「原生」");
    const innerCaptureFn = generFn("inner 捕获「原生」");
    const innerFn = generFn("inner 冒泡「原生」");
    const rootEl = document.getElementById("root");
    const outerEl = document.getElementById("outer");
    const innerEl = document.getElementById("inner");

    document.addEventListener("click", documentCaptureFn, true);
    document.addEventListener("click", documentFn, false);

    document.body.addEventListener("click", bodyCaptureFn, true);
    document.body.addEventListener("click", bodyFn, false);

    rootEl?.addEventListener("click", rootCaptureFn, true);
    rootEl?.addEventListener("click", rootFn, false);

    outerEl?.addEventListener("click", outerCaptureFn, true);
    outerEl?.addEventListener("click", outerFn, false);

    innerEl?.addEventListener("click", innerCaptureFn, true);
    innerEl?.addEventListener("click", innerFn, false);
  }, []);

  return (
    <div
      id="outer"
      onClick={(e) => {
        console.log("outer 冒泡「合成」");
      }}
      onClickCapture={() => {
        console.log("outer 捕获「合成」");
      }}
    >
      <div
        id="inner"
        onClick={(e) => {
          // e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          console.log("inner 冒泡「合成」");
        }}
        onClickCapture={() => {
          console.log("inner 捕获「合成」");
        }}
      ></div>
    </div>
  );
});

export default Demo1;
