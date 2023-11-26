import { useState } from "react";
import "./prfoit.css";
function Prfit() {
  const [income1, setincom1] = useState("");
  const [income2, setincom2] = useState("");
  const [income3, setincom3] = useState("");
  const [income4, setincom4] = useState("");
  const [income5, setincom5] = useState("");
  const [income6, setincom6] = useState("");
  const [income7, setincom7] = useState("");
  const [income8, setincom8] = useState("");
  const [income9, setincom9] = useState("");
  const [income10, setincom10] = useState("");
  const [income11, setincom11] = useState("");
  const [income12, setincom12] = useState("");
  const [income13, setincom13] = useState("");
  const [income14, setincom14] = useState("");
  const sum = Number(income1) + Number(income2);
  const homexp =
    Number(income3) +
    Number(income4) +
    Number(income5) +
    Number(income11) +
    Number(income12) +
    Number(income13) +
    Number(income6) +
    Number(income7);
  const left = Number(sum) - Number(homexp);
  const inv =
    Number(income8) + Number(income9) + Number(income10) + Number(income14);
  const final = sum - homexp - inv;

  return (
    <div className="pro" id="proo">
      <></>
      <h1>Income</h1>
      <div className="inn">
        <label className="man" htmlFor="person">
          Person1:
        </label>
        <input
          type="text"
          placeholder="eneter your income"
          className="inp"
          onChange={(a) => setincom1(a.target.value)}
        />
        <br />
        <label className="man" htmlFor="person">
          Person2:
        </label>
        <input
          type="text"
          placeholder="eneter your income"
          className="inp"
          onChange={(b) => setincom2(b.target.value)}
        />
        <h2>total:{sum}</h2>
      </div>
      <div className="line" id="linee"></div>
      <div className="exp">
        <h1>Expeince</h1>
        <div className="innn">
          <label htmlFor="rent" className="man">
            Home Rent:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Rent"
            onChange={(c) => setincom3(c.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Current Bill:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Bill"
            onChange={(d) => setincom4(d.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Milk amout:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Milk amt"
            onChange={(e) => setincom5(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Maid Bill:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Maid Amt"
            onChange={(e) => setincom11(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            All bills:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter all bills Amt"
            onChange={(e) => setincom12(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Personal Exp:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Personal Exp"
            onChange={(e) => setincom13(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Unknow Exp:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Petrol"
            onChange={(f) => setincom6(f.target.value)}
          />{" "}
          <br />
          <label htmlFor="rent" className="man">
            Ration amt:
          </label>
          <input
            type="text"
            className="inp
        "
            placeholder="Eneter Rent"
            onChange={(g) => setincom7(g.target.value)}
          />
          <br />
          <h1>total home exp:{homexp}</h1>
          <h2>total amount left:{left}</h2>
        </div>
      </div>
      <div className="line" id="mf"></div>
      <div className="mf">
        <h1>Investment</h1>
        <div className="innn">
          <label htmlFor="invest" className="man">
            Mutale Fund:
          </label>
          <input
            type="text"
            placeholder="MF"
            className="inp"
            onChange={(h) => setincom8(h.target.value)}
          />
          <br />
          <label htmlFor="invest" className="man">
            Recurring Deposit:
          </label>
          <input
            type="text"
            placeholder="RD"
            className="inp"
            onChange={(i) => setincom9(i.target.value)}
          />
          <br />
          <label htmlFor="invest" className="man">
            Cheety Amt:
          </label>
          <input
            type="text"
            placeholder="MF"
            className="inp"
            onChange={(j) => setincom10(j.target.value)}
          />
          <br />
          <label htmlFor="invest" className="man">
            Gold Savings:
          </label>
          <input
            type="text"
            placeholder="Gold"
            className="inp"
            onChange={(j) => setincom14(j.target.value)}
          />
          <br />
          <h1>total investment:{inv}</h1>
          <h2>Final amont left:{final}</h2>
        </div>
      </div>
      <div className="line"></div>
      <div className="total" id="tot">
        <h1>Total Balance Sheet</h1>
        <div className="list">
          <ul className="tot">
            <li>Person1:</li>
            <li>Person2:</li>
            <li className="one"> total:{sum}</li>
          </ul>
        </div>
        <div className="list">
          <ul className="tot">
            <li>Rent:</li>
            <li>Maid:</li>
            <li>Food Items:</li>
            <li>Transpotaion:</li>
            <li>All Bills:</li>
            <li>Personal Exp:</li>
            <li>Unknow Exp:</li>
            <li className="two">total:{homexp}</li>
          </ul>
        </div>
        <div className="list">
          <ul className="tot">
            <li>Mf:</li>
            <li>Rd:</li>
            <li>Fd:</li>
            <li className="three"> total:{inv}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Prfit;
