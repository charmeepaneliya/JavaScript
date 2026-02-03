//1
let a= "7"+3;
console.log(a,typeof a); //73 string

//2
let b = "7"-3;
console.log(b,typeof b); //4 number

//3
let c = "10" * "10";
console.log(c,typeof c); //100 number

//4
let d = "10"/2;
console.log(d,typeof d); //5 number

//5
let e = Number("20");
console.log(e,typeof e); //20 number

//6
let f = String(50);
console.log(f,typeof f); //50 string

//7
let g=+"15"+5;
console.log(g,typeof g); //20 number

//8
let h=parseInt("10px");
console.log(h, typeof h); //10 number

//9
let i= parseFloat("10.7x");
console.log(i,typeof i); //10.7 numbrer

//10
let j= Boolean(1);
console.log(j,typeof j); //true boolean

//11
let k=Boolean(0);
console.log(k,typeof k); //false boolean

//12
let l=Boolean("");
console.log(l, typeof l);//false boolean

//13
let m=Boolean("false");
console.log(m, typeof m);//true boolean

//14
let n= true+1;
console.log(n, typeof n);//2 number

//15
let o = false + 10;
console.log(o, typeof o);  //10 number

//16
let p = true == 1;//true -> 1,  1 == 1 -> true
console.log(p, typeof p);//true boolean

//17
let q = true === 1;//true === 1, 1===1(type mismatch)->false
console.log(q, typeof q);//false boolean

//18
let r = Number(null);
console.log(r, typeof r);//0 number

// 19
let s = String(null);
console.log(s, typeof s);  //null string


//20
let  t= Boolean(null);
console.log(t, typeof t); //false boolean 

//21
let u = null + 1;
console.log(u, typeof u); //1 number

//22
let v = Number(undefined);
console.log(v, typeof v);  //NaN number

//23
let w = String(undefined);
console.log(w, typeof w); //undefined string

//24
let x = Boolean(undefined);
console.log(x, typeof x); //false boolean

//25
let y = undefined + 1;
console.log(y, typeof y);  //NaN number

//26
let aa = Number("abc");
console.log(aa,typeof aa);//NaN number

//27
let ab = Boolean(NaN);
console.log(ab, typeof ab);//false boolean

//28
let ac = String(NaN);
console.log(ac, typeof ac);//NaN string

//29
let ad = String([1,2,3]);
console.log(ad,typeof ad);//1,2,3 string

//30
let ae = Number([7]);
console.log(ae, typeof ae);//7 number

//31
let af= Number([7,3]);
console.log(af, typeof af);//NaN number

//32
let ag = Boolean([]);
console.log(ag, typeof ag);//true boolean, []=""(empty string)

//33
let ah = String({});
console.log(ah, typeof ah); //[object Object] string , {} = "[object Object]"

//34
let ai = Number({});
console.log(ai, typeof ai);  //NaN number,  {} = "[object Object]"

//35
let aj = Boolean({});
console.log(aj, typeof aj);  //true boolean ,   {} = "[object Object]"

//36
let ak = ({} + 1);
console.log(ak, typeof ak);//[object Object]1 string,   {} = "[object Object]"

//37
let  al = "7"+true;
console.log(al, typeof al);//7true string

//38
let am="7"-true;
console.log(am, typeof am);//6 number

//39
let an=false+"10";
console.log(an,typeof an);//false10 string

//40
let ao = "5" * true;
console.log(ao, typeof ao);//5 number

//41
let ap = Number(true);
console.log(ap, typeof ap);//1 number

//42
let aq = Number(false);
console.log(aq, typeof aq);//0 number

//43
let ar = String(true);
console.log(ar, typeof ar);//true string

//44
let as = Boolean("0");
console.log(as, typeof as);//true boolean

//45
let at = Boolean(" ");
console.log(at, typeof at);//true boolean

//46
let au = "" + 1 + 2;
console.log(au, typeof au);//12 string

//47
let av = 1 + 2 + "";
console.log(av, typeof av);//3 string

//48
let aw = [] == false;
console.log(aw, typeof aw);//true boolean,  []=""(empty string)
/* []  → "" → 0
    false → 0
    0 == 0 → true */

//49
let ax = typeof (null + "");
console.log(ax,typeof ax);//string string

//50
let ay = {} == "[object Object]";
console.log(ay, typeof ay); //true boolean

//51
let az = [] + {} + 1; //[]=""(empty string),{} = "[object Object]",Result → "" + "[object Object]" = "[object Object]"
console.log(az, typeof az);//[object Object]1 string


