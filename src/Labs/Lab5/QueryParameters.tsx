import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
<div id="wd-query-parameters">
  <h3>Query Parameters</h3>
  <input id="wd-query-parameter-a"
         className="form-control mb-2"
         defaultValue={a} type="number"
         onChange={(e) => setA(e.target.value)} />
  <input id="wd-query-parameter-b"
         className="form-control mb-2"
         defaultValue={b} type="number"
         onChange={(e) => setB(e.target.value)} />
  <a id="wd-query-parameter-add"
     href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
    Add {a} + {b}
  </a>
  <a id="wd-query-parameter-subtract"
     href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
    Substract {a} - {b}
  </a>
  {/* create additional links to test multiply and divide. use IDs starting with wd-query-parameter- */}
  <a id="wd-query-parameter-multiply"
     href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
    Mulitply {a} * {b}
  </a>

  <a id="wd-query-parameter-divide"
     href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
    Divide {a} / {b}
  </a>

  <hr />
</div>
    )
}

