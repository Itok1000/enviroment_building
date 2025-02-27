import React from "react";
import { SidebarData } from "./SidebarData";
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar
//rfce で関数のコンポーネントを作成
/*rafceとrfceの違いについて
rafce
rafce は「React Arrow Function Component Export」の略です。これは、アロー関数と呼ばれる特別な関数の形式を使って、すぐに使えるReactのコンポーネントを作成します。そして、自動的にエクスポートもしてくれるので、他のファイルから簡単にこのコンポーネントを使うことができます。

例えば、次のようになります：

javascript
const ComponentName = () => {
  return (
    <div>
      こんにちは！これはアロー関数で作ったコンポーネントです。
    </div>
  );
}

export default ComponentName;

rfce
rfce は「React Function Component Export」の略です。これは、通常の関数を使ってReactのコンポーネントを作成します。そして、自動的にエクスポートもしてくれます。

例えば、次のようになります：

javascript
function ComponentName() {
  return (
    <div>
      こんにちは！これは通常の関数で作ったコンポーネントです。
    </div>
  );
}

export default ComponentName;

まとめると：

rafce はアロー関数を使ってコンポーネントを作り、自動的にエクスポートします。
rfce は通常の関数を使ってコンポーネントを作り、自動的にエクスポートします。
 */